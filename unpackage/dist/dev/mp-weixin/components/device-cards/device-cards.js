"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "device-cards",
  props: {
    deviceList: Array
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    showDetails(item) {
      common_vendor.index.navigateTo({
        url: "/pages/device-details/device-details"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uv_image2 + _easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uv_image = () => "../../uni_modules/uv-image/components/uv-image/uv-image.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uv_image + _easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.deviceList, (item, index, i0) => {
      return {
        a: "f2c5875d-2-" + i0 + "," + ("f2c5875d-1-" + i0),
        b: common_vendor.p({
          src: item.image,
          width: "50px",
          height: "50px",
          ["lazy-load"]: "true",
          radius: "15"
        }),
        c: "f2c5875d-1-" + i0 + "," + ("f2c5875d-0-" + i0),
        d: common_vendor.t(item.deviceTypeName),
        e: "f2c5875d-5-" + i0 + "," + ("f2c5875d-4-" + i0),
        f: common_vendor.t(item.pond),
        g: "f2c5875d-6-" + i0 + "," + ("f2c5875d-4-" + i0),
        h: "f2c5875d-4-" + i0 + "," + ("f2c5875d-3-" + i0),
        i: common_vendor.t(item.devId),
        j: "f2c5875d-3-" + i0 + "," + ("f2c5875d-0-" + i0),
        k: "f2c5875d-0-" + i0,
        l: item.status === 1 ? 1 : "",
        m: common_vendor.t(item.status === 0 ? item.statusName : item.statusName + "(" + item.runningStateName + ")"),
        n: common_vendor.o(($event) => $options.showDetails(item), item.id),
        o: item.id,
        p: common_vendor.o(($event) => $options.showDetails(item), item.id)
      };
    }),
    b: common_vendor.p({
      span: 8
    }),
    c: common_vendor.p({
      span: 12
    }),
    d: common_vendor.p({
      span: 12
    }),
    e: common_vendor.p({
      span: 16
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f2c5875d"]]);
wx.createComponent(Component);
