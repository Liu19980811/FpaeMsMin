"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showPopup: false,
      showPicker: false,
      showModal: false,
      modalTitle: "提示",
      modalContent: "",
      delTimeSlotIndex: -1,
      addOrUpdateTimeSlotIndex: -1,
      isStop: false,
      pickerTitle: "请选择时间",
      isBeginTimePicker: true,
      pickerTime: this.getNowHousM(),
      timeSlot: {
        beginTime: "",
        endTime: "",
        enable: 0
      },
      modes: [{
        text: "定时",
        value: 0
      }, {
        text: "常开",
        value: 1
      }, {
        text: "自动",
        value: 2
      }],
      // 表单数据
      deviceInfo: {
        mode: 0
      },
      timeSlotLists: [{
        beginTime: "01:00",
        endTime: "02:00",
        enable: 0
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }, {
        beginTime: "20:00",
        endTime: "21:00",
        enable: 1
      }],
      // 表单校验规则
      deviceInfoRules: {
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        age: {
          rules: [{
            required: true,
            errorMessage: "年龄不能为空"
          }]
        },
        hobby: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 2) {
                  callback("请至少勾选两个兴趣爱好");
                }
                return true;
              }
            }
          ]
        }
      }
    };
  },
  computed: {
    startBtn() {
      return this.isStop ? "stop" : "btn";
    }
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
    configOnClick() {
      this.showPopup = true;
    },
    openPopup() {
    },
    closePopup() {
      this.showPopup = false;
    },
    addTimeSlot() {
      if (this.timeSlotLists.length > 7) {
        common_vendor.index.showToast({
          title: "最多添加8个时段",
          icon: "error"
        });
        return;
      }
      this.isBeginTimePicker = true;
      this.pickerTitle = "请选择起始时间";
      this.addOrUpdateTimeSlotIndex = -1;
      this.pickerTime = this.getNowHousM();
      this.showPicker = true;
    },
    modifyTimeSlot(index, item) {
      this.isBeginTimePicker = true;
      this.pickerTitle = "请修改起始时间";
      this.pickerTime = item.beginTime;
      this.addOrUpdateTimeSlotIndex = index;
      this.timeSlot = { ...item };
      this.showPicker = true;
    },
    confirmPicker(time) {
      if (this.isBeginTimePicker) {
        if (this.addOrUpdateTimeSlotIndex < 0) {
          this.showPicker = false;
          this.pickerTitle = "请选择结束时间";
        } else {
          this.showPicker = false;
          this.pickerTitle = "请修改结束时间";
        }
        this.timeSlot.beginTime = time.value;
        setTimeout(() => {
          this.pickerTime = this.timeSlot.endTime;
          this.showPicker = true;
        }, 200);
        this.isBeginTimePicker = false;
      } else {
        this.timeSlot.endTime = time.value;
        let t = { ...this.timeSlot };
        if (this.addOrUpdateTimeSlotIndex < 0) {
          this.timeSlotLists.push(t);
        } else {
          this.timeSlotLists[this.addOrUpdateTimeSlotIndex] = t;
        }
        this.showPicker = false;
        common_vendor.index.showToast({
          title: "操作成功",
          icon: "success"
        });
      }
    },
    cancelPicker() {
      this.showPicker = false;
    },
    closePicker() {
    },
    startOrStopClick() {
      this.isStop = !this.isStop;
    },
    delTimeSlot(index) {
      this.modalContent = "确认要删除时段" + (index + 1) + "吗？";
      this.delTimeSlotIndex = index;
      this.showModal = true;
      common_vendor.index.showModal({
        title: "提示",
        content: "确认要删除时段" + (index + 1) + "吗？",
        success: function(res) {
          if (res.confirm) {
            this.timeSlotLists.splice(index, 1);
            common_vendor.index.showToast({
              title: "删除成功",
              icon: "success"
            });
            console.log("用户点击确定");
          } else if (res.cancel)
            ;
        }
      });
    },
    modalConfirm() {
      this.timeSlotLists.splice(this.delTimeSlotIndex, 1);
      common_vendor.index.showToast({
        title: "删除成功",
        icon: "success"
      });
      this.showModal = false;
    },
    modalCancel() {
      this.showModal = false;
    },
    getNowHousM(addHours = 0) {
      const now = /* @__PURE__ */ new Date();
      let hour = now.getHours() + addHours;
      let minute = 0;
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      return formattedTime;
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_zero_switch2 = common_vendor.resolveComponent("zero-switch");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  const _easycom_up_datetime_picker2 = common_vendor.resolveComponent("up-datetime-picker");
  const _easycom_up_modal2 = common_vendor.resolveComponent("up-modal");
  const _easycom_up_notify2 = common_vendor.resolveComponent("up-notify");
  (_easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_icons2 + _easycom_uni_section2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms_item2 + _easycom_uni_number_box2 + _easycom_zero_switch2 + _easycom_uni_forms2 + _easycom_up_popup2 + _easycom_up_datetime_picker2 + _easycom_up_modal2 + _easycom_up_notify2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_zero_switch = () => "../../uni_modules/zero-switch/components/zero-switch/zero-switch.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
const _easycom_up_datetime_picker = () => "../../uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js";
const _easycom_up_modal = () => "../../uni_modules/uview-plus/components/u-modal/u-modal.js";
const _easycom_up_notify = () => "../../uni_modules/uview-plus/components/u-notify/u-notify.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row + _easycom_uni_icons + _easycom_uni_section + _easycom_uni_data_checkbox + _easycom_uni_forms_item + _easycom_uni_number_box + _easycom_zero_switch + _easycom_uni_forms + _easycom_up_popup + _easycom_up_datetime_picker + _easycom_up_modal + _easycom_up_notify)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      span: 20
    }),
    b: _ctx.isActive ? 1 : "",
    c: common_vendor.p({
      span: 4
    }),
    d: common_vendor.p({
      span: 18
    }),
    e: common_vendor.p({
      span: 4
    }),
    f: common_vendor.p({
      span: 12
    }),
    g: common_vendor.p({
      span: 12
    }),
    h: common_vendor.p({
      span: 12
    }),
    i: common_vendor.p({
      span: 12
    }),
    j: common_vendor.p({
      span: 12
    }),
    k: common_vendor.p({
      span: 12
    }),
    l: common_vendor.p({
      span: 12
    }),
    m: common_vendor.p({
      span: 12
    }),
    n: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-kaiguan",
      size: "24",
      color: "#FFFFFF"
    }),
    o: common_vendor.t($data.isStop ? "停止" : "启动"),
    p: common_vendor.n($options.startBtn),
    q: common_vendor.o((...args) => $options.startOrStopClick && $options.startOrStopClick(...args)),
    r: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-peizhi",
      size: "24",
      color: "#FFFFFF"
    }),
    s: common_vendor.o((...args) => $options.configOnClick && $options.configOnClick(...args)),
    t: common_vendor.o(($event) => _ctx.moreProductListOnClick()),
    v: common_vendor.p({
      type: "right",
      size: "22px"
    }),
    w: common_vendor.p({
      title: "报警信息",
      type: "line",
      ["title-font-size"]: "36rpx"
    }),
    x: common_vendor.o(($event) => $data.deviceInfo.mode = $event),
    y: common_vendor.p({
      localdata: $data.modes,
      modelValue: $data.deviceInfo.mode
    }),
    z: common_vendor.p({
      label: "模式",
      name: "mode"
    }),
    A: common_vendor.p({
      value: 0,
      step: 1,
      min: 0,
      max: 999,
      background: "#5A5AF6",
      color: "#fff"
    }),
    B: $data.deviceInfo.mode === 0,
    C: common_vendor.p({
      type: "plusempty",
      size: "18",
      color: "#FFFFFF"
    }),
    D: common_vendor.o((...args) => $options.addTimeSlot && $options.addTimeSlot(...args)),
    E: common_vendor.f($data.timeSlotLists, (item, index, i0) => {
      return {
        a: "8746ba7f-33-" + i0 + ",8746ba7f-31",
        b: common_vendor.o(($event) => $options.delTimeSlot(index), index),
        c: common_vendor.t(index + 1),
        d: common_vendor.t(item.beginTime),
        e: common_vendor.t(item.endTime),
        f: "8746ba7f-34-" + i0 + ",8746ba7f-31",
        g: common_vendor.o(($event) => item.enable = $event, index),
        h: common_vendor.p({
          showText: "true",
          ["inactive-color"]: "#ccc",
          ["active-color"]: "#5A5AF6",
          modelValue: item.enable
        }),
        i: "8746ba7f-35-" + i0 + ",8746ba7f-31",
        j: common_vendor.o(($event) => $options.modifyTimeSlot(index, item), index),
        k: index
      };
    }),
    F: common_vendor.p({
      type: "closeempty",
      size: "22",
      color: "#FFFFFF"
    }),
    G: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-xiugai",
      size: "20",
      color: "#FFFFFF"
    }),
    H: $data.deviceInfo.mode === 2,
    I: common_vendor.p({
      value: 0,
      step: 1,
      min: 0,
      max: 99,
      background: "#5A5AF6",
      color: "#fff"
    }),
    J: common_vendor.p({
      ["label-width"]: "120",
      label: "投料 (0~99秒)",
      name: "mode"
    }),
    K: common_vendor.p({
      value: 0,
      step: 1,
      min: 0,
      max: 999,
      background: "#5A5AF6",
      color: "#fff"
    }),
    L: common_vendor.p({
      ["label-width"]: "120",
      label: "间隔 (0~999秒)",
      name: "mode"
    }),
    M: common_vendor.p({
      value: 0,
      step: 1,
      min: 1,
      max: 16,
      background: "#5A5AF6",
      color: "#fff"
    }),
    N: common_vendor.p({
      ["label-width"]: "120",
      label: "出料量 (1~16档)",
      name: "mode"
    }),
    O: common_vendor.p({
      value: 0,
      step: 1,
      min: 1,
      max: 16,
      background: "#5A5AF6",
      color: "#fff"
    }),
    P: common_vendor.p({
      ["label-width"]: "120",
      label: "面积 (1~16档)",
      name: "mode"
    }),
    Q: common_vendor.sr("customForm", "8746ba7f-26,8746ba7f-25"),
    R: common_vendor.p({
      rules: $data.deviceInfoRules,
      model: $data.deviceInfo
    }),
    S: common_vendor.o(($event) => _ctx.submit("customForm")),
    T: common_vendor.o($options.closePopup),
    U: common_vendor.o($options.openPopup),
    V: common_vendor.p({
      bgColor: "",
      show: $data.showPopup,
      closeable: true,
      closeOnClickOverlay: false,
      round: 20,
      mode: "bottom"
    }),
    W: common_vendor.o($options.cancelPicker),
    X: common_vendor.o($options.confirmPicker),
    Y: common_vendor.o($options.closePicker),
    Z: common_vendor.o(($event) => $data.pickerTime = $event),
    aa: common_vendor.p({
      hasInput: true,
      show: $data.showPicker,
      mode: "time",
      title: $data.pickerTitle,
      modelValue: $data.pickerTime
    }),
    ab: $data.showPicker,
    ac: common_vendor.o($options.modalConfirm),
    ad: common_vendor.o($options.modalCancel),
    ae: common_vendor.p({
      show: $data.showModal,
      title: $data.modalTitle,
      content: $data.modalContent,
      showCancelButton: "true"
    }),
    af: common_vendor.sr("uNotify", "8746ba7f-46"),
    ag: common_vendor.p({
      message: "Hi uview-plus"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8746ba7f"], ["__file", "D:/HBuilderProjects/FpaeMsMin/pages/device-details/device-details.vue"]]);
wx.createPage(MiniProgramPage);
