"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
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
        url: "/pages/warn-records/warn-records"
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
    a: common_assets._imports_0$1,
    b: common_assets._imports_0$1,
    c: common_vendor.o((...args) => $options.myPondClick && $options.myPondClick(...args)),
    d: common_assets._imports_0$1,
    e: common_vendor.o((...args) => $options.warnRecodClick && $options.warnRecodClick(...args)),
    f: common_assets._imports_0$1,
    g: common_vendor.o((...args) => $options.contactUsClick && $options.contactUsClick(...args)),
    h: common_assets._imports_0$1,
    i: common_assets._imports_0$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca643e16"]]);
wx.createPage(MiniProgramPage);
