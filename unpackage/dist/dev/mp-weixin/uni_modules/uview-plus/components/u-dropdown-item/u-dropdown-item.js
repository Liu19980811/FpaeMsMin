"use strict";
const uni_modules_uviewPlus_components_uDropdownItem_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-dropdown-item",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uDropdownItem_props.props],
  options: {
    styleIsolation: "shared"
  },
  data() {
    return {
      active: false,
      // 当前项是否处于展开状态
      activeColor: "#2979ff",
      // 激活时左边文字和右边对勾图标的颜色
      inactiveColor: "#606266"
      // 未激活时左边文字和右边对勾图标的颜色
    };
  },
  computed: {
    // 监听props是否发生了变化，有些值需要传递给父组件u-dropdown，无法双向绑定
    propsChange() {
      return `${this.title}-${this.disabled}`;
    }
  },
  watch: {
    propsChange(n) {
      if (this.parent)
        this.parent.init();
    }
  },
  created() {
    this.parent = false;
  },
  emits: ["update:modelValue", "change"],
  methods: {
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    init() {
      let parent = uni_modules_uviewPlus_libs_function_index.$parent.call(this, "u-dropdown");
      if (parent) {
        this.parent = parent;
        this.activeColor = parent.activeColor;
        this.inactiveColor = parent.inactiveColor;
        let exist = parent.children.find((val) => {
          return this === val;
        });
        if (!exist)
          parent.children.push(this);
        if (parent.children.length == 1)
          this.active = true;
        parent.menuList.push({
          title: this.title,
          disabled: this.disabled
        });
      }
    },
    // cell被点击
    cellClick(value) {
      this.$emit("update:modelValue", value);
      this.parent.close();
      this.$emit("change", value);
    }
  },
  mounted() {
    this.init();
  }
};
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell2 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group2 = common_vendor.resolveComponent("up-cell-group");
  (_easycom_up_icon2 + _easycom_up_cell2 + _easycom_up_cell_group2)();
}
const _easycom_up_icon = () => "../u-icon/u-icon.js";
const _easycom_up_cell = () => "../u-cell/u-cell.js";
const _easycom_up_cell_group = () => "../u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_cell + _easycom_up_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.active
  }, $data.active ? common_vendor.e({
    b: !_ctx.$slots.default && !_ctx.$slots.$default
  }, !_ctx.$slots.default && !_ctx.$slots.$default ? {
    c: common_vendor.f(_ctx.options, (item, index, i0) => {
      return common_vendor.e({
        a: _ctx.modelValue == item.value
      }, _ctx.modelValue == item.value ? {
        b: "2ab01489-2-" + i0 + "," + ("2ab01489-1-" + i0),
        c: common_vendor.p({
          name: "checkbox-mark",
          color: $data.activeColor,
          size: "32"
        })
      } : {}, {
        d: common_vendor.o(($event) => $options.cellClick(item.value), index),
        e: index,
        f: "2ab01489-1-" + i0 + ",2ab01489-0",
        g: common_vendor.p({
          arrow: false,
          title: item.label,
          ["title-style"]: {
            color: _ctx.modelValue == item.value ? $data.activeColor : $data.inactiveColor
          }
        })
      });
    }),
    d: $options.addUnit(_ctx.height)
  } : {}, {
    e: common_vendor.o(() => {
    }),
    f: common_vendor.o(() => {
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ab01489"], ["__file", "D:/HBuilderProjects/FpaeMsMin/uni_modules/uview-plus/components/u-dropdown-item/u-dropdown-item.vue"]]);
wx.createComponent(Component);
