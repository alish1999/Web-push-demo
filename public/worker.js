// console.log("Service Worker Loaded...");

// self.addEventListener("push", e => {
//   const data = e.data.json();
//   console.log("Push Recieved...");
//   console.log(data)
//   self.registration.showNotification(data.title, {
//     body: data.body,
//     icon: "http://image.ibb.co/frYOFd/tmlogo.png"
//   });
// });
console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  console.log(data);
  const options = {
    body: data.body,
    icon: data.icon,
    image: data.image,
    actions: data.actions,
    data: data.data,
  };
  // const maxVisibleActions = Notification.maxActions;
  // console.log("max actions: "+maxVisibleActions);
  // if (maxVisibleActions < 4) {
  //   options.body =
  //     `This notification will only display ` + `${maxVisibleActions} actions.`;
  // } else {
  //   options.body =
  //     `This notification can display up to ` + `${maxVisibleActions} actions.`;
  // }
  self.registration.showNotification(data.title, options);
  // inplace of option
  // {
  //   actions: [{action: "get", title: "Get now."}]
  // }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  // console.log("click action");
  console.log(event);
  if (event.action == "") {
    console.log("notif clicked instead of button");
    console.log(event);
    clients.openWindow(`https://${event.notification.data.url}`);
  } else {
    console.log(event);
    clients.openWindow(`https://${event.action}`);
  }
});
