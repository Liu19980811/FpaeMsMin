"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    myPondClick() {
      common_vendor.index.navigateTo({
        url: "/pages/my-ponds/my-ponds"
      });
    },
    warnRecodClick() {
      common_vendor.index.navigateTo({
        url: "/pages/warn-info/warn-info"
      });
    },
    contactUsClick() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "0371 6688 8851"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.myPondClick && $options.myPondClick(...args)),
    b: common_vendor.o((...args) => $options.warnRecodClick && $options.warnRecodClick(...args)),
    c: common_vendor.o((...args) => $options.contactUsClick && $options.contactUsClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca643e16"], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/tabBar/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
