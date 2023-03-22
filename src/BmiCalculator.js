import React, { useState, useEffect } from "react";
import { Col, Row, Typography, Form, Input, Button } from "antd";

const { Title ,Text} = Typography;

const BmiCalculator = () => {
  const [weightData, setWeightData] = useState("");
  const [heightData, setheightData] = useState("");
  const [bmiChange, setBmiChange] = useState("");
  const [resultData, setResultData] = useState("");

  const onBmiChange = () => {
    setBmiChange([weightData / heightData / heightData] * 10000);
  };

  useEffect(() => {
    if (bmiChange < 25) {
      setResultData("You are underweight");
    } else if (bmiChange >= 25 && bmiChange < 30) {
      setResultData("You are a healthy weight");
    } else if (bmiChange > 30) {
      setResultData("You are overweight");
    } else {
      setResultData("");
    }
  });

  return (
    <Row>
      <Col span={8} offset={8}>
        <Title level={4}>BMI CALCULATOR</Title>

        <Form name="basic">
          <Form.Item label="Height">
            <Input
              placeholder="Enter height"
              onChange={(e) => setheightData(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Weight" name="Weight">
            <Input
              placeholder="Enter weight"
              onChange={(e) => setWeightData(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{ float: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => onBmiChange()}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item label="Output" name="Output">
            <p style={{ color: "#fff" }}> {bmiChange}</p>

            {bmiChange < 25 ? (
              <Text style={{ color: "#fff" }}>{resultData}</Text>
            ) : bmiChange >= 25 && bmiChange < 30 ? (
              <Text style={{ color: "#fff" }}>{resultData}</Text>
            ) : bmiChange > 30 ? (
              <Text style={{ color: "#fff" }}>{resultData}</Text>
            ) : null}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default BmiCalculator;
