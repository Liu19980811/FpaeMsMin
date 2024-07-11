"use strict";
const common_vendor = require("../../common/vendor.js");
const common_util = require("../../common/util.js");
const _sfc_main = {
  data() {
    return {
      devType: null,
      beginTime: common_util.getTodayDate(),
      endTime: common_util.getTodayDate(),
      showTimePicker: false,
      showType: 0,
      time: common_util.getTodayDate(),
      warns: [{
        id: 1,
        devType: "设备类型1",
        reason: "报警原因1"
      }, {
        id: 2,
        devType: "设备类型2",
        reason: "报警原因2"
      }, {
        id: 3,
        devType: "设备类型3",
        reason: "报警原因3"
      }],
      options1: [
        {
          label: "全部",
          value: null
        },
        {
          label: "投料机",
          value: 0
        },
        {
          label: "增氧机",
          value: 1
        },
        {
          label: "水质监测",
          value: 2
        },
        {
          label: "水位水温",
          value: 3
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
  methods: {
    beginTimeClick() {
      this.showType = 0;
      this.time = this.beginTime;
      this.showTimePicker = true;
    },
    endTimeClick() {
      this.showType = 1;
      this.time = this.endTime;
      this.showTimePicker = true;
    },
    cancel() {
      this.showTimePicker = false;
    },
    confirm(e) {
      if (this.showType === 0) {
        this.beginTime = common_util.formatDateTime(e.value, "yyyy-MM-dd");
        this.showTimePicker = false;
      } else {
        var eTime = common_util.formatDateTime(e.value, "yyyy-MM-dd");
        if (!common_util.isDateBefore(this.beginTime, eTime)) {
          common_vendor.index.showToast({
            title: "时间段错误",
            duration: 2e3,
            icon: "error"
          });
          return;
        }
        this.endTime = eTime;
        this.showTimePicker = false;
      }
    },
    closeDropdown() {
      this.$refs.uDropdownRef.close();
    }
  }
};
if (!Array) {
  const _easycom_u_dropdown_item2 = common_vendor.resolveComponent("u-dropdown-item");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_dropdown2 = common_vendor.resolveComponent("u-dropdown");
  const _easycom_up_empty2 = common_vendor.resolveComponent("up-empty");
  const _easycom_warn_list2 = common_vendor.resolveComponent("warn-list");
  const _easycom_up_datetime_picker2 = common_vendor.resolveComponent("up-datetime-picker");
  (_easycom_u_dropdown_item2 + _easycom_up_icon2 + _easycom_u_button2 + _easycom_u_dropdown2 + _easycom_up_empty2 + _easycom_warn_list2 + _easycom_up_datetime_picker2)();
}
const _easycom_u_dropdown_item = () => "../../uni_modules/uview-plus/components/u-dropdown-item/u-dropdown-item.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_dropdown = () => "../../uni_modules/uview-plus/components/u-dropdown/u-dropdown.js";
const _easycom_up_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_warn_list = () => "../../components/warn-list/warn-list.js";
const _easycom_up_datetime_picker = () => "../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
if (!Math) {
  (_easycom_u_dropdown_item + _easycom_up_icon + _easycom_u_button + _easycom_u_dropdown + _easycom_up_empty + _easycom_warn_list + _easycom_up_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.devType = $event),
    b: common_vendor.p({
      title: "设备类型",
      options: $data.options1,
      modelValue: $data.devType
    }),
    c: common_vendor.t($data.beginTime),
    d: common_vendor.p({
      name: "arrow-down-fill",
      size: "14"
    }),
    e: common_vendor.o((...args) => $options.beginTimeClick && $options.beginTimeClick(...args)),
    f: common_vendor.t($data.endTime),
    g: common_vendor.p({
      name: "arrow-down-fill",
      size: "14"
    }),
    h: common_vendor.o((...args) => $options.endTimeClick && $options.endTimeClick(...args)),
    i: common_vendor.o($options.closeDropdown),
    j: common_vendor.p({
      color: "#5A5AF6",
      shape: "circle"
    }),
    k: common_vendor.p({
      title: "时间"
    }),
    l: common_vendor.sr("uDropdownRef", "4f111178-0"),
    m: common_vendor.p({
      ["active-color"]: "#5A5AF6"
    }),
    n: $data.warns.length == 0,
    o: common_vendor.p({
      warnsProp: $data.warns
    }),
    p: common_vendor.o($options.cancel),
    q: common_vendor.o($options.confirm),
    r: common_vendor.o(($event) => $data.time = $event),
    s: common_vendor.p({
      show: $data.showTimePicker,
      mode: "date",
      modelValue: $data.time
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/warn-info/warn-info.vue"]]);
wx.createPage(MiniProgramPage);
