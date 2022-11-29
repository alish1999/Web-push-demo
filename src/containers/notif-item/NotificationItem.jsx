import React from "react";
import { withRouter } from "react-router-dom"; //higher order compoent takes a component as an argument and turns in a modified component
import "./NotificationItem.styles.scss";
// import { Trans } from "react-i18next";
import { Card, message } from "antd";
import AbandonImg from "./abandoned.png";
import BackInStockImg from "./backinstock.png";
import ScheduledImg from "./scheduled.png";
import WelcomeImg from "./welcome.png";
import ShippingImg from "./shipping.png";
import axios from "axios";
// import { getHost } from "../LoginUser";

class NotifItem extends React.Component {
  constructor(props) {
    super(props);
  }
      

  render() {
    const {
      title,
      imageUrl,
      content,
      state,
      isAvailable,
      linkUrl,
      match,
      history,
      notif
    } = this.props;
    function getHost(){
      return("https://app.rocketpush.io")
    }
    
    // console.log(title,":",isAvailable)
    let img = WelcomeImg;
    switch (imageUrl) {
      case "./abandoned.png":
        img = AbandonImg;
        break;
      case "./scheduled.png":
        img = ScheduledImg;
        break;
      case "./backinstock.png":
        img = BackInStockImg;
        break;
      case "./welcome.png":
        img = WelcomeImg;
        break;
      case "./shipping.png":
        img = ShippingImg;
        break;
    }

    function testNotif(notif){
      // console.log("notifing")
      const endpoint = JSON.parse(
        localStorage.getItem("rocket_push_subscription")
      );
      axios
        .post(`${getHost()}/api/testnotif`, {
          point: endpoint,
          notif: notif,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    return (
      <Card
        title={title}
        className="notif-item"
        onClick={() => {
          testNotif(notif)
        }}
      >
        <div>
          <img className="notif-img" src={img} alt={title}></img>

          <p className="content">{content}</p>
        </div>
        <div style={{ height: "25px" }}></div>
        <div className={`active state`}>
          {/* {state ? (
            <Trans i18nKey="notif.state.active">TEST</Trans>
          ) : (
            <Trans i18nKey="notif.state.inactive">INACTIVE</Trans>
          )} */}
          SEE PREVIEW
        </div>
      </Card>
    );
  }
}

export default (NotifItem);
