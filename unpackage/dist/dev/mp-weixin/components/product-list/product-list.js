"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "product-list",
  props: ["productListProp"],
  data() {
    return {};
  },
  methods: {
    productItemOnClick(item) {
      common_vendor.index.showToast({
        title: item.productName,
        duration: 2e3
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.productListProp, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.productItemOnClick(item), index),
        b: "5bab0efe-1-" + i0 + "," + ("5bab0efe-0-" + i0),
        c: common_vendor.p({
          border: false,
          title: item.productName,
          note: item.describe,
          showArrow: true,
          thumb: item.image,
          ["thumb-size"]: "lg",
          clickable: true,
          link: true
        }),
        d: index,
        e: "5bab0efe-0-" + i0
      };
    }),
    b: common_vendor.p({
      border: false
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
