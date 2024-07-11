"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 A"
        },
        {
          colorClass: "uni-bg-green",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
          content: "内容 B"
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
          content: "内容 C"
        }
      ],
      dotsStyles: {
        backgroundColor: "rgba(90, 90, 246, 0.5)",
        border: "1px rgba(90, 90, 246, 0.5) solid",
        color: "#fff",
        selectedBackgroundColor: "rgba(90, 90, 246, 0.9)",
        selectedBorder: "1px rgba(90, 90, 246, 0.9) solid"
      },
      current: 0,
      mode: "round",
      autoplay: true,
      noticeText: "广东锦源电子科技有限公司！",
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
      ],
      warnList: [
        {
          url: "/static/image/today.png",
          text: "今日报警数",
          badge: "1",
          type: "error"
        },
        {
          url: "/static/image/month.png",
          text: "本月报警数",
          badge: "100",
          type: "error"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
    clickItem(e) {
      this.current = e;
    },
    moreProductListOnClick() {
      common_vendor.index.navigateTo({
        url: "/pages/tabBar/homepage/more-product"
      });
    },
    warnGridchange(e) {
      let {
        index
      } = e.detail;
      if (index === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/warn-info/warn-info"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/warn-info/warn-info"
        });
      }
    },
    entranceGridchange(e) {
      let {
        index
      } = e.detail;
      if (index === 0) {
        common_vendor.index.navigateTo({
          url: "/pages/my-ponds/my-ponds"
        });
      } else {
        common_vendor.index.switchTab({
          url: "/pages/tabBar/device/device"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_product_list2 = common_vendor.resolveComponent("product-list");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_swiper_dot2 + _easycom_uni_notice_bar2 + _easycom_product_list2 + _easycom_uni_icons2 + _easycom_uni_section2 + _easycom_uni_badge2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_swiper_dot = () => "../../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_product_list = () => "../../../components/product-list/product-list.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_badge = () => "../../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_notice_bar + _easycom_product_list + _easycom_uni_icons + _easycom_uni_section + _easycom_uni_badge + _easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: item.url,
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: $data.current,
    d: $data.autoplay,
    e: common_vendor.o($options.clickItem),
    f: common_vendor.p({
      info: $data.info,
      current: $data.current,
      mode: $data.mode,
      ["dots-styles"]: $data.dotsStyles
    }),
    g: common_vendor.p({
      speed: "80",
      ["show-icon"]: true,
      scrollable: true,
      color: "#5A5AF6",
      ["background-color"]: "#EAF2FF",
      text: $data.noticeText
    }),
    h: common_vendor.p({
      productListProp: $data.productList
    }),
    i: common_vendor.o(($event) => $options.moreProductListOnClick()),
    j: common_vendor.p({
      type: "more-filled",
      size: "30px"
    }),
    k: common_vendor.p({
      title: "产品列表",
      ["title-font-size"]: "$uni-font-size-title",
      ["title-color"]: "$uni-color-title"
    }),
    l: common_vendor.f($data.warnList, (item, index, i0) => {
      return common_vendor.e({
        a: item.url,
        b: common_vendor.t(item.text),
        c: item.badge
      }, item.badge ? {
        d: "89f56eb1-8-" + i0 + "," + ("89f56eb1-7-" + i0),
        e: common_vendor.p({
          text: item.badge,
          type: item.type
        })
      } : {}, {
        f: index,
        g: "89f56eb1-7-" + i0 + ",89f56eb1-6",
        h: common_vendor.p({
          index
        })
      });
    }),
    m: common_vendor.o($options.warnGridchange),
    n: common_vendor.p({
      column: 2,
      margin: 10,
      ["show-border"]: false,
      square: false
    }),
    o: common_vendor.p({
      title: "报警统计",
      ["title-font-size"]: "$uni-font-size-title",
      ["title-color"]: "$uni-color-title"
    }),
    p: common_vendor.p({
      index: 0
    }),
    q: common_vendor.p({
      index: 1
    }),
    r: common_vendor.o($options.entranceGridchange),
    s: common_vendor.p({
      column: 2,
      ["show-border"]: false,
      square: false
    }),
    t: common_vendor.p({
      title: "快速入口",
      ["title-font-size"]: "$uni-font-size-title",
      ["title-color"]: "$uni-color-title"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-89f56eb1"], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/tabBar/homepage/homepage.vue"]]);
wx.createPage(MiniProgramPage);
