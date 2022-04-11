import React from "react";
import { Form, Input, InputNumber, DatePicker } from "antd";
import moment from "moment";

const Payment = ({ onPaymentInfo }) => {
  const monthFormat = "MM/YYYY";

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (changedValues, allValue) => {
    let expDate = allValue["expireDate"];

    allValue = {
      ...allValue,
      expireDate: expDate.format("MM/YYYY"),
    };

    onPaymentInfo(allValue);
  };
  function handleChange(date, dateString) {
    //console.log(date, dateString);
  }

  const initVals = {
    expireDate: moment(),
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onValuesChange={onFinish}
      validateMessages={validateMessages}
      initialValues={initVals}
    >
      <Form.Item
        name="cardHolderName"
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="cardNumber"
        label="Card Number"
        rules={[{ required: true }]}
      >
        <InputNumber
          style={{ width: 200 }}
          maxLength="19"
          controls={false}
          formatter={(value) => {
            if (value.length > 15) {
              return `$ ${value}`
                .replace(/\W/gi, "")
                .replace(/(.{4})/g, "$1 ")
                .substring(0, value.length + 3);
            }
            return `$ ${value}`.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
          }}
        />
      </Form.Item>

      <Form.Item name="cvv" label="CVV" rules={[{ required: true }]}>
        <InputNumber controls={false} maxLength="3" />
      </Form.Item>

      <Form.Item
        name="expireDate"
        label="exp date"
        rules={[{ required: true }]}
      >
        <DatePicker
          onChange={handleChange}
          format={monthFormat}
          picker="month"
        />
      </Form.Item>
    </Form>
  );
};

export default Payment;
