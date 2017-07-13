myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    console.log("in header ctrl");
    $.jStorage.set('FirstTime');
    $scope.division = [{
        name: "uro veener world",
        id: "uroveenerworld",
    }, {
        name: "wood & mouldings",
        id: "woodmouldings",
    }, {
        name: " bath world",
        id: "bathworld",
    }, {
        name: " gala hardware worlds",
        id: "galahardwareworlds",
    }, {
        name: " gala stone worlds",
        id: "galastoneworlds",      
    }, {
        name: " gala furniture worlds",
        id: "galafurnitureworlds",      
    }, {
        name: "euro lighting world",
        id: "eurolightingworld",    
    }, {
        name: "gala drapes world",
        id: "galadrapesworld",      
    }, {
        name: "gala kitchen world",
        id: "galakitchenworld",       
    }, {
        name: "mahavir corporation (India)",
        id: "mahavircorporation",
    }];
//  $scope.homecategory = _.chunk($scope.category, 4);

});