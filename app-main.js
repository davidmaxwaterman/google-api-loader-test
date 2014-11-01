    Polymer({
      created: function() {
        this.token=null;
        this.ready_promise=null;
      },

      ready: function () {
        var self=this;
        this.ready_promise=new Promise(function(resolve,reject) {
          self.$.button1.addEventHandler('click',function(e) {
            gapi.auth.setToken({access_token:self.$.token.value});
            resolve();
          })
        }).then(new Promise(function(resolve,reject) {
          self.$.drive.addEventHandler('google-api-load',function(e) {
            resolve();
            console.log("drive should exist now",self.$.drive.api.files.list);
          })
        }))
      },
    });