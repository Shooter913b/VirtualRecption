//
import React from 'react';
import {
  Row, Col, Button, Card, CardBody
} from 'reactstrap';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v4'
import Widget from '../../components/Widget';
import s from './Notifications.module.scss';

class Notifications extends React.Component {

  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true
    }
  }

  componentDidMount() {
    toast.success('Promotions listed today! Be sure to check out the bulletin board!', {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  }

  addSuccessNotification = () => toast.success('Showing success message was successful!', this.state.options);

  toggleLocation = (location) => {
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        position: location
      }
    }));
  }

  addInfoNotification = () => {
    let id = uuid();
    toast.info(
    <div>
      Launching thermonuclear war...
      <Button onClick={() => this.launchNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Cancel launch</Button>
    </div>,
    {...this.state.options,toastId: id},
    );
  }

  launchNotification = (id) => toast.update(id, { ...this.state.options, render: "Thermonuclear war averted", type: toast.TYPE.SUCCESS });

  addErrorNotification = () => {
    let id = uuid();
    toast.error(
    <div>
      Error destroying alien planet <br/>
      <Button onClick={() => this.retryNotification(id)} outline size="xs" className="width-100 mb-xs mr-xs mt-1">Retry</Button>
    </div>,
    {...this.state.options,toastId: id}
    );
  }

  retryNotification = (id) =>  toast.update(id, {...this.state.options, render: 'Alien planet destroyed!', type: toast.TYPE.SUCCESS });

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Extra Info - <span className="fw-semi-bold">Members</span>
        </h1>
        <br />
        <br />
        <br />
        <Card className="border-0">
  <CardBody>
    <h3>Roles</h3>
    <hr />
    <Row>
      <Col lg="4" xs="12">
        <h5 className="m-t-1" className="text-danger">CEO</h5>
        <ul>
          <li>Hugo Scottsman</li>
        </ul>
      </Col>

      <Col lg="4" xs="12">
        <h5 className="m-t-1" className="text-warning">Executive Manager</h5>
        <ul>
          <li>Hector Martinez</li>
          <li>Jan Levinson</li>
          <li>Matthew</li>
          <li>Ryan </li>
          <li>Dan King</li>
          <li>Aaron </li>
        </ul>
      </Col>

      <Col lg="4" xs="12">
        <h5 className="m-t-1" className="text-success">Manager</h5>
        <ul>
        <li>Scott Rogers</li>
        <li>Dwight Schrute</li>
        <li>Julia Milton</li>
        <li>Jack Freeman</li>
        <li>Travis Strater</li>
        <li><span className="fw-bold">Bob Scone</span> (You)</li>
        <li>Angela Martin</li>
        <li>Brody </li>
        <li>Stanley Green</li>
        <li>Jim Halpert</li>
        <li>Sam Berling</li>
        <li>Michael Scott</li>
        <li>William</li>
        </ul>
      </Col>

      <Col lg="4" xs="12">
        <h5 className="m-t-1" className="text-info">Salesman</h5>
        <ul>
        <li>Kevin Garcia</li>
        <li>Patrick Hawk</li>
        <li>Neal Roberts</li>
        <li>Richard Jameson</li>
        <li>Grace Weston</li>
        <li>Scarlett Zan</li>
        <li>Luke Johnson</li>
        <li>Alexia Carter</li>
        <li>Tony Banning</li>
        <li>Paul Baster</li>
        <li>Ashley Jackson</li>
        <li>Todd Walker</li>
        <li>Randy Lance</li>
        <li>Oscar Fernandez</li>
        <li>Gordon Smith</li>
        <li>Alice Hampton</li>
        <li>Joe Packer</li>
        <li>Samantha Wesley</li>
        <li>Henry McMiller</li>
        <li>Jake Harper</li>
        </ul>
      </Col>

      <Col lg="4" xs="12">
        <h5 className="m-t-1" className="text-info">Salesman</h5>
        <ul>
        <li>Alex Chang</li>
        <li>Ethan O'Neil</li>
        <li>Quentin Bennin</li>
        <li>James Trumbull</li>
        <li>Anna Howard</li>
        <li>Felix Hunt</li>
        <li>Bruno Jones</li>
        <li>George Heffley</li>
        <li>Chad Barker</li>
        <li>Hank Brown</li>
        <li>Bethany</li>
        <li>Eli Hudson</li>
        <li>Jack Walton</li>
        <li>Charlie Bernard</li>
        <li>Kirk Wallace</li>
        <li>David Taylor</li>
        <li>Jessie Pierce</li>
        <li>Max Corman</li>
        <li>Andy Jones</li>
        <li>Daniel Waterman</li>
        </ul>
      </Col>
    </Row>
  </CardBody>
</Card>
  <br />
        <Widget title={<h6> Birthdays </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="m-t-1" className="fw-bold">September</h5>
              <ul>
              <li><span className="text-success">[Manager] </span>Jack Freeman: 11th</li>
              <li><span className="text-info">[Salesman] </span>Luke Johnson: 13th</li>
              <li><span className="text-info">[Salesman] </span>Charlie Bernard: 25th</li>
              </ul>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1" className="fw-bold">October</h5>
              <ul>
                <li><span className="text-danger">[CEO] </span>Hugo Scottsman: 4th</li>
                <li><span className="text-success">[Manager] </span>Bob Scone: 9th</li>
                <li><span className="text-info">[Salesman] </span>Anna Howard: 12th</li>
                <li><span className="text-warning">[Executive Manager] </span>Dan King: 13th</li>
                <li><span className="text-info">[Salesman] </span>Andy Jones: 20th</li>
                <li><span className="text-success">[Manager] </span>Jim Halpert: 20th</li>
                <li><span className="text-success">[Manager] </span>Stanley Green: 22nd</li>
                <li><span className="text-info">[Salesman] </span>Alice Hampton: 30th</li>
              </ul>
            </Col>
            <Col lg="4" xs="12">
              <h5 className="m-t-1" className="fw-bold">November</h5>
              <ul>
                <li><span className="text-info">[Salesman] </span>Hank Brown: 1st</li>
                <li><span className="text-success">[Manager] </span>Angela Martin: 15th</li>
                <li><span className="text-warning">[Executive Manager] </span>Hector Martinez: 17th</li>
                <li><span className="text-info">[Salesman] </span>Richard Jameson: 20th</li>
              </ul>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  }
}

export default Notifications;
