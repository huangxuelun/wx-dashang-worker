// 获取全局应用程序实例对象
const app = getApp()
const common = require('../../utils/common')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'login',
    iv: {},
    img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
  },
  // 获取用户信息
  getUserInfo () {
    if (app.gu()) {
      this.setData({
        userInfo: app.gu()
      })
    } else {
      app.gu(this.getUserInfo)
    }
  },
  // 获取输入内容
  inputValue (e) {
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    let { iv } = this.data
    if (type === 'phone') {
      iv['phone'] = value
    } else if (type === 'pwd') {
      iv['pwd'] = value
    }
    this.setData({
      iv
    })
  },
  // 用户登陆
  userLogin () {
    let { phone, pwd } = this.data.iv
    if (!phone || phone.length * 1 !== 11) {
      wx.showToast({
        title: '请输入手机号码'
      })
    } else if (!pwd) {
      wx.showToast({
        title: '请输入密码'
      })
    } else {
      // todo
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // this.getUserInfo()
    common.getUserInfo(this)
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
