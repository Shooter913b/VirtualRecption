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
//import numOfPosts from '../tables/static/NumOfPosts'
//
import Login from '../login';
import { registerUser, registerError } from '../../actions/register';
//
import avatar from '../../images/people/a5.jpg';

let numOfPosts = 8

class Profile extends React.Component {
  addErrorNotification = () => {
    let id = uuid();
    toast.success(
    <div>
      Password successfully changed<br/>


    </div>,


    );
  }

render(){
  return(
    <div>
        <h1 className="page-title">Account </h1>
          <br />
          <br />
          <br />
          <Row >
            <Col xs={12} md={9}>
            <Card className="border-0">
              <CardBody>
                <h2 className="text-info">Bob Scone</h2>
                  <img src={avatar} alt="..."/>
                  <br />
                  <ul>
                    <li>Username: Bob Scone</li>
                    <li>Password: Password</li>
                    <li>Email: BobScone123@gmail.com</li>
                    <li>Rank: Manager</li>
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
                  <div className="text-center">{numOfPosts}</div>
                    <br />
                       <Progress value={numOfPosts} />
                </CardBody>
              </Card>
            </Col>
        </Row>
    </div>
  );
  }
}
export default Profile;
