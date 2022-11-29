import React from "react";
import { Row, Col, message, Card, Button, Spin } from "antd";
import { WarningOutlined } from "@ant-design/icons";
// import { withTranslation } from "react-i18next";
import 'antd/dist/antd.css'
import NotifItem from "./notif-item/NotificationItem";
import "./Home.scss";
import "./notificationsDirectory.styles.scss";
import "./notif-item/NotificationItem.styles.scss";
import rocketlogo from "./logo/logo-with-text.svg";
import axios from "axios";
// import { getHost } from "./LoginUser";
import { Link } from "react-router-dom";
class TestNotif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: {
        schedule: false,
        reminder_title: false,
        pricedrop_title: null,
        welcome_title: false,
        backinstock: null,
      },
      currplan: {
        schedule: false,
        reminder_title: false,
        pricedrop_title: null,
        welcome_title: false,
        backinstock: null,
      }
    };
  }
//  
  componentDidMount() {
    
  }
   getHost=()=> {
    return("http://localhost:3000")
  }
  render() {
    // const locstore = JSON.parse(localStorage.getItem("profile")) || {plan:"none"};

    const { t } = this.props;
    const notifications = [
      {
        title: "Scheduled Notification",
        imageUrl: "./scheduled.png",
        id: 1,
        content:"Create a sequence of notifications based on time schedule",
        state: this.state.isActive.schedule,
        isAvailable: this.state.currplan.schedule,
        linkUrl: "scheduled",
        notif:{
            "buttons": [
                {
                    "link": "alishdevstore.myshopify.com/cart",
                    "name": "Check cart!"
                },
                {
                    "link": "alishdevstore.myshopify.com",
                    "name": "View more!"
                }
            ],
            "Title": "Check our Christmas Sale!",
            "targetLink": "alishdevstore.myshopify.com",
            "message": "Buy them now before they get out of stock",
            "buttonName": "Check cart!",
            "buttonLink": "alishdevstore.myshopify.com/cart",
            "logoimgsrc": "https://firebasestorage.googleapis.com/v0/b/rocket-346418.appspot.com/o/images%2FRocket logo (2).png3d4f4bf4-72aa-488e-810d-2008e45c67d5?alt=media&token=e6007829-e470-4f12-aedf-2b0029a8a422"
        }
      },
      {
        title:"Abandoned Cart Notification",
        imageUrl: "./abandoned.png",
        id: 2,
        content: "A sequence of notifications sent to subscriber once they  subscribe to your store notification",
        state: this.state.isActive.reminder_title,
        isAvailable: this.state.currplan.reminder_title,
        linkUrl: "cartrecovery",
        notif:{
            "buttons": [
                {
                    "link": "alishdevstore.myshopify.com/cart",
                    "name": "Check cart!"
                },
                {
                    "link": "alishdevstore.myshopify.com",
                    "name": "View more!"
                }
            ],
            "Title": "You forgot to check out!",
            "targetLink": "alishdevstore.myshopify.com",
            "message": "Buy them now before they get out of stock",
            "buttonName": "Check cart!",
            "buttonLink": "alishdevstore.myshopify.com/cart",
           
            "logoimgsrc": "https://firebasestorage.googleapis.com/v0/b/rocket-346418.appspot.com/o/images%2FRocket logo (2).png3d4f4bf4-72aa-488e-810d-2008e45c67d5?alt=media&token=e6007829-e470-4f12-aedf-2b0029a8a422"
        }
      },

      {
        title:"Welcome Notification",
        imageUrl: "./welcome.png",
        id: 4,
        content:  "A sequence of notifications sent to subscriber once they  subscribe to your store notification",
        state: this.state.isActive.welcome_title,
        isAvailable: this.state.currplan.welcome_title,
        linkUrl: "welcome",
        notif:{
            "buttons": [
                {
                    "link": "alishdevstore.myshopify.com/cart",
                    "name": "Check cart!"
                },
                {
                    "link": "alishdevstore.myshopify.com",
                    "name": "View more!"
                }
            ],
            "Title": "Welcome to our shop",
            "targetLink": "alishdevstore.myshopify.com",
            "message": "Buy them now before they get out of stock",
            "buttonName": "Check cart!",
            "buttonLink": "alishdevstore.myshopify.com/cart",
           
            "logoimgsrc": "https://firebasestorage.googleapis.com/v0/b/rocket-346418.appspot.com/o/images%2FRocket logo (2).png3d4f4bf4-72aa-488e-810d-2008e45c67d5?alt=media&token=e6007829-e470-4f12-aedf-2b0029a8a422"
        }
      },
      {
        title: "Price Drop Notifications", //("notif.shipping.title"),
        imageUrl: "./shipping.png",
        id: 3,
        content: ("notif.shipping.content"),
        state: this.state.isActive.pricedrop_title,
        isAvailable: this.state.currplan.pricedrop_title,
        linkUrl: "pricedrop",
        notif:{
            "buttons": [
                {
                    "link": "alishdevstore.myshopify.com/cart",
                    "name": "Check cart!"
                },
                {
                    "link": "alishdevstore.myshopify.com",
                    "name": "View more!"
                }
            ],
            "Title": "Price on this item has dropped!",
            "targetLink": "alishdevstore.myshopify.com",
            "message": "Buy them now before they get out of stock",
            "buttonName": "Check cart!",
            "buttonLink": "alishdevstore.myshopify.com/cart",
           
            "logoimgsrc": "https://firebasestorage.googleapis.com/v0/b/rocket-346418.appspot.com/o/images%2FRocket logo (2).png3d4f4bf4-72aa-488e-810d-2008e45c67d5?alt=media&token=e6007829-e470-4f12-aedf-2b0029a8a422"
        }
      },
      {
        title: "Back in Stock Notification",
        imageUrl: "./backinstock.png",
        id: 5,
        content: "A sequence of notifications sent to subscriber once they  subscribe to your store notification",
        state: this.state.isActive.backinstock,
        isAvailable: this.state.currplan.backinstock,
        linkUrl: "backinstock",
        notif:{
            "buttons": [
                {
                    "link": "alishdevstore.myshopify.com/cart",
                    "name": "Check cart!"
                },
                {
                    "link": "alishdevstore.myshopify.com",
                    "name": "View more!"
                }
            ],
            "Title": "This item is back in stock!",
            "targetLink": "alishdevstore.myshopify.com",
            "message": "Buy them now before they get out of stock",
            "buttonName": "Check cart!",
            "buttonLink": "alishdevstore.myshopify.com/cart",
           
            "logoimgsrc": "https://firebasestorage.googleapis.com/v0/b/rocket-346418.appspot.com/o/images%2FRocket logo (2).png3d4f4bf4-72aa-488e-810d-2008e45c67d5?alt=media&token=e6007829-e470-4f12-aedf-2b0029a8a422"
        }
      },
    ];
    const permission = Notification.permission;
    return (
      <Card className="home-card" style={{ height: "100%", background: "#0d83dd" }}
      bodyStyle={{ background: "white" }} title={
        <Row justify="center">
          <img
            src={rocketlogo}
            alt="brand"
            style={{
              height: "55px",
              width: "100%",
              padding: "0",
              margin: "0",
            }}
          ></img>
        </Row>
      }>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <h1 style={{ fontSize: "x-large"}}>
              Notifications Preview
            </h1>
          </Col>

          {permission !== "granted" && (
            <Col span={24}>
              <Card
                className="home-card"
                style={{ background: "#FCF7E5" }}
                bodyStyle={{ padding: "20px", border: "10px" }}
              >
                <Row>
                  <Col xs={23} sm={22} md={2} lg={2} xl={2}>
                    {/* <WarningOutlined
                      style={{ fontSize: "30px", color: "orange" }}
                    /> */}
                  </Col>
                  <Col
                    xs={23}
                    sm={22}
                    md={18}
                    lg={18}
                    xl={18}
                    style={{ paddingTop: "5px" }}
                  >
                    {/* <a href={getHost()} target="_blank"> */}
                    Please allow notifications on this link to be able to test
                    notifications in the edit screen
                    {/* </a> */}
                  </Col>
                  <Col
                    xs={23}
                    sm={22}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ paddingTop: "5px" }}
                  >
                    <a href={`${this.getHost()}/allownotif`} target="_blank">
                      <Button
                        style={{
                          width: "100%",
                          borderRadius: "5px",
                          fontSize: "15px",
                        }}
                      >
                        Allow
                      </Button>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          )}

          {notifications.map(({ id, ...otherSectionProps }) => (
            <Col key={id} xs={23} sm={22} md={12} lg={12} xl={8}>
              <NotifItem {...otherSectionProps} />
            </Col>
          ))}
        </Row>
    </Card>
    );
  }
}

export default (TestNotif);
