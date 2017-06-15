import Vue from 'vue'
import Vuex from 'vuex'

import goods from './modules/goodslist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goods
  }
})
