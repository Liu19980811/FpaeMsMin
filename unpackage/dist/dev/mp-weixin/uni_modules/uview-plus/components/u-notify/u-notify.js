"use strict";
const uni_modules_uviewPlus_components_uNotify_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-notify",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uNotify_props.props],
  data() {
    return {
      // 是否展示组件
      open: false,
      timer: null,
      config: {
        // 到顶部的距离
        top: uni_modules_uviewPlus_libs_config_props.defProps.notify.top,
        // type主题，primary，success，warning，error
        type: uni_modules_uviewPlus_libs_config_props.defProps.notify.type,
        // 字体颜色
        color: uni_modules_uviewPlus_libs_config_props.defProps.notify.color,
        // 背景颜色
        bgColor: uni_modules_uviewPlus_libs_config_props.defProps.notify.bgColor,
        // 展示的文字内容
        message: uni_modules_uviewPlus_libs_config_props.defProps.notify.message,
        // 展示时长，为0时不消失，单位ms
        duration: uni_modules_uviewPlus_libs_config_props.defProps.notify.duration,
        // 字体大小
        fontSize: uni_modules_uviewPlus_libs_config_props.defProps.notify.fontSize,
        // 是否留出顶部安全距离（状态栏高度）
        safeAreaInsetTop: uni_modules_uviewPlus_libs_config_props.defProps.notify.safeAreaInsetTop
      },
      // 合并后的配置，避免多次调用组件后，可能会复用之前使用的配置参数
      tmpConfig: {}
    };
  },
  computed: {
    containerStyle() {
      let top = 0;
      if (this.tmpConfig.top === 0)
        ;
      const style = {
        top: uni_modules_uviewPlus_libs_function_index.addUnit(this.tmpConfig.top === 0 ? top : this.tmpConfig.top),
        // 因为组件底层为u-transition组件，必须将其设置为fixed定位
        // 让其出现在导航栏底部
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 10076
      };
      return style;
    },
    // 组件背景颜色
    backgroundColor() {
      const style = {};
      if (this.tmpConfig.bgColor) {
        style.backgroundColor = this.tmpConfig.bgColor;
      }
      return style;
    },
    // 默认主题下的图标
    icon() {
      let icon;
      if (this.tmpConfig.type === "success") {
        icon = "checkmark-circle";
      } else if (this.tmpConfig.type === "error") {
        icon = "close-circle";
      } else if (this.tmpConfig.type === "warning") {
        icon = "error-circle";
      }
      return icon;
    }
  },
  created() {
    ["primary", "success", "error", "warning"].map((item) => {
      this[item] = (message) => this.show({
        type: item,
        message
      });
    });
  },
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    show(options) {
      this.tmpConfig = uni_modules_uviewPlus_libs_function_index.deepMerge(this.config, options);
      this.clearTimer();
      this.open = true;
      if (this.tmpConfig.duration > 0) {
        this.timer = setTimeout(() => {
          this.open = false;
          this.clearTimer();
          typeof this.tmpConfig.complete === "function" && this.tmpConfig.complete();
        }, this.tmpConfig.duration);
      }
    },
    // 关闭notify
    close() {
      this.clearTimer();
    },
    clearTimer() {
      this.open = false;
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  }
};
if (!Array) {
  const _easycom_u_status_bar2 = common_vendor.resolveComponent("u-status-bar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_transition2 = common_vendor.resolveComponent("u-transition");
  (_easycom_u_status_bar2 + _easycom_u_icon2 + _easycom_u_transition2)();
}
const _easycom_u_status_bar = () => "../u-status-bar/u-status-bar.js";
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_transition = () => "../u-transition/u-transition.js";
if (!Math) {
  (_easycom_u_status_bar + _easycom_u_icon + _easycom_u_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tmpConfig.safeAreaInsetTop
  }, $data.tmpConfig.safeAreaInsetTop ? {} : {}, {
    b: ["success", "warning", "error"].includes($data.tmpConfig.type)
  }, ["success", "warning", "error"].includes($data.tmpConfig.type) ? {
    c: common_vendor.p({
      name: $data.tmpConfig.icon,
      color: $data.tmpConfig.color,
      size: 1.3 * $data.tmpConfig.fontSize,
      customStyle: {
        marginRight: "4px"
      }
    })
  } : {}, {
    d: common_vendor.t($data.tmpConfig.message),
    e: $options.addUnit($data.tmpConfig.fontSize),
    f: $data.tmpConfig.color,
    g: common_vendor.n(`u-notify--${$data.tmpConfig.type}`),
    h: common_vendor.s($options.backgroundColor),
    i: common_vendor.s($options.addStyle(_ctx.customStyle)),
    j: common_vendor.p({
      mode: "slide-down",
      customStyle: $options.containerStyle,
      show: $data.open
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67836363"]]);
wx.createComponent(Component);
