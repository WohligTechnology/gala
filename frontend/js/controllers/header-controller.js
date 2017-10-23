myApp.controller('headerCtrl', function ($scope, TemplateService, $stateParams, NavigationService) {
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
    NavigationService.callApiWithData("Company/search", data, function (data) {
        $scope.company = data.data.data.results;
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
});