myApp.controller('headerCtrl', function ($scope, TemplateService, $stateParams, NavigationService, $state) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $.jStorage.set('FirstTime');
    $scope.category = {
        _id: $stateParams.category
    };

    var data = {};
    $scope.searchText = {};
    data.page = 1;
    NavigationService.callApiWithData("Company/getAllCompany", data, function (data) {
        $scope.company = data.data.data
    });

    NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.category, function (data) {
        $scope.companyCategory = data.data.data.results;
    });

    NavigationService.callApi("CompanyProduct/getAllProduct", function (data) {
        $scope.allproduct = data.data.data;
    });

    $scope.search = function (value) {
        $scope.companyCategory = [];
        $scope.company1 = [];
        $scope.companyProduct = [];
        $scope.isText = true;

        if (value.searchText != "") {
            NavigationService.callApiWithData("Company/globalSearch", value, function (data) {

                if (data.data.value) {
                    $scope.companyCategory = data.data.data.companyCategory;
                    $scope.company1 = data.data.data.company;
                    $scope.companyProduct = data.data.data.companyProduct;
                } else {
                    console.log("Event data false");
                }
            });
        }
    };
    $scope.division = function (comapnyName) {
        // console.log("*********************", comapnyName)
        var comapnyName = comapnyName.split(' ').join('-');
        $state.go('division', {
            comapnyName: comapnyName
        })
    }
    $scope.divisions = function (companyName, categoryName) {
        var categoryName = categoryName.split(' ').join('-');
        var companyName = companyName.split(' ').join('-');
        $state.go('divisions', {
            companyName: companyName,
            categoryName: categoryName
        })
    }
     $scope.gallery = function (companyName,productName) {
          console.log("*********************", companyName,productName)
           var companyName = companyName.split(' ').join('-');
            var productName = productName.split(' ').join('-');
            $state.go('gallery', {
                companyName: companyName,
                productName: productName
            })
        }
});