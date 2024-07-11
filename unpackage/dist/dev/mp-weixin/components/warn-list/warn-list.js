"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "warn-list",
  props: {
    warnsProp: Array
  },
  data() {
    return {};
  },
  methods: {
    contentClick() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.warnsProp, (item, index, i0) => {
      return {
        a: common_vendor.t(item.reason),
        b: common_vendor.t(item.devType),
        c: item.id,
        d: common_vendor.o((...args) => $options.contentClick && $options.contentClick(...args), item.id)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/FpaeMsMin/components/warn-list/warn-list.vue"]]);
wx.createComponent(Component);