"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "zero-switch",
  emits: ["input", "update:modelValue", "change"],
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#007aff"
    },
    inactiveColor: {
      type: String,
      default: "#cccccc"
    },
    backgroundColorOn: {
      type: String,
      default: "#ffffff"
    },
    backgroundColorOff: {
      type: String,
      default: "#ffffff"
    },
    borderColorOn: {
      type: String,
      default: "#eeeeee"
    },
    borderColorOff: {
      type: String,
      default: "#eeeeee"
    },
    showText: {
      type: Boolean,
      default: false
    },
    textOn: {
      type: String,
      default: "开"
    },
    textOff: {
      type: String,
      default: "关"
    },
    size: {
      type: Number,
      default: 26
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stopChange: {
      type: Boolean,
      default: false
    },
    moon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: false
    };
  },
  beforeMount() {
    this.checked = this.value || this.modelValue;
  },
  watch: {
    value(newValue) {
      this.checked = newValue;
    },
    modelValue(newValue) {
      this.checked = newValue;
    }
  },
  methods: {
    onChange() {
      if (!this.disabled) {
        if (!this.stopChange) {
          this.checked = !this.checked;
          this.$emit("input", this.checked);
          this.$emit("update:modelValue", this.checked);
          this.$emit("change", this.checked);
        } else {
          this.$emit("change", this.checked);
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.n($data.checked ? "dot_act" : ""),
    b: common_vendor.n({
      "moon": $props.moon
    }),
    c: common_vendor.n({
      "moon_act": $data.checked && $props.moon
    }),
    d: $data.checked ? $props.activeColor : $props.inactiveColor,
    e: $props.size - 2 + "px",
    f: $props.size - 2 + "px",
    g: $props.showText && !$props.moon
  }, $props.showText && !$props.moon ? common_vendor.e({
    h: $data.checked
  }, $data.checked ? {
    i: common_vendor.t($props.textOn),
    j: $props.size - 10 + "px"
  } : {
    k: common_vendor.t($props.textOff),
    l: $props.size - 10 + "px"
  }, {
    m: $data.checked ? $props.activeColor : $props.inactiveColor,
    n: $props.size + 2 + "px",
    o: $props.size - 11 + "px"
  }) : {}, {
    p: common_vendor.n($props.disabled ? "zero_switch_disabled" : ""),
    q: $data.checked ? $props.backgroundColorOn : $props.backgroundColorOff,
    r: $data.checked ? $props.borderColorOn : $props.borderColorOff,
    s: 2 * $props.size + 2 + "px",
    t: $props.size + 4 + "px",
    v: $props.size + "px",
    w: common_vendor.o((...args) => $options.onChange && $options.onChange(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b7d3b29e"], ["__file", "D:/HBuilderProjects/FpaeMsMin/uni_modules/zero-switch/components/zero-switch/zero-switch.vue"]]);
wx.createComponent(Component);
