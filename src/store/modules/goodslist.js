import request from 'superagent'
//import jsonp from 'superagent-jsonp'

const state = {
  hotGoodsList: []
}

const mutations = {
  getGoodsList (state, payload) {
    switch (payload.tag) {
      case 'goodsList':
        state.hotGoodsList = payload.res
        break;
      default:
        break;
    }
  }
}

var list= [{
        id:'10',
        title:'【顺丰全国包邮 净重2.3-2.7kg】国家地理标志产品《舌尖上的中国1》推荐 湖北洪湖-蔡甸莲藕 蔡甸基地现挖直发',
        src:'http://youam.yunyiwd.com/user_res/upload/temp/201610/27/115396241508081982.jpg',
        href:'goods.html',
        salePrice:'99.0',
        marketPrice:'299.00'
      },
      {
        id:'11',
        title:'国家地理标志产品《舌尖上的中国1》推荐 湖北洪湖-蔡甸莲藕 蔡甸基地现挖直发',
        src:'http://youam.yunyiwd.com/user_res/upload/temp/201610/10/9089384555414457912.jpg',
        href:'goods.html',
        salePrice:'199.00',
        marketPrice:'299.00'
      },
      {
        id:'12',
        title:'【顺丰全国包邮 净重2.3-2.7kg】国家地理标志产品《舌尖上的中国1》推荐 湖北洪湖-蔡甸莲藕 蔡甸基地现挖直发',
        src:'http://youam.yunyiwd.com/user_res/upload/temp/201610/26/492755559509475429.jpg',
        href:'goods.html',
        salePrice:'199.00',
        marketPrice:'299.00'
      },
      {
        id:'20',
        title:'【顺丰全国包邮 净重2.3-2.7kg】国家地理标志产品《舌尖上的中国1》推荐 湖北洪湖-蔡甸莲藕 蔡甸基地现挖直发',
        src:'http://youam.yunyiwd.com/user_res/upload/temp/201610/24/1848569960633342481.jpg',
        href:'goods.html',
        salePrice:'199.00',
        marketPrice:'299.00'
      }]

const actions = {
  getGoodsList ({ commit }) {
    commit({
      type: 'getGoodsList',
      tag: 'goodsList',
      res: list
    })
  }
}

export default {
  state,
  mutations,
  actions
}
