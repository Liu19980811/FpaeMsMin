"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    user: {}
  },
  getters: {
    isLogin: (state) => Object.keys(state.user).length > 0
    //是否登录
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {}
});
exports.store = store;
