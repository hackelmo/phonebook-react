import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SearchBox = ({ setSearchName }) => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(e) => setSearchName(e.target.value)}
        />
      </Col>
      <Col lg={2}>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
