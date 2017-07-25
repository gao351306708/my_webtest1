//head Controller
function MainCtrl($scope, $http) {
	  /*幻灯片*/
	 var mySwiper = new Swiper('.swiper-container',{
			    loop:true,
			    grabCursor: true,
			    autoplay:3500,
			    speed:1500,
	  });
	  $(".arrow-left").click(function(e){
	  	e.preventDefault();
	  	mySwiper.swipePrev();
	  });
	  $(".arrow-right").click(function(e){
	  	e.preventDefault();
	  	mySwiper.swipeNext();
	  });
}
//产品信息
function NewsCtrl($scope, $http, $location) {
	$scope.pageMain = true;
	$scope.page1 = false;
	$scope.page2 = false;
	$scope.page3 = false;
	$scope.page4 = false;$scope.page5 = false;
	$scope.page6 = false;$scope.page7 = false;$scope.page8 = false;$scope.page9 = false;
	$scope.page10 = false;
	$http.get("data/nav.json").success(function(data) {
		$scope.pagesList = data[1].navItems;
	});
	$scope.changePage = function(item){
		$scope.id = item.id;
		switch($scope.id){
			case '01' :
					$scope.page1=true;
					$scope.pageMain = false;
					$scope.name1 = item.name;
					break;
			case '02' :
					$scope.page2=true;
					$scope.pageMain = false;
					$scope.name2 = item.name;
					break;
			case '03' :
					$scope.page3=true;
					$scope.pageMain = false;
					$scope.name3 = item.name;
					break;
			case '04' :
					$scope.page4=true;
					$scope.pageMain = false;
					$scope.name4 = item.name;
					break;
			case '05' :
					$scope.page5=true;
					$scope.pageMain = false;$scope.name5 = item.name;
					break;
			case '06' :
					$scope.page6=true;
					$scope.pageMain = false;$scope.name6 = item.name;
					break;
			case '07' :
					$scope.page7=true;
					$scope.pageMain = false;$scope.name7 = item.name;
					break;
			case '08' :
					$scope.page8=true;
					$scope.pageMain = false;$scope.name8 = item.name;
					break;
			case '09' :
					$scope.page9=true;
					$scope.pageMain = false;$scope.name9 = item.name;
					break;
			case '10' :
					$scope.page10=true;
					$scope.pageMain = false;$scope.name10 = item.name;
					break;
			default :
					break;
		}
	}
}
function PicturesCtrl($scope, $http, $location) {
	console.log("PicturesCtrl");
}
function TeamCtrl($scope, $http, $location) {
	console.log("TeamCtrl");
}
function TeamIntroduceCtrl($scope, $http, $location,$location) {
	console.log("TeamIntroduceCtrl");
}
function TeamNumCtrl($scope, $http,$location, $location) {
	$http.get("data/nav.json").success(function(data) {
		$scope.pagesNumList = data[0].navItems;
	});
}

