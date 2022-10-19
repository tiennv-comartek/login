import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/user.png";
import vn from "../../assets/images/vn.png";
import { Avatar, Col, Row, Image, Space, Dropdown, Menu } from "antd";
import checkLogin from "../../modules/auth/hoc/checkLogin";
import {
  BellOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const MasterLayout = () => {
  const [loading, setLoanding] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const menu = (
    <Menu
      className="menu_drp_sp"
      items={[
        {
          key: "1",

          className: "lable_sp",
          label: (
            <a target="_blank" href="#accc">
              <MailOutlined /> Sản phẩm
            </a>
          ),
        },
        {
          key: "2",

          className: "lable_sp",
          label: (
            <a target="_blank" href="#bcc">
              <MailOutlined /> Kho hàng
            </a>
          ),
        },
      ]}
    />
  );
  const menuLanguge = (
    <Menu
      className="menu_drp_sp"
      items={[
        {
          key: "3",

          className: "lable_sp",
          label: (
            <a target="_blank" href="#accc">
              <Avatar src={vn} size={16} /> Tiếng Anh
            </a>
          ),
        },
        {
          key: "4",

          className: "lable_sp",
          label: (
            <a target="_blank" href="#bcc">
              <Avatar src={vn} size={16} /> Tiếng Việt
            </a>
          ),
        },
      ]}
    />
  );
  const menuUser = (
    <Menu
      className="menu_drp_sp"
      items={[
        {
          key: "5",

          className: "lable_user",
          label: (
            <a target="_blank" href="#accc">
              Thông tin người dùng
            </a>
          ),
        },
        {
          key: "6",

          className: "lable_user",
          label: (
            <a target="_blank" href="#bcc">
              Đăng xuất
            </a>
          ),
        },
      ]}
    />
  );
  const menuSettingUser = (
    <Menu
      className="menu_drp_sp"
      items={[
        {
          key: "7",
          className: "lable_user",
          label: (
            <a target="_blank" href="#accc">
             Quản lí người dùng
            </a>
          ),
        },
      ]}
    />
  );

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoanding(true);
          setData(result.results);
        },
        (error) => {
          setLoanding(true);
          setError(error);
        }
      );
  }, []);
  //menu

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Row justify="space-between" className="user_setting">
          <Col>
            <Image src={logo} width={140} preview={false} />
          </Col>
          <Col className="user_info">
            <Space size={30}>
              <QuestionCircleOutlined />
              <Dropdown
                overlay={menuLanguge}
                placement="bottom"
                arrow
                className="drp_menu"
                trigger={["click"]}
              >
                <Avatar src={vn} size={18} />
              </Dropdown>
              <BellOutlined />
              <Dropdown
                overlay={menuSettingUser}
                arrow
                placement="bottom"
                className="drp_menu"
                trigger={["click"]}
              >
                <SettingOutlined />
                </Dropdown>
              <Dropdown
                overlay={menuUser}
                placement="bottomRight"
                className="drp_menu"
                trigger={["click"]}
              >
                <Space size={0} className="name_user">
                  {data[0].name.title}.{data[0].name.first} {data[0].name.last}
                  <Avatar src={avatar} size="large" />
                </Space>
              </Dropdown>
            </Space>
          </Col>
        </Row>

        <Row justify="space-between" className="menu">
          <Col className="menu_left">
            <ul>
              <li className="item_one">
                <a href="#home">
                  <MailOutlined /> Tổng quan
                </a>
              </li>
              <li className="item products">
                <Dropdown overlay={menu} placement="bottomLeft" >
                  <a href="#products" className="products">
                    <MailOutlined /> Sản phẩm
                  </a>
                </Dropdown>
              </li>
              <li className="item">
                <a href="#trade">
                  <MailOutlined /> Giao dịch
                </a>
              </li>
              <li className="item">
                <Dropdown overlay={menu} placement="bottomLeft">
                  <a href="#partner">
                    <MailOutlined /> Đối tác
                  </a>
                </Dropdown>
              </li>

              <li className="item">
                <a href="#fund">
                  <MailOutlined /> Số quỹ
                </a>
              </li>
              <li className="item">
                <a href="#notify">
                  <MailOutlined /> Báo cáo
                </a>
              </li>
              <li></li>
            </ul>
          </Col>
          <Col className="menu_right">
            <div className="item_right">
              <MailOutlined /> Bán hàng tại quầy
            </div>
          </Col>
        </Row>
        <>
          <Outlet />
        </>
       
      </>
    );
  }
};

export default checkLogin(MasterLayout);
