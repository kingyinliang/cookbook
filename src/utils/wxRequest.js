import wepy from 'wepy'

export  class Tips {
    constructor() {
      this.isLoading = false;
    }

      /**
   * 弹出加载提示
   */
    static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
    static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }
}

export default class wxRequest{
    //发出请求
    static async request(method, url, data, loading = true) {
        if(loading){
            Tips.loading()
        }    

        return new Promise((resolve,reject) => {
            wepy.request({
                url: url,
                method: method,
                data: data,
                header: {
                    'Accept': 'application/json'
                },
                success:function(res){
                    console.log(res)
                    if(loading){
                        Tips.loaded()
                    }
                    if(res.statusCode == 200) { 
                        resolve(res.data)                           
                    }else{
                        // wx.showToast({
                        //     icon: "none",
                        //     title: res.data.status_txt,
                        //     duration: 3000,
                        // })
                    }                    
     
                },
                fail:function(){
                    if(loading){
                        Tips.loaded()
                    }
                    wx.showToast({
                        icon: "none",
                        title: "请求失败",
                        duration: 3000,
                    })
                    reject('network error')
                }
            })
        })
     
    }

    //GET   
    static get (url, data, loading = true) {
        return this.request('GET', url, data, loading)
    }
    //PUT
    static put (url, data, loading = true) {
        return this.request('PUT', url, data, loading)
    }
    //POST
    static post (url, data, loading = true) {
        return this.request('POST', url, data, loading)
    }
    //PATCH
    static patch (url, data, loading = true) {
        return this.request('PATCH', url, data, loading)
    }
    //DELETE
    static delete (url, data, loading = true) {
        return this.request('DELETE', url, data, loading)
    }
}