import React from 'react';
import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    InputGroup,
    InputGroupText,
    Input,
    InputGroupAddon,
    Progress
} from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4'
import Widget from '../../components/Widget';
import s from '../notifications/Notifications.module.scss';
import NumOfPosts from "../numOfPosts"
import avatar from '../../images/people/a5.jpg';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
var config = {
  apiKey: "AIzaSyDsFYFFrQSKyTW852dCPDSM0FTZu8QlfEs",
    authDomain: "virtualreception-bfa65.firebaseapp.com",
    databaseURL: "https://virtualreception-bfa65.firebaseio.com",
    projectId: "virtualreception-bfa65",
    storageBucket: "virtualreception-bfa65.appspot.com",
    messagingSenderId: "450291103818",
    appId: "1:450291103818:web:ddc40cbf8754771f1dceb3",
    measurementId: "G-YD1DZRQ32T"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var db = firebase.firestore();
var posts = 0
var database = firebase.database();
var usersRef = db.collection("Users");
  usersRef.doc("BxQGdgs2wKBCk79Cb5pr").onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });
    var docRef = db.collection("Users").doc("BxQGdgs2wKBCk79Cb5pr");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      numOfPosts: 0
    };
  }
  addErrorNotification = () => {
    let id = uuid();

    toast.error(
    <div>
      Error changing password. Unavailable at this time. Please try again later <br/>

    </div>,
    );
  }

  componentDidMount(){
    usersRef.doc("BxQGdgs2wKBCk79Cb5pr").get().then((docRef) => {
      posts = docRef.data().numOfPosts;
      console.log(docRef.data());
    }).then(() => {
      this.setState({numOfPosts: posts})
      console.log(this.state.numOfPosts);
    })
  }
render(){
  return(
    <div>
        <h1 className="page-title">Account </h1>
          <br />
          <br />
          <br />
          <Row >
            <Col xs={12} md={6}>
            <Card className="border-0">
              <CardBody>
                <h2 className="text-info">Bob Scone</h2>
                  <img src={avatar} alt="..."/>
                  <ul>
                    <li>Username: Bob Scone</li>
                    <li>Email: BobScone123@gmail.com</li>
                    <li>Rank: <span className="text-warning">Executive Manager</span></li>
                  </ul>
                <hr />
                <p>Change Password</p>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fa fa-lock"></i></InputGroupText>
                      </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="New Password"
                        />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText><i className="fa fa-lock"></i></InputGroupText>
                      </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Rewrite Password"
                        />
                </InputGroup>
                  <br />


                  <Button color="info" id="show-error-message" onClick={this.addErrorNotification}>Change Password</Button>


                  <br />
                  <div className="text-center">{this.state.numOfPosts} Posts</div>
                    <br />
                       <Progress value={this.state.numOfPosts} />
                </CardBody>
              </Card>
            </Col>
        </Row>
    </div>
  );
  }
}
export default Profile;
