// index.js
import CONFIG from '../../utils/config'
Page({
  data: {
    //英雄列表
    heroList: [],
    //当前导航筛选出来的列表
    curList: [],
    //导航条列表
    navList: CONFIG.navList,
    //手机区服类型列表
    radioTypeList: CONFIG.radioTypeList,
    //导航条距离左边的间距
    scrollLeft: 0,
    //当前选择的导航条的值
    tabSelectValue: 0,
    //弹窗类型的名字
    modalName: null,
    //选择的英雄信息
    selectHeroInfo: '',
    //英雄的最低战力详细信息
    heroDetail: {},
    //loading遮罩
    loading: false
  },
  /**
   *  设置导航条的状态，及筛选数据
   */
  tabSelect(e) {
    const tabSelectValue = e.currentTarget.dataset.value
    const allData = this.data.heroList
    let filterData = allData.filter(item => item.hero_type === tabSelectValue || item.hero_type2 === tabSelectValue)
    if (tabSelectValue === 0) filterData = allData
    this.setData({
      tabSelectValue,
      curList: filterData,
      scrollLeft: (e.currentTarget.dataset.index - 1) * 60
    })
  },
  //显示弹窗，并设置弹窗的类型
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target.radiotype,
      selectHeroInfo: e.currentTarget.dataset.target.hreoInfo
    })
  },
  //关闭弹窗
  hideModal() {
    this.setData({
      modalName: null
    })
  },
  //选择区服
  selectType(e) {
    //区服类型
    let type = e.currentTarget.dataset.target.info.value
    let name = this.data.selectHeroInfo.cname
    this.setData({
      loading: true
    })
    wx.request({
      url: `https://www.somekey.cn/mini/hero/getHeroInfo.php/api_select.php`,
      data:{
        hero:name,
        type
      },
      success: res => {
        this.setData({
          heroDetail: res.data.data,
          modalName: e.currentTarget.dataset.target.radiotype,
        })
      },
      fail:res=>{
        this.setData({
          loading: false
        })
        wx.showToast({
          title: '请求失败'
        })
      },
      complete: res => {
        this.setData({
          loading: false
        })
      }
    })
  },
  /**
   * 生命周期->监听页面加载
   */
  onLoad() {
    // 获取英雄列表
    wx.request({
      url: 'https://www.somekey.cn/mini/hero/getHeroList.php',
      success:res =>{
        this.setData({
          heroList:res.data.data,
          curList:res.data.data
        })
      }
    })
  }
})