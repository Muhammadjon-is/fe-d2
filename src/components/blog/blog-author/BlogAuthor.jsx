import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = (props) => {
  const { avatar, firstName, lastName } = props;
  return (
    <Row className="d-flex align-items-center">
      <Col xs={2}>
        <Image className="blog-author" src={avatar} roundedCircle />
      </Col>
      <Col className="mx-3">
        <div>by</div>
        <h6>
          {firstName} {lastName}
        </h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
