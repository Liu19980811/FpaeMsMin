"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      productList: [
        {
          image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          productName: "投料机",
          describe: "自动投料机，自动化喂养"
        },
        {
          image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          productName: "增氧机",
          describe: "用于水体氧气增加"
        },
        {
          image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          productName: "水质监测",
          describe: "用于水质实时监测"
        },
        {
          image: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          productName: "水位水温",
          describe: "用于水位水温实时反馈"
        }
      ]
    };
  },
  onLoad() {
    setTimeout(function() {
      console.log("start     pulldown");
    }, 1e3);
    common_vendor.index.startPullDownRefresh();
  },
  async onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function() {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  methods: {}
};
if (!Array) {
  const _easycom_product_list2 = common_vendor.resolveComponent("product-list");
  _easycom_product_list2();
}
const _easycom_product_list = () => "../../../components/product-list/product-list.js";
if (!Math) {
  _easycom_product_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      productListProp: $data.productList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
