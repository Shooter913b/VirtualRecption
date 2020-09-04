import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Widget from '../../components/Widget';

const Typography = () => (
    <div>
        <h1 className="page-title">Account</h1>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h4>Monthly Reminders <small className="text-muted" className="text-info">6 reminders today</small></h4>}
                    close collapse
                >
                    <h4>Reminders</h4>
                    <p>You have 6 reminders today</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                            <h3>Presentation Today</h3>
                            <p>___________________________________</p>
                            <h3>Ron's Birthday Tomorrow</h3>
                            <p>___________________________________</p>
                            <h3>Upcoming Project</h3>
                            <p>___________________________________</p>
                            <h3>Upcoming Presentation</h3>
                            <p>___________________________________</p>
                            <h3>Mike's Birthday Coming up</h3>
                            <p>___________________________________</p>
                            <h3>Upcoming Presentation</h3>
                            </Col>
                            <Col sm={6}>
                                <p className="text-info">Jack's PowerPoint Presentation in the conference room at 12:00.</p>
                                <p>___________________________________</p>
                                <p className="text-info">People meeting at the nearest Starbucks.</p>
                                <p>___________________________________</p>
                                <p className="text-info">Project begins on September 8th, due on September 15th.</p>
                                <p>___________________________________</p>
                                <p className="text-info">Your Google Slides Presentation on September 11th.</p>
                                <p>___________________________________</p>
                                <p className="text-info">People meeting on September 18th.</p>
                                <p>___________________________________</p>
                                <p className="text-info">Howard's Google Slides Presentation on September 23rd.</p>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h4>Something <small className="text-muted" className="text-info">something else</small></h4>}
                    close collapse
                >
                    <h4>Basic texts</h4>
                    <p>Styling for common texts</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><em>This line rendered as italicized text.</em></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                    </div>
                    <h4 className="mt-5">Font weights</h4>
                    <p>Various font weights supported</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <p>Thin (default) font weight</p>
                        <p className="fw-normal">Normal font weight</p>
                        <p className="fw-semi-bold">Semi bold to empasize important thing</p>
                        <p className="fw-bold">Bold font as a high priority</p>
                    </div>
                    <h4 className="mt-5">Colors</h4>
                    <p>Bootstrap state colors can be applied to texts too</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <p className="text-danger">Some danger text</p>
                        <p className="text-warning">Some warning text</p>
                        <p className="text-success">Some succes text</p>
                        <p className="text-primary">Some primary text</p>
                        <p className="text-info">Some info text</p>
                    </div>
                    <h4 className="mt-5">Blockquotes</h4>
                    <p>Citing someone is really easy</p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <blockquote className="blockquote">
                            <p>Don&apos;t get set into one form, adapt it and build your own, and let
                                it grow, be like water. Empty your mind, be formless, shapeless — like water.
                                Now you put water in a cup, it becomes the cup; You put water into a bottle it
                                becomes the bottle; You put it in a teapot it becomes the teapot. Now water can
                                flow or it can crash. Be water, my friend.</p>
                            <footer className="blockquote-footer">Bruce Lee in <cite title="A Warrior's Journey">A Warrior&apos;s Journey</cite></footer>
                        </blockquote>
                    </div>
                </Widget>
            </Col>
        </Row>
    </div>
);

export default Typography;
