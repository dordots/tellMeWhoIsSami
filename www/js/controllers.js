angular.module('starter.controllers', [])
.service('MunchesTeamMember', function($scope) {
  
})
.controller('AppCtrl', function($scope) {
})
.controller('randomCoinCtrl', function($scope) {
  $scope.coinImgSrc ="../img/coin.png";
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

