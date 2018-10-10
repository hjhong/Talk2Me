// pages/register/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contryActive: {},
    contries: [],
    sexActive: {},
    sexs: [],
    userTypeActive: {},
    userTypes: [],
    avatry: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setInitData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  // 上传图片
  uploadImg: function(){
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          avatry: res.tempFilePaths
        })
      }
    })
  },
  // 城市切换
  contryPickerChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      contryActive: this.data.contries[e.detail.value]
    })
  },

  // 性别切换
  sexPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexActive: this.data.sexs[e.detail.value]
    })
  },

  // 
  userTypePickerChange: function (e) {
    this.setData({
      userTypeActive: this.data.userTypes[e.detail.value]
    })
  },

  //  初始值设置
  setInitData: function(){
    this.setData({
      contryActive: {
        name: '中国',
        value: 1
      },
      contries: [{
        name: '中国',
        value: 1
      }, {
        name: '新西兰',
        value: 2
      }, {
        name: '新加坡',
        value: 3
      }],
      sexActive: {
        name: '男',
        value: 1
      },
      sexs: [{
        name: '男',
        value: 1
      }, {
        name: '女',
        value: 2
      }],
      userTypeActive: {
        name: '学生',
        value: 1
      },
      userTypes: [{
        name: '学生',
        value: 1
      }, {
        name: '老师',
        value: 2
      }]
    })
    
  }

})