//定义主模块并注入依赖
angular.module("basketApp", ["ngRoute"])
.controller("DocsController",function($scope,$http){
    $http.get("data/nav.json").success(function(data) {
		$scope.navsList = data;
	});
	//to change nav color
	$scope.changecolor = function(){
		$(".list div").click(function(){
	    	$(this).addClass('on');
	   		$(this).siblings().removeClass('on');
		}).hover(function(){
	   		$(this).addClass('on');
	   		$(this).siblings().removeClass('on');
		});
	}
})
//路由配置,切换页签。即相当于给ng-view添加页面
angular.module("basketApp").config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/Main", {
					templateUrl: "htmls/Main/Main.html",
					controller: MainCtrl
				}).when("/News", {
					templateUrl: "htmls/News/News.html",
					controller: NewsCtrl
				}).when("/Pictures", {
					templateUrl: "htmls/Pictures/Pictures.html",
					controller: PicturesCtrl
				}).when("/Team", {
					templateUrl: "htmls/Team/Team.html",
					controller:	TeamCtrl
				}).when("/TeamIntroduce", {
					templateUrl: "htmls/TeamIntroduce/TeamIntroduce.html",
					controller: TeamIntroduceCtrl
				}).when("/TeamNum", {
					templateUrl: "htmls/TeamNum/TeamNum.html",
					controller:	TeamNumCtrl
				}).otherwise({
					redirectTo: "/Main"
				});
}]);