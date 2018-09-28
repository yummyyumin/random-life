const app = getApp();
Component({
    properties: {

    },
    data: {

    },
    ready: function () {
        wx.hideTabBar();
    },
    methods: {
        getUserInfo: function (e) {
            if (e.detail.userInfo) {
                // wx.reLaunch({
                //     url: './../index/index'
                // });
                wx.redirectTo({
                    url: './../index/index', //_url,
                    success: () => {
                        console.log(1111);
                    },
                    fail: () => {
                        console.log(2222);
                    },
                });

            } else {
                wx.showToast({
                    icon: "none",
                    title: "拒绝授权，不能正常使用该小程序哦",
                    mask: true
                });
            }
        }
    }
})