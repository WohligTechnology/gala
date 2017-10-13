myApp.controller('headerCtrl', function ($scope, TemplateService, $stateParams, NavigationService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    console.log("in header ctrl");
    $.jStorage.set('FirstTime');
    $scope.category = {
        _id: $stateParams.category
    };
//    $scope.categoryName = $stateParams.categoryName;
    var data = {};
    $scope.searchText = {};
    data.page = 1;
    NavigationService.callApiWithData("Company/search", data, function (data) {
        // console.log("comapnyData******", data);
        $scope.company = data.data.data.results;
         console.log("*****in header", $scope.company);

    });

    NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.category, function (data) {
        console.log("companyCategory inside header controller", data);
        $scope.companyCategory = data.data.data.results;


    });

    NavigationService.callApi("CompanyProduct/getAllProduct", function (data) {
            console.log("getallproduct", data.data.data);
            $scope.allproduct = data.data.data;
            console.log("heyyproduct",$scope.allproduct)
            // $scope.allproductData = _.chunk($scope.allproduct, 3);
        });
        
        $scope.search = function (value) {
            
            // var length = 0;
            console.log($scope.searchText.searchText.length)
            $scope.companyCategory = [];
            $scope.company1 = [];
            $scope.companyProduct = [];
            $scope.isText = true;
            console.log("searchvalue",value)
            if (value.searchText != "") {
                console.log("searchvalue1",value)
                NavigationService.callApiWithData("Company/globalSearch",value, function (data) {
                    console.log("increment",length)
                    // if(length==$scope.searchText.searchText.length){
                    console.log("searchvalue2",value,data)
                    if (data.data.value) {
                        console.log("Event data", data.data);
                        $scope.companyCategory = data.data.data.companyCategory;
                        $scope.company1 = data.data.data.company;
                        $scope.companyProduct = data.data.data.companyProduct;
                        console.log($scope.companyCategory ,$scope.company ,$scope.companyProduct );
                    } else {
                        console.log("Event data false");
                    }
                // else{
                //     console.log("not working")
                // }
                });
                
            }
        };

        
    
       
    // $scope.division = [{
    //     name: "uro veener world",
    //     id: "uroveenerworld",
    // }, {
    //     name: "wood & mouldings",
    //     id: "woodmouldings",
    // }, {
    //     name: " bath world",
    //     id: "bathworld",
    // }, {
    //     name: " gala hardware worlds",
    //     id: "galahardwareworlds",
    // }, {
    //     name: " gala stone worlds",
    //     id: "galastoneworlds",
    // }, {
    //     name: " gala furniture worlds",
    //     id: "galafurnitureworlds",
    // }, {
    //     name: "euro lighting world",
    //     id: "eurolightingworld",
    // }, {
    //     name: "gala drapes world",
    //     id: "galadrapesworld",
    // }, {
    //     name: "gala kitchen world",
    //     id: "galakitchenworld",
    // }, {
    //     name: "mahavir corporation (India)",
    //     id: "mahavircorporation",
    // }];
    //  $scope.homecategory = _.chunk($scope.category, 4);

});