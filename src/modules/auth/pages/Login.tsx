import React, { Fragment } from "react";

import {
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
  Image,
  Card,
  Form,
  Input,
  Checkbox,
  Button,
} from "antd";
import loginImg from "../../../assets/images/banner.png";
import logo from "../../../assets/images/logo.png";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Tiếng Việt
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Tiếng Anh
          </a>
        ),
      },
    ]}
  />
);

function Login() {
  return (
    <Fragment>
      <Layout className="page_login">
        <div className="language">
          <Row justify="end">
            <Col>
              <Dropdown overlay={menu}>
                <Space>Tiếng Việt</Space>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={0} lg={12}>
              <Image src={loginImg} />
            </Col>
            <Col span={24} lg={12} className="form_login">
              <Card className="login">
                <div className="icon_web">
                  <Image src={logo} preview={false} />
                </div>
                <div className="tiltle_login">Đăng nhập</div>
                <div>
                  <Form>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Không được bỏ trống trường này",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Tên đăng nhập"
                        className="name_login"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Không được bỏ trống trường này",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Mật khẩu"
                        className="password"
                      />
                    </Form.Item>
                    <Row justify="space-between">
                      <Col>
                        <Form.Item>
                          <Checkbox
                            defaultChecked={true}
                            className="remember_pass"
                          >
                            Ghi nhớ mật khẩu
                          </Checkbox>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item className="forget_pass">
                          Quên mật khẩu
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn_submit"
                      >
                        Đăng nhập
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn_submit"
                      >
                        Đăng nhập
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Login;
