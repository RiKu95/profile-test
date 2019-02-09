import React from 'react';
import {
  Form, Button, Col, Row, Input, Select, DatePicker, Icon,
} from 'antd';

const { Option } = Select;

class Profile extends React.Component{
  constructor(props) {
    super();
    this.state = {
      name : "rijul"
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          console.log('Received values of form: ', values);
          console.log('name: ', values.name);
          console.log(values.birthday._d);
          this.setState({visible: false,})
          }})

      };

  render(){
  const { getFieldDecorator } = this.props.form;

  return(
  < >
  <Form layout="vertical" hideRequiredMark>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            initialValue: this.state.name,
            rules: [{ required: true, message: 'Please enter Name' }],
          })(<Input placeholder="Please enter Name" />)}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please enter Email' }],
          })(
            <Input
              style={{ width: '100%' }}
              placeholder="Please enter Email"
            />
          )}
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="Gender">
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select Gender' }],
          })(
            <Select placeholder="Please select Gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          )}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="Birthday">
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: 'Please enter Birthday' }],
          })(
            <DatePicker
              style={{ width: '100%' }}
              getPopupContainer={trigger => trigger.parentNode}
              format="DD-MM-YYYY"
            />
          )}
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please enter Phone Number' }],
          })(<Input placeholder="Please enter Phone Number" />)}
        </Form.Item>
      </Col>
      <Col span={12}>

      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Form.Item label="Bio">
          {getFieldDecorator('bio', {
            rules: [
              {
                required: true,
                message: 'please enter your Bio',
              },
            ],
          })(<Input.TextArea rows={4} placeholder="please enter your Bio" />)}
        </Form.Item>
      </Col>
    </Row>
  </Form>
  <div
    style={{
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e9e9e9',
      padding: '10px 16px',
      background: '#fff',
      textAlign: 'right',
    }}
  >
    <Button onClick={this.onClose} style={{ marginRight: 8 }}>
      Cancel
    </Button>
    <Button onClick={this.onSubmit} type="Submit">
      Submit
    </Button>
  </div>
  </>
  )
}}

const ProfileForm = Form.create()(Profile);
export default ProfileForm;
