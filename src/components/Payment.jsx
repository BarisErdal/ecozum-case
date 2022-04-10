import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';


const Payment = () => {

 


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  function onChange(value) {
    console.log('changed', value);
  }

  return (
  
   
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Form.Item name="cardHolderName" label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
 
    <Form.Item name="cardNumber" label="Card Number" rules={[{ required: true }]}>
    <InputNumber
     style={{ width: 200 }}
     maxLength="19"
     controls={false}
      formatter={value => `$ ${value}`.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')}
     
      onChange={onChange}
    />
    </Form.Item>
 
    <Form.Item name="cvv" label="CVV" rules={[{ required: true }]}>
    <InputNumber
  
    controls={false}
    maxLength="3"
      onChange={onChange}
    />
    </Form.Item>


    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form> 



  )
}

export default Payment