// pages/components/commonSwiper/commonSwiper.js
import CONFIG from '../../../utils/config'

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //轮播图的指示器是否为长条形->true:长条形，false：圆形 
    DotStyle: true,
    //轮播图列表
    swiperList: CONFIG.swiperList
  },
  ready(){
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
