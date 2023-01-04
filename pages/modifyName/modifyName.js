import {
  nameList,
  symbolList
} from '../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图列表
    navList: [{
        "label": "空白名",
        "value": 0
      },
      {
        "label": "重复名",
        "value": 1
      },
      {
        "label": "符号名",
        "value": 2
      }
    ],
    tabcur: 0,
    repeatName: '',
    randomName: '',
    //生成次数
    productionCount: 999,
    //空白符名称
    blankName: ["⁠", "⁡", "⁢", "⁣", "​", "　", " "],
    //重复名符号
    repNameList: ["⁠", "⁡", "⁢", "⁣", "​"],
    //名字和符号
    nameList: nameList,
    symbolList: symbolList,
    exampleImg:'http://icourse.xesimg.com/test1/gzy/miniProgram/reName/reName1.png'
  },
  //创建空白名字
  createName() {
    //判断次数
    if (this.data.productionCount <= 0) {
      wx.showToast({
        title: "次数不足",
        duration: 1000,
      })
    } else {
      let name = ""
      for (let blankName = this.data.blankName, n = 0; n < 6; n++) name += blankName[Math.floor(Math.random() * blankName.length)];
      wx.setClipboardData({
        data: name,
        success: () => {
          wx.showToast({
            title: "成功,已复制",
            duration: 2000
          });
        },
        fail: function () {
          wx.showToast({
            title: "生成失败,请刷新重试",
            icon: "none",
            duration: 1000
          });
        }
      })
      this.setData({
        productionCount: this.data.productionCount - 1
      })
    }
  },
  //创建重复名称
  createRepeatName() {
    if (this.data.productionCount <= 0) {
      return wx.showToast({
        title: "次数不足",
        duration: 1000,
      })
    }
    let repeatName = this.data.repeatName
    let repNameList = this.data.repNameList;
    if (repeatName === '') {
      wx.showModal({
        content: '请输入昵称',
        showCancel: false
      })
    } else {
      let n = ""
      for (let o = 0; o < 6 - repeatName.length; o++) {
        n = repNameList[Math.round(Math.random() * (repNameList.length - 1))] + n;
      }
      let h = "";
      for (let r = repeatName.split(""), num = Math.round(Math.random() * (r.length - 1)), c = 0; c < r.length; c++) {
        num === c ? h = h + r[c] + n : h += r[c];
      }
      wx.setClipboardData({
        data: h,
        success: () => {
          wx.showToast({
            title: "成功，已复制",
            duration: 2000
          });
        },
        fail: function () {
          wx.showToast({
            title: "生成失败,请刷新重试",
            icon: "none",
            duration: 2000
          });
        }
      })
      this.setData({
        productionCount: this.data.productionCount - 1
      });

    }

  },
  //创建随机名称
  createRandomName() {
    let n = Math.round(Math.random() * (this.data.nameList.length - 1));
    this.setData({
      randomName: this.data.nameList[n]
    });
  },
  //长按复制
  copyRandomName(t) {
    if (!this.data.randomName) {
     return wx.showModal({
        content: "请点击随机生成按钮",
        showCancel: false
      });
    }
    wx.setClipboardData({
      data: this.data.randomName,
      success: () =>{
        wx.showToast({
          title: "内容已复制",
          duration: 2e3
        });
      }
    })
  },
  setRepetName(e) {
    this.setData({
      repeatName: e.detail.value
    })
  },
  tabSelect(e) {
    const tabcur = e.currentTarget.dataset.value
    let exampleImg = [
      'http://icourse.xesimg.com/test1/gzy/miniProgram/reName/reName1.png',
      'http://icourse.xesimg.com/test1/gzy/miniProgram/reName/reName2.png',
      'http://icourse.xesimg.com/test1/gzy/miniProgram/reName/reName3.png'
    ][tabcur]
    this.setData({
      tabcur,
      exampleImg
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})