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


import Widget from '../../components/Widget';

import avatar from '../../images/people/a5.jpg';

const Typography = () => (
    <div>
        <h1 className="page-title">Account </h1>
          <br />
          <Row >
            <Col xs={12} md={6}>
            <Card className="border-0">
              <CardBody>
                <h2 className="text-info">Bob Scone</h2>
                  <img src={avatar} alt="..."/>
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
                    <Button color="info">Change Password</Button>
                  <br />
                  <div className="text-center">8 Posts</div>
                    <br />
                       <Progress value="8" />
                </CardBody>
              </Card>
            </Col>
        </Row>
    </div>
);

export default Typography;
