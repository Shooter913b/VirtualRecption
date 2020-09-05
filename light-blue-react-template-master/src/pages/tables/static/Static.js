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


class Static extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }
    addSuccessNotification = () => toast.success('Successfully Posted!', this.state.options);

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
          <Row>
          <Col lg={3}>
    <Card className="border-0">
    <CardBody>
    <hr />
    <div>
    <h3>Michael Scott</h3>
    <br />
    <h5>Everyone, we have bad news... the copier is broken. But
    we are going to make the hot receptionist fix it so don't worry!</h5>
    </div>
    </CardBody>
    </Card>
    </Col>

    <Col lg={3}>
<Card className="border-0">
<CardBody>
<hr />
<div>
<h3>Angela Martin</h3>
<br />
<h5>Our new product is launching tomorrow. Be sure to attend the
meeting at 10:30AM sharp.</h5>
</div>
</CardBody>
</Card>
</Col>  <Col lg={3}>
<Card className="border-0">
<CardBody>
<hr />
<div>
<h3>Jim Halpert</h3>
<br />
<h5>Promotions announced 9/6/20 at the bulletin board.
Make sure to keep you look out for that.</h5>
</div>
</CardBody>
</Card>
</Col>  <Col lg={3}>
<Card className="border-0">
<CardBody>
<hr />
<div>
<h3>Dwight Schrute</h3>
<br />
<h5>Heres the trivia for the day. Question: What kind of bear is best.
False, Black Bear.</h5>
</div>
</CardBody>
</Card>
</Col>
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
          onBlur={this.onBlur}
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
