"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../store/index.js");
const _sfc_main = {
  data() {
    return {
      menuList: [
        {
          title: "筛选",
          type: "filter",
          children: [
            {
              title: "设备类型",
              type: "radio",
              value: null,
              options: [
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
            },
            {
              title: "塘口号",
              type: "radio",
              value: null,
              options: [
                {
                  label: "全部",
                  value: null
                },
                {
                  label: "塘1",
                  value: 0
                },
                {
                  label: "塘2",
                  value: 1
                },
                {
                  label: "塘3",
                  value: 2
                }
              ]
            }
          ]
        }
      ],
      pattern: {
        color: "##5A5AF6",
        backgroundColor: "#fff",
        selectedColor: "#5A5AF6",
        buttonColor: "#5A5AF6",
        iconColor: "#fff"
      },
      tabList: [{
        name: "全部(3)"
      }, {
        name: "在线"
      }, {
        name: "离线"
      }],
      deviceTypes: [{
        text: "投料机",
        value: 0
      }, {
        text: "增氧机",
        value: 1
      }, {
        text: "水质监测",
        value: 2
      }, {
        text: "水位水温",
        value: 3
      }],
      ponds: [{
        text: "塘1",
        value: 0
      }, {
        text: "塘2",
        value: 1
      }, {
        text: "塘3",
        value: 2
      }, {
        text: "塘4",
        value: 3
      }],
      devices: [{
        id: 1,
        deviceType: 0,
        deviceTypeName: "投料机",
        pond: "塘1",
        devId: "001001",
        image: "/static/image/device.jpeg",
        status: 1,
        statusName: "在线",
        runningState: 0,
        runningStateName: "空闲"
      }, {
        id: 2,
        deviceType: 0,
        deviceTypeName: "投料机",
        pond: "塘2",
        devId: "001002",
        image: "/static/image/device.jpeg",
        status: 1,
        statusName: "在线",
        runningState: 1,
        runningStateName: "投料中"
      }, {
        id: 3,
        deviceType: 1,
        deviceTypeName: "增氧机",
        pond: "塘2",
        devId: "002001",
        image: "/static/image/device.jpeg",
        status: 0,
        statusName: "离线",
        runningState: 0,
        runningStateName: "空闲"
      }],
      addDeviceInfo: {
        deviceType: null,
        pond: null,
        devId: null
      },
      addDeviceInfoRules: {
        deviceType: {
          rules: [
            {
              required: true,
              errorMessage: "请选择设备类型"
            }
          ]
        },
        pond: {
          rules: [
            {
              required: true,
              errorMessage: "请选择塘口"
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
      current: 0,
      showPopup: false
    };
  },
  onShow() {
  },
  methods: {
    dpOnConfirm() {
    },
    dpOnChange() {
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
    tabsClick() {
    },
    tabsChange(index) {
      this.current = index;
    },
    typeSelectChange(e) {
    },
    submit() {
      this.$refs.form.validate().then((res) => {
        this.devices.push({
          id: this.devices[this.devices.length - 1].id + 1,
          deviceType: this.addDeviceInfo.deviceType,
          deviceTypeName: "投料机",
          pond: this.addDeviceInfo.pond,
          devId: this.addDeviceInfo.devId,
          image: "/static/image/device.jpeg",
          status: 0,
          statusName: "离线",
          runningState: 0,
          runningStateName: "空闲"
        });
        common_vendor.index.showToast({
          title: "添加成功",
          icon: "none"
        });
        this.showPopup = false;
        console.log("表单数据信息：", res);
      }).catch((err) => {
        console.log("表单错误信息：", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_le_dropdown2 = common_vendor.resolveComponent("le-dropdown");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_device_cards2 = common_vendor.resolveComponent("device-cards");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_le_dropdown2 + _easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uv_tabs2 + _easycom_device_cards2 + _easycom_uni_fab2 + _easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_forms2 + _easycom_up_popup2)();
}
const _easycom_le_dropdown = () => "../../../uni_modules/le-dropdown/components/le-dropdown/le-dropdown.js";
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_tabs = () => "../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_device_cards = () => "../../../components/device-cards/device-cards.js";
const _easycom_uni_fab = () => "../../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_up_popup = () => "../../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_le_dropdown + _easycom_uni_search_bar + _easycom_uni_icons + _easycom_uv_tabs + _easycom_device_cards + _easycom_uni_fab + _easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_forms + _easycom_up_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.dpOnConfirm),
    b: common_vendor.o($options.dpOnChange),
    c: common_vendor.o(($event) => $data.menuList = $event),
    d: common_vendor.p({
      themeColor: "#5A5AF6",
      duration: 300,
      isCeiling: true,
      menuList: $data.menuList
    }),
    e: common_vendor.p({
      placeholder: "请输入设备号查询",
      radius: "50",
      cancelButton: "none",
      bgColor: "#f8f8f8"
    }),
    f: common_vendor.p({
      color: "#5A5AF6",
      type: "scan",
      size: "32"
    }),
    g: common_vendor.o($options.tabsClick),
    h: common_vendor.o($options.tabsChange),
    i: common_vendor.p({
      lineColor: "#5A5AF6",
      activeStyle: {
        color: "#303133",
        fontWeight: "bold",
        transform: "scale(1.3)"
      },
      inactiveStyle: {
        color: "#707070",
        transform: "scale(1)"
      },
      list: $data.tabList
    }),
    j: common_vendor.p({
      deviceList: $data.devices
    }),
    k: common_vendor.sr("fab", "3eb30cde-5"),
    l: common_vendor.o($options.fabClick),
    m: common_vendor.p({
      pattern: $data.pattern,
      horizontal: "right",
      popMenu: "false"
    }),
    n: common_vendor.o($options.typeSelectChange),
    o: common_vendor.o(($event) => $data.addDeviceInfo.deviceType = $event),
    p: common_vendor.p({
      clear: true,
      localdata: $data.deviceTypes,
      modelValue: $data.addDeviceInfo.deviceType
    }),
    q: common_vendor.p({
      label: "设备类型",
      name: "deviceType",
      required: true
    }),
    r: common_vendor.o(_ctx.pondSelectChange),
    s: common_vendor.o(($event) => $data.addDeviceInfo.pond = $event),
    t: common_vendor.p({
      clear: true,
      localdata: $data.ponds,
      placement: "top",
      modelValue: $data.addDeviceInfo.pond
    }),
    v: common_vendor.p({
      label: "塘口",
      name: "pond",
      required: true
    }),
    w: common_vendor.o(($event) => $data.addDeviceInfo.devId = $event),
    x: common_vendor.p({
      type: "text",
      placeholder: "请输入设备号",
      modelValue: $data.addDeviceInfo.devId
    }),
    y: common_vendor.p({
      color: "#5A5AF6",
      type: "scan",
      size: "36"
    }),
    z: common_vendor.p({
      label: "设备号",
      name: "devId",
      required: true
    }),
    A: common_vendor.sr("form", "3eb30cde-7,3eb30cde-6"),
    B: common_vendor.p({
      rules: $data.addDeviceInfoRules,
      model: $data.addDeviceInfo
    }),
    C: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    D: common_vendor.o($options.closePopup),
    E: common_vendor.o($options.openPopup),
    F: common_vendor.p({
      bgColor: "",
      show: $data.showPopup,
      closeable: true,
      closeOnClickOverlay: false,
      round: 20,
      mode: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
