import './App.css';
import "./index.css";
import React from "react";
import Testnotifs from "./containers/TestNotifs"
export function setEndpoint() {
  const rocket_push_publicVapidKey =
    "BKsFWsWWWLsJ0sHgFFcFYtjQqBARyQ_SdjVzl5pwFBCfxaLzps9VZkQttDqLHWXqBEmcJc04AJ2s8CX8vaNGZL0";


  rocket_push_register()

  // Register SW, Register Push, Send Push
  async function rocket_push_register() {
    const register = await navigator.serviceWorker.register("/worker.js");

    // Register Push
    window.rocket_push_subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(rocket_push_publicVapidKey),
    });
    console.log(window.rocket_push_subscription);
    localStorage.setItem(
      "rocket_push_subscription",
      JSON.stringify(window.rocket_push_subscription)
    );

  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
function App() {
  console.log("allow notif please");
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    setEndpoint();
  } else {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        setEndpoint();
      }
    });
  }
  return (
    <div className="App">
      <Testnotifs/>
    </div>
  );
}

export default App;
