// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      text:"hello 小程序 ",
      xin: "❤",
      list : [{
        name:"张伟你个小傻子",
        age :"18",
        sex : "男"
      },
        {
          name: "张伟，你个小笨蛋",
          age: "18",
          sex: "男"
        },
        {
          name: "张伟，你个小傻逼。。。哈哈哈哈哈",
          age: "18",
          sex: "男"
        },
        {
          name: "可我爱你啊，很爱很爱",
          age: "18",
          sex: "男"
        }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  onclickname : function(){
    //console.log(this.data.xin)
    this.data.xin +="❤"
    this.setData({
      xin : this.data.xin 
    });
  }
})