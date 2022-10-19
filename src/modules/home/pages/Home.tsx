import { Avatar, Col, Row, Image, Space, } from "antd";
import { useEffect, useState } from "react";
import checkLogin from "../../auth/hoc/checkLogin";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/user.png";
import vn from "../../../assets/images/vn.png";
import {
  BellOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [loading, setLoanding] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
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
            <Image src={logo} width={100} preview={false} />
          </Col>
          <Col>
            <Space size={20}>
              <QuestionCircleOutlined />
              <BellOutlined />
              <Avatar src={vn} size={16} />
              <SettingOutlined />
              <Space size={0}>
                {data[0].name.title}.{data[0].name.first} {data[0].name.last}
                <Avatar src={avatar} />
              </Space>
            </Space>
          </Col>
        </Row>

        <Row justify="space-between" className="menu">
          <Col className="menu_left">
            <ul >
              <li className="item_one">
                <a href="#home"><MailOutlined /> Tổng quan</a>
              </li>
              <li className="item">
                <a href="#products"><MailOutlined /> Sản phẩm</a>
              </li>
              <li className="item" >
                <a href="#trade"><MailOutlined /> Giao dịch</a>
              </li>
              <li className="item">
                <a href="#partner"><MailOutlined /> Đối tác</a>
              </li>
              <li className="item">
                <a href="#fund"><MailOutlined /> Số quỹ</a>
              </li>
              <li className="item">
                <a href="#notify"><MailOutlined /> Báo cáo</a>
              </li>
            </ul>
          </Col>
          <Col className="menu_right">
            <div className="item_right">Bán hàng tại quầy</div>
          </Col>
        </Row>
        <>
          <Outlet />
        </>
      </>
    );
  }
};
export default checkLogin(Home);
