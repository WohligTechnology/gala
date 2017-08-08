myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        NavigationService.callApi("HomeBanner/search", function (data) {
            // console.log("BannerData", data.data.data.results);
            $scope.banner = data.data.data.results;
            // console.log("resultsData", $scope.banner);
        });
        var data = {};
        data.page = 1;
        NavigationService.callApiWithData("Company/search", data, function (data) {
            // console.log("comapnyData", data);
            $scope.company = data.data.data.results;
            // console.log("comapnyData", $scope.company);

            $scope.companyData = _.chunk($scope.company, 3);

        });

        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };


        $scope.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                size: 'xl',
                windowClass: 'eddy-modal',
                templateUrl: "views/modal/welcome.html"
            });
        };
        $scope.$on('$viewContentLoaded', function () {
            //  $scope.firstTime="";
            if (_.isEmpty($.jStorage.get('firstTime'))) {
                $.jStorage.set('firstTime', {
                    value: true
                });
                // $scope.firstTime=$.jStorage.get('firstTime');

                $scope.openModal();
            }
        });

        // $scope.openModal();
    })


  .controller('allProductCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/allProduct.html");
        TemplateService.title = "Product"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
  NavigationService.callApi("HomeBanner/search", function (data) {
            // console.log("BannerData", data.data.data.results);
            $scope.banner = data.data.data.results;
            // console.log("resultsData", $scope.banner);
        });
   

    })

    .controller('DivisionCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/division.html");
        TemplateService.title = "Division"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";

        // $scope.category = $stateParams.category;
        // console.log("cat", $scope.category);
        $scope.company = {
            _id: $stateParams.category
        };
        // $scope.category = $stateParams.category;

        // console.log("state param value is", $scope.category);


        NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.company, function (data) {
            // console.log("*****companyCategory******", data);
            $scope.companyCategory = data.data.data;
            // console.log("*****companyCategory******", $scope.companyCategory);
            $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
        });
        NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
            console.log("*****CompnayBanner******", data);
            $scope.banner = data.data.data;
            console.log("*****CompnayBanner******", $scope.banner);

        });

    })

    .controller('Division1Ctrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/division1.html");
        TemplateService.title = "Division1"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.product = {
            _id: $stateParams.product
        };
        // $scope.category = $stateParams.category;
        $scope.company = {
            _id: $stateParams.category
        };
        NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
            // console.log("*****CompnayBanner******", data);
            $scope.banner = data.data.data;
            // console.log("*****CompnayBanner******", $scope.banner);

        });
        NavigationService.callApiWithData("CompanyProduct/getAllProductWithCategory", $scope.product, function (data) {
            // console.log("*****product******", data);
            $scope.companyproduct = data.data.data;
            // console.log("*****product******", $scope.companyproduct);
            $scope.companyproductdata = _.chunk($scope.companyproduct, 3);
            // console.log("*****product******", $scope.companyproductdata);
            // console.log("*****chunk product******", companyproductdata);
        });

        NavigationService.callApiWithData("CompanyProduct/getCompanyOfCategory", $scope.product, function (data) {
            // console.log("*****companyCategory******", data);
            $scope.companyCategory = data.data.data;
            // console.log("*****companyCategory******", $scope.companyCategory);
            $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
        });
    })


    .controller('GalleryCtrl', function ($stateParams, $scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/gallery.html");
        TemplateService.title = "Gallery"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.bigImage = "";
        $scope.productId = {
            _id: $stateParams.productId
        };
        $scope.company = {
            _id: $stateParams.category
        };



        console.log("state param value is", $scope.productId);
        // $rootScope.company = $stateParams.category;
        NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
            // console.log("*****companyName******", data);
            $scope.companyName = data.data.data;
            // console.log("*****companyName******", $scope.banner);

        });
        NavigationService.callApiWithData("CompanyProduct/getOneProductDetails", $scope.productId, function (data) {
            console.log("*****ComapanyProduct Details******", data);
            $scope.productId = data.data.data;
            $scope.productIdimage = data.data.data.images;
            $scope.bigImage = $scope.productId.images[0].bigImage;
            // console.log("*****productIdimage Details******", $scope.productIdimage);
            // $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
        });
        $scope.changeBigImage = function (bigImage) {
            $scope.bigImage = bigImage;
        }

    })
    .controller('FAQCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/faq.html");
        TemplateService.title = "Faq"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        // TemplateService.social = "views/template/social.html";

    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });