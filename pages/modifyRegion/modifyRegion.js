// pages/modifyRegion/modifyRegion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      "label": "安卓改战区",
      "value": 0
      },
      {
        "label": "苹果改战区",
        "value": 1
      },
      {
        "label": "咨询客服",
        "value": 2
      }
    ],
    tabcur: 0,
    content:[
      {
        title:"一、安装雷电模拟器首先下载模拟器",
        text:'在电脑上双击exe，按照步骤下一步，完成后完成模拟器安装（模拟器安装包可以网上搜索下就行，也可以官网下载）。',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/1.png'
      },
      {
        title:'二、选择要修改的位置',
        text:'运行模拟器，找到更多工具，定位，输入你要改的位置的地区，点击搜索，如下图所示',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/2.gif'
      },
      {
        title:'',
        text:'',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/3.gif'
      },
      {
        title:'三、安装王者荣耀',
        text:'点击搜索王者荣耀，并安装，如下图所示，到这一步你已经完成了80%了',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/4.png'
      },
      {
        title:'',
        text:'',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/5.png'
      },
      {
        title:'四、最后一步',
        text:'进入到王者荣耀，点击个人主页，如图所示，使用该位置就完成了修改。',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/6.png'
      },
      {
        title:'',
        text:'',
        img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/7.png'
      },
      {
        title:'',
        text:'温馨提示：战区只有每周一可以改，最低战力地区可以到微信小程序【战力查询助手2023】首页中查询哦。',
        img:''
      }
    ],
    newsList:[
      {
        content:[
          {
            title:"一、安装雷电模拟器首先下载模拟器",
            text:'在电脑上双击exe，按照步骤下一步，完成后完成模拟器安装（模拟器安装包可以网上搜索下就行，也可以官网下载）。',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/1.png'
          },
          {
            title:'二、选择要修改的位置',
            text:'运行模拟器，找到更多工具，定位，输入你要改的位置的地区，点击搜索，如下图所示',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/2.gif'
          },
          {
            title:'',
            text:'',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/3.gif'
          },
          {
            title:'三、安装王者荣耀',
            text:'点击搜索王者荣耀，并安装，如下图所示，到这一步你已经完成了80%了',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/4.png'
          },
          {
            title:'',
            text:'',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/5.png'
          },
          {
            title:'四、最后一步',
            text:'进入到王者荣耀，点击个人主页，如图所示，使用该位置就完成了修改。',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/6.png'
          },
          {
            title:'',
            text:'',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/7.png'
          },
          {
            title:'',
            text:'温馨提示：战区只有每周一可以改，最低战力地区可以到微信小程序【战力查询助手2023】首页中查询哦。',
            img:''
          }
        ]
      },
      {
        content:[
          {
            title:"一、首先先下载爱思助手并安装",
            text:'爱思助手大家可以自行在网上搜索，并下载，双击运行',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/8.png'
          },
          {
            title:'',
            text:'然后按照步骤，一步步完成安装。',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/9.png'
          },
          {
            title:'二、选择你要改的位置',
            text:'打开爱思助手，手机使用数据线连接到电脑上，然后找到【工具箱】-点击【虚拟定位】',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/10.png'
          },
          {
            title:'',
            text:'进入到虚拟定位后,输入你想改的地区，然后选择搜索，确定好要修改的地区后，点击【修改虚拟定位】，注：手机屏幕不能锁定，不然会修改不成功',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/11.gif'
          },
          {
            title:'三、回到游戏完成修改',
            text:'回到游戏，个人主页，点击下图中的进入到定位修改页面，点击【使用该位置】就完成了修改',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/12.png'
          },
          {
            title:'',
            text:'',
            img:'https://xes-h5-icourse.oss-cn-beijing.aliyuncs.com/test1/gzy/miniProgram/13.png'
          },
          {
            title:'',
            text:'温馨提示：战区只有每周一可以改，最低战力地区可以到微信小程序【战力查询助手2023】首页中查询哦。',
            img:''
          }
        ]
      },
      {
        content:[
          {
            title:"本小程序提供了大量图文教程，教你改战区，但你反反复复看教程，还搞不定，或者就为改一次不想装一堆软件等，再或者软件跟手机不兼容，总闪退等。若有以上问题，可联系客服",
            text:'',
            img:''
          },
          {
            title:'1.官方规定每周一早上5.30后才能修改战区；',
            text:'',
            img:''
          },
          {
            text:'',
            title:'2.为了安全，全部采用扫码登录游戏；',
            img:''
          },
          {
            text:'',
            title:'3.机器化操作，一般1-3分钟可改完；',
            img:''
          },
          {
            text:'',
            title:'4.本周修改战区后，下周一才会发牌子；',
            img:''
          },
          {
            text:'',
            title:'5.有人脸限制的，就不要凑热闹；',
            img:''
          },
          {
            title:'只有周一5.30~24点可以改',
            text:'',
            img:''
          }
        ]
      }
    ],
    MainCur:1
  },
  tabSelect(e) {
    const tabcur = e.currentTarget.dataset.value
    this.setData({
      tabcur,
      content:this.data.newsList[tabcur].content,
      MainCur:1
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