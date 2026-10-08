importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAKzo74C2oB8VqtOisZbSTpTMuYSy83QAk",
  authDomain: "eduzonelk-92932.firebaseapp.com",
  databaseURL: "https://eduzonelk-92932-default-rtdb.firebaseio.com",
  projectId: "eduzonelk-92932",
  storageBucket: "eduzonelk-92932.firebasestorage.app",
  messagingSenderId: "849907036256",
  appId: "1:849907036256:web:d7fce6322573d34baf1305"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const d = payload.data || {};
  const title = d.title || payload.notification?.title || "ZERO CHAT";
  const body  = d.body  || payload.notification?.body  || "New message";
  const type  = d.type  || "message";
  self.registration.showNotification(title, {
    body, icon: "logo.png", badge: "logo.png",
    tag: d.chatId || d.callId || "zc",
    requireInteraction: type === "call",
    vibrate: type === "call" ? [500,300,500,300,500] : [200,100,200],
    data: d
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const d = e.notification.data || {};
  e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(list => {
    for(const c of list){ if("focus" in c){ c.postMessage({action:e.action, data:d}); return c.focus(); } }
    return clients.openWindow("./index.html");
  }));
});