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
  "./pages/warn-info/warn-info.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderProjects/FpaeMsMin/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
