angular.module('starter.controllers', [])
.service('MunchesTeamMember', function($scope) {
  
})
.controller('AppCtrl', function($scope) {
})
.controller('randomCoinCtrl', function($scope) {
  $scope.coinImgSrc ="../img/coin.png";
  $scope.bitCoinSrc="../img/bitCoin.png";
  $scope.dollarCoinSrc="../img/dollarCoin.png"
 
  $scope.coinSide = false;

  $scope.returnRandomSideOfCoin = function(){
    var max=1;
    var min=0;
    var randSide =Math.floor(Math.random() * (max - min + 1)) + min;
    if(randSide==1) {
      $scope.coinSide=true
    }
    else {
      $scope.coinSide=false
    };
  };

})
.controller('randomListCtrl', function($scope) {
  $scope.teamMembers = [
    { name: 'Lior Sapir', imgSrc:"./img/angry.png",city: "Ashkelon" },
    { name: 'Naor Sabag', imgSrc:"./img/tongue.png",city: "Moreshet"},
    { name: 'Ido rahamim',imgSrc:"./img/geek.png",city: "Kiryat Gat" },
    { name: 'Lev David', imgSrc:"./img/alien.png" ,city: "Tel Aviv" },
    { name: 'Dor Saban', imgSrc:"./img/smiley.png" , city: "Sharsheret" }
  ];
  
  $scope.returnRandomMember = function(){
    var randMember  = $scope.teamMembers[Math.floor(Math.random() * $scope.teamMembers.length)];
    $scope.teamMembers.forEach(function(member) {
      member.active = false;
    });
    randMember.active = true;
  };


});

