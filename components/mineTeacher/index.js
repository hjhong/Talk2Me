// components/mineTeacher/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '念念',
    userInfo: {
      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toCourseManage: function(){
      wx.navigateTo({
        url: '/pages/courseManage/index',
      })
    }
  }
})
