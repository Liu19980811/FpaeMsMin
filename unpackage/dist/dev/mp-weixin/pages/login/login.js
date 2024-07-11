"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
const store_index = require("../../store/index.js");
const _sfc_main = {
  data() {
    return {
      tabIndex: 0,
      //tab下标
      account: "",
      password: ""
    };
  },
  methods: {
    // tab点击
    tabClick(id) {
      this.tabIndex = id;
    },
    // 获取验证码
    getCode() {
      common_vendor.index.showToast({
        title: "获取验证码"
      });
    },
    login() {
      store_index.store.commit("SET_USER", { user: api_user.user });
      common_vendor.index.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.account,
    b: common_vendor.o(($event) => $data.account = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.tabIndex == 0,
    f: common_vendor.o((...args) => $options.getCode && $options.getCode(...args)),
    g: $data.tabIndex == 1,
    h: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
