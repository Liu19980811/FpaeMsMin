"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showPopup: false,
      formType: 1,
      // 0-新增  1-修改
      ponds: [{
        id: 1,
        name: "塘1",
        pondSn: "01001"
      }, {
        id: 2,
        name: "塘2",
        pondSn: "01002"
      }, {
        id: 3,
        name: "塘3",
        pondSn: "01003"
      }],
      pondInfo: {
        id: 0,
        name: "1",
        pondSn: "1"
      },
      pondInfoRules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: "请输入塘口号"
            }
          ]
        },
        sn: {
          rules: [
            {
              required: true,
              errorMessage: "请输入编号"
            }
          ]
        },
        devId: {
          rules: [
            {
              required: true,
              errorMessage: "请输入设备号"
            }
          ]
        }
      },
      options: [{
        text: "删除",
        style: {
          backgroundColor: "#FF4B2B"
        }
      }]
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
  methods: {
    swipeActionClick() {
    },
    fabClick() {
      common_vendor.index.showToast({
        title: "点击了添加按钮",
        icon: "none"
      });
      this.showPopup = true;
    },
    openPopup() {
    },
    closePopup() {
      this.showPopup = false;
    },
    submit() {
      this.$refs.form.validate().then((res) => {
        if (this.formType === 0) {
          common_vendor.index.showToast({
            title: "添加成功",
            icon: "none"
          });
        } else {
          common_vendor.index.showToast({
            title: "修改成功",
            icon: "none"
          });
        }
        this.showPopup = false;
        console.log("表单数据信息：", res);
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_up_empty2 = common_vendor.resolveComponent("up-empty");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_empty2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_fab2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_up_popup2)();
}
const _easycom_up_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_empty + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_fab + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.ponds.length == 0,
    b: common_vendor.f($data.ponds, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.pondSn),
        c: common_vendor.o((...args) => _ctx.contentClick && _ctx.contentClick(...args), item.id),
        d: common_vendor.o($options.swipeActionClick, item.id),
        e: item.id,
        f: "d1cd6628-2-" + i0 + ",d1cd6628-1"
      };
    }),
    c: common_vendor.p({
      ["right-options"]: $data.options
    }),
    d: common_vendor.sr("fab", "d1cd6628-3"),
    e: common_vendor.o($options.fabClick),
    f: common_vendor.p({
      pattern: _ctx.pattern,
      horizontal: "right",
      popMenu: "false"
    }),
    g: common_vendor.o(($event) => $data.pondInfo.name = $event),
    h: common_vendor.p({
      type: "text",
      placeholder: "请输入塘口号",
      modelValue: $data.pondInfo.name
    }),
    i: common_vendor.p({
      label: "塘口号",
      name: "name",
      required: true
    }),
    j: common_vendor.o(($event) => $data.pondInfo.pondSn = $event),
    k: common_vendor.p({
      type: "text",
      placeholder: "请输入塘口号",
      modelValue: $data.pondInfo.pondSn
    }),
    l: common_vendor.p({
      label: "塘口编号",
      name: "sn",
      required: true
    }),
    m: common_vendor.sr("form", "d1cd6628-5,d1cd6628-4"),
    n: common_vendor.p({
      rules: $data.pondInfoRules,
      model: $data.pondInfo
    }),
    o: common_vendor.t($data.formType === 0 ? "添加" : "修改"),
    p: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    q: common_vendor.o($options.closePopup),
    r: common_vendor.o($options.openPopup),
    s: common_vendor.p({
      bgColor: "",
      show: $data.showPopup,
      closeable: true,
      closeOnClickOverlay: false,
      round: 20,
      mode: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/my-ponds/my-ponds.vue"]]);
wx.createPage(MiniProgramPage);
