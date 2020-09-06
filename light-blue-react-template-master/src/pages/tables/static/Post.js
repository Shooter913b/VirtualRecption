import React from "react"
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
import { Card, CardBody } from 'reactstrap';
function Post(props) {
    return (
        <div>
        <Col lg={3}>
    <Card className="border-0" style={{height: '35 rem', width:'26rem'}}>
    <CardBody>
    <hr />
    <div>
    <h3>{props.name}</h3>
    <hr />
    <br />
    <h5>{props.content}</h5>
    </div>
    </CardBody>
    </Card>
    </Col>
        </div>
    )
}

export default Post
