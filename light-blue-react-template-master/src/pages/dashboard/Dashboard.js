import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table,
  Label,
  Input,
  Button,
  Form,
  FormGroup,
  FormText,
  Card,
  CardBody
} from 'reactstrap';

import Widget from '../../components/Widget';

import Calendar from './components/calendar/Calendar';
import Map from './components/maps/google/Google';
import Rickshaw from './components/rickshaw/Rickshaw';

import AnimateNumber from 'react-animated-number';

import s from './Dashboard.module.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA5 from '../../images/people/a5.jpg';
import peopleA4 from '../../images/people/a4.jpg';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
      markerType: 'POI',
      content: ''
    };
    this.checkTable = this.checkTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }
  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      markerType: value
    });

  }
  onEdit(event){
    console.log(this.state.content);
    this.setState({[event.target.name] : event.target.value})
  }
  content
  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>

        <Row>
          <Map markerType = {this.state.markerType} markerContent = {this.state.content}/>
              <Col lg={2}>
              <FormGroup>
               <Label>Select</Label>
               <Input type="select" name="select" onChange = {this.handleChange}>
                 <option>POI</option>
                 <option>Casual</option>
                 <option>Urgent</option>
               </Input>
             </FormGroup>
             <FormGroup>
              <Label>Content</Label>
              <Input type="text" name="Marker-content" placeholder="Content" onChange = {this.onEdit} name = "content" value = {this.state.content}/>
            </FormGroup>
            </Col>

        </Row>

      </div>
    );
  }
}

export default Dashboard;
