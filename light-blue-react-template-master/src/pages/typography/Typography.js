import React from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

import Widget from '../../components/Widget';
import { Card, CardBody } from 'reactstrap';

import avatar from '../../images/people/a5.jpg';

const Typography = () => (
    <div>
        <h1 className="page-title">Account</h1>
        <Row>
            <Col xs={12} md={6}>
            <Card className="border-0">
              <CardBody>
                <h2 className="text-info">Bob Scone</h2>
                    <img src={avatar} alt="..."/>
                <hr />
                  <div className="d-flex justify-content-between mb-lg">
                    <span className="text-muted"><small>342 REVIEWS</small></span>
                  </div>
                  <div className="mb-lg">
                    <h3 className="text-success mb-0">69%</h3>
                    of customers recomend this product
                  </div>
                  <Button className="btn-rounded-f" color="success">Write a Review</Button>
                </CardBody>
              </Card>
            </Col>
        </Row>
    </div>
);

export default Typography;
