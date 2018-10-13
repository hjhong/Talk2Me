// pages/teacherList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabOtherSearch: false,
    teacherList: [{
      name: 'John Smith',
      avatar: '',
      language: 'English、Spanish',
      star: 3,
      lessons: '18.30',
      price: '0.50'
    }, {
      name: 'John Smith',
      avatar: '',
      language: 'English、Spanish',
      star: 3,
      lessons: '18.30',
      price: '0.50'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  selectItem: function(selectObj){
    console.log(selectObj.detail.currentSearch)
  },
  toogleItem: function(){
    const that = this;
    this.setData({
      tabOtherSearch: !that.data.tabOtherSearch
    })
  }

})