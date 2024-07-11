"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabBar/homepage/homepage.js";
  "./pages/tabBar/device/device.js";
  "./pages/tabBar/mine/mine.js";
  "./pages/tabBar/homepage/more-product.js";
  "./pages/login/login.js";
  "./pages/device-details/device-details.js";
  "./pages/my-ponds/my-ponds.js";
  "./pages/warn-records/warn-records.js";
  "./pages/warn-records/single-dev-warn.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App  Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
