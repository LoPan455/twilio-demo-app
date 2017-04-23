myApp.controller('HomeController',['$http', function($http) {
  var self = this;
  console.log('home controller running');
  self.testMessage = 'Hello World, this is the home controller test message';
  self.smsObject = {};

  self.sendSms = function(smsObject){
    console.log('I want to send this object: ',smsObject);
    $http({
      method: 'POST',
      url: '/demo',
      data: smsObject
    }).then(function(response){
        console.log('Response from server is',response);
      })

  }// end self.makeC

}]); // end controller code block
