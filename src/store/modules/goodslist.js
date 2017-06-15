import request from 'superagent'
//import jsonp from 'superagent-jsonp'

const state = {
  bannerList:[],
  hotGoodsList: [],
  recommondList:[]
}

const mutations = {
  commitState (state, payload) {
    switch (payload.tag) {
      case 'goodsList':
        state.hotGoodsList = payload.res
        break;
      case 'recommondList':
        state.recommondList = payload.res;
      break;
      case 'banners':
        state.bannerList = payload.res;
      default:
        break;
    }
  }
}

var banners=[{
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161129/20161129091654_972.jpg'
      }];

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
      }];

var recommond=[{
        id:'1',
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161129/20161129182521_887.png',
        href:'recommond.html'
      },
      {
        id:'2',
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161122/20161122100453_727.png',
        href:'recommond.html'
      }]

const actions = {
  getGoodsList ({ commit }) {
    commit({
      type: 'commitState',
      tag: 'goodsList',
      res: list
    })
  },
  getRecommondList({commit}){
    commit({
      type:'commitState',
      tag:'recommondList',
      res:recommond
    })
  },
  getBannerList({commit}){
    commit({
      type:'commitState',
      tag:'banners',
      res:banners
    })
  }
}

export default {
  state,
  mutations,
  actions
}
