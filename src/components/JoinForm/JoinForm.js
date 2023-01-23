import { Form, Input, Row, Col } from "antd";
import "./JoinForm.scss";
const JoinForm = () => {
  const onFinish = (e) => {
    console.log(e.name, e.email);
  };
  return (
    <div className="JoinForm-container" id='Apply'>
      <div className="form-container">
        <h3 className="form-heading">Join Us Today</h3>
        <Form onFinish={onFinish}>
          <Row>
            <Col span={12}>
              <Form.Item
                name={["user", "name"]}
                label={<label style={{ color: "#e3e3e3" }}>First Name</label>}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label={<label style={{ color: "#e3e3e3" }}>E-mail</label>}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <button htmltype="submit" className="submit-button">
              SUBMIT
            </button>
          </Form.Item>
        </Form>
      </div>
      <div className="image-container">
        <img src='https://jevelin.shufflehound.com/education/wp-content/uploads/sites/20/2018/06/For-Better1.png' alt='/' className="form-image"/>
      </div>
    </div>
  );
};

export default JoinForm;
