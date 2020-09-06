import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import { Card, CardBody } from 'reactstrap';
import Widget from '../../../components/Widget';
import s from './Static.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import css from "./posts.css"
import Post from "./Post.js"
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
//import numOfPosts from './NumOfPosts';

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

var database = firebase.firestore();
var usersRef = db.collection("Users");
var postRef = db.collection("Posts");
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

class Static extends React.Component {
  constructor() {
    super();
    this.state = {
      postComp: [],
      newPost: '',
      options: {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true
      }
    };
    this.onEdit = this.onEdit.bind(this);
   this.addSuccessNotification = this.addSuccessNotification.bind(this);
  }
  onEdit(event){
      this.setState({[event.target.name] : event.target.value})
  }
    addSuccessNotification = () =>{
      const post = {
        Content: this.state.newPost,
        Name: 'Bob Scone'
      }
      var posts = 0
      postRef.add(post).then(() => {
      usersRef.doc("BxQGdgs2wKBCk79Cb5pr").get().then((docRef) => {
        posts = docRef.data().numOfPosts;
      }).then(() => {
        usersRef.doc("BxQGdgs2wKBCk79Cb5pr").update({numOfPosts:posts + 1});
      }).then(() => {
        toast.success('Successfully Posted!', this.state.options);
        console.log(posts);
      }).then(() => {
        window.location.reload();
      });
    });




  }
  componentWillUnmount(){

  }
  componentDidMount(){
    var postObjs = []
    postRef.get().then((snapshot) => {
      snapshot.forEach((ref) =>{
        postObjs.push(ref.data())
      })
    }).then(() => {
      const postComponents = postObjs.map(post => <Post key={(Math.random()*10000)%100}name={post.Name} content={post.Content} />)
      console.log(postComponents);
      this.setState({postComp: postComponents})
    })
  }
  parseDate(date) {
    this.dateSet = date.toDateString().split(' ');

    return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }





  render() {


    return (
      <div className={s.root}>
          <h1 className="page-title">Posts</h1>
          <br />
          <br />
          <br />
          <Row>

          {this.state.postComp}
            </Row>
    <br />

    <Row>
      <Col>
      <Card className="border-0">
        <CardBody>
        <div>
    <InputGroup className={this.state.focused}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText><i className="fa fa-comment"></i></InputGroupText>
      </InputGroupAddon>
        <Input
          type="textarea"
          placeholder="Type here..."
          onFocus={this.onFocus}
          name = "newPost"
          onBlur={this.onBlur}
          onChange = {this.onEdit}
        />
        </InputGroup>
    </div>
          <hr />
        <Button className="btn-rounded-f" color="info" id="show-success-message" onClick={this.addSuccessNotification}
         >Post</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
  <br />
      </div>
    );
  }

}

export default Static;
