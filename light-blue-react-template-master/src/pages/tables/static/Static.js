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
        <Row>
          <Col>
          <Card className="border-0">
            <CardBody>
            <>
    <Card>
      <CardBody>
        <InputGroup className={this.state.focused}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText><i className="fab fa-dribbble"></i></InputGroupText>
          </InputGroupAddon>
            <Input
              type="textarea"
              placeholder="Type here..."
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
        </InputGroup>
      </CardBody>
    </Card>
  </>
              <hr />
                <Button className="btn-rounded-f" color="info">Post</Button>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>

          </Col>
          <Col lg={6}>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Static;
