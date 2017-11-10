myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {

    $scope.template = TemplateService.getHTML("content/home.html");
    $scope.loaded = false;
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";

    NavigationService.callApi("HomeBanner/getAllBanner", function (data) {
        $scope.banner = data.data.data;
        $scope.loaded = true;
    });

    var imagePopup = null;
    $scope.openpopup = function () {
        imagePopup = $uibModal.open({
            templateUrl: "views/popupmodal.html",
            size: "md",
            scope: $scope
        });
    };

    var data = {};
    data.page = 1;
    NavigationService.callApiWithData("Company/getAllCompany", data, function (data) {

        $scope.company = data.data.data;

        $scope.companyData = _.chunk($scope.company, 3);


    });


    var abc = _.times(100, function (n) {
        return n;
    });

        
    var i = 0;
    $scope.buttonClick = function () {
        i++;

    };

    $scope.closepopup = function () {
        // $.jStorage.set('firstTime', false);
        imagePopup.close();
    };

    // $scope.openModal = function () {
    //     var modalInstance = $uibModal.open({
    //         animation: true,
    //         scope: $scope,
    //         size: 'md',
    //         templateUrl: "views/popupmodal.html"
    //     });
    // };

    function getPopUpImage() {
      
        NavigationService.callApiWithData("PopUpImage/search", data, function (data) {
        
            $scope.popUpImage = data.data.data.results[0].image;
            console.log("popupnotcoming",$scope.popUpImage)
           
         
        });
    }

    getPopUpImage();

    $scope.$on('$viewContentLoaded', function () {
        if (_.isEmpty($.jStorage.get('firstTime'))) {
            $.jStorage.set('firstTime', {
                value: true
            });
            $scope.openpopup();
        }
    });
 
    //category
       NavigationService.callApi("CompanyCategory/getAllCategory", function (data) {
        $scope.getAllCategory = data.data.data;
        $scope.data = _.groupBy($scope.getAllCategory, 'company.name');
    //  $scope.companyarray  = _.slice($scope.data, 0 , )
 
        console.log("***********hi**********", $scope.data);
        $scope.loaded = true;
    });
    

})
        


.controller('allProductCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/allProduct.html");
    TemplateService.title = "Product"; //This is the Title of the Website
    $scope.loaded = false;
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";
    $scope.product = {
        _id: $stateParams.product
    };

    $scope.company = {
        _id: $stateParams.category
    };

    NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
        $scope.banner = data.data.data;

    });

    NavigationService.callApi("CompanyCategory/getAllCategory", function (data) {
        $scope.getAllCategory = data.data.data;
        $scope.data = _.groupBy($scope.getAllCategory, 'company.name');
        $scope.loaded = true;
    });
})

.controller('DivisionCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/division.html");
    TemplateService.title = "Division"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";
    $scope.loaded = false;
    $scope.company = {
        _id: $stateParams.category
    };

    $scope.categoryName = $stateParams.categoryName;

    NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.company, function (data) {
        $scope.companyCategory = data.data.data;
        $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
    });

    NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
        $scope.banner = data.data.data;
        $scope.loaded = true;
    });

})

.controller('Division1Ctrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/division1.html");
    TemplateService.title = "Division1"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.loaded = false;
    TemplateService.social = "views/template/social.html";
    $scope.product = {
        _id: $stateParams.product
    };

    $scope.company = {
        _id: $stateParams.category
    };

    NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
        $scope.banner = data.data.data;
        $scope.loaded = true;
    });

    NavigationService.callApiWithData("CompanyProduct/getAllProductWithCategory", $scope.product, function (data) {
        $scope.companyproduct = data.data.data;
        $scope.companyproductdata = _.chunk($scope.companyproduct, 3);
        $scope.loaded = true;
    });

    NavigationService.callApiWithData("CompanyProduct/getCompanyOfCategory", $scope.product, function (data) {

        $scope.companyCategory = data.data.data;
        $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
        $scope.loaded = true;
    });
})


.controller('GalleryCtrl', function ($stateParams, $state, $scope, TemplateService, NavigationService, $timeout, $uibModal) {

    $scope.template = TemplateService.getHTML("content/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.loaded = false;
    TemplateService.social = "views/template/social.html";
    $scope.bigImage = "";

    $scope.productId = {
        _id: $stateParams.productId
    };

    $scope.company = {
        _id: $stateParams.category
    };

    NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
        $scope.companyName = data.data.data;
    });

    NavigationService.callApiWithData("CompanyProduct/getOneProductDetails", $scope.productId, function (data) {
        $scope.productId = data.data.data;
        $scope.productIdimage = data.data.data.images;
        $scope.bigImage = $scope.productId.images[0].bigImage;
        $scope.loaded = true;
    });

    $scope.changeBigImage = function (bigImage) {
        $scope.bigImage = bigImage;
    }

    // enquire modal start

    $scope.enquire = function () {
        enquireModal = $uibModal.open({
            templateUrl: "views/modal/enquire.html",
            size: "md",
            scope: $scope
        });
    };

    $scope.closepopup = function () {
        $.jStorage.set('popNot', false);
        enquireModal.close();
        $state.reload()
    };

    $scope.saveEnquiry = function (detail) {
        detail.productName = $scope.productId.name;
        detail.image = $scope.bigImage;

        NavigationService.callApiWithData("ContactUs/save", detail, function (data) {
            $scope.submitmsg = data.data;
            detail.firstName = "";
            detail.lastName = "";
            detail.contactNumber = "";
            detail.message = "";
            detail.productName = "";
            detail.image = "";
            $timeout(function () {
                $scope.closepopup()
            }, 1000);
        })
    }
})

.controller('ShowroomCtrl', function ($scope, TemplateService, apiService, NavigationService, $stateParams, $timeout) {
    $scope.template = TemplateService.getHTML("content/showroom.html");
    TemplateService.title = "Showroom"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
        $scope.companyName = data.data.data;
    });

    NavigationService.callApiWithData("CompanyProduct/getOneProductDetails", $scope.productId, function (data) {
        $scope.productId = data.data.data;
        $scope.productIdimage = data.data.data.images;
        $scope.bigImage = $scope.productId.images[0].bigImage;

    });

    NavigationService.callApi("CompanyProduct/getAllProduct", function (data) {
        $scope.ProductDetails = data.data.data;
        $scope.ProductDetails = data.data.data;
        if ($scope.ProductDetails.length != 0) {
            $scope.bigImage = $scope.ProductDetails[0].images[0].bigImage;
            $scope.name = $scope.ProductDetails[0].name;
            $scope.backgroundImage = $scope.ProductDetails[0].companyCategory.company.backgroundImage;
        } else {
            console.log("hello")
        }

        $scope.changeBigImage = function (bigImage, name, backgroundImage) {
            $scope.bigImage = bigImage;
            $scope.name = name;
            $scope.backgroundImage = backgroundImage;
        };
    });

    $scope.product = {};
    $scope.bigImage = {};
    $scope.name = {};
})

.controller('FAQCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/faq.html");
    TemplateService.title = "Faq";
    $scope.navigation = NavigationService.getNavigation();
})


.controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/aboutUs.html");
    TemplateService.title = "AboutUs"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})

// start of contact

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/contact.html");
    TemplateService.title = "Contact"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
})

.controller('GroupActivitiesCtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
    var data = {}
    $scope.template = TemplateService.getHTML("content/groupActivities.html");
    NavigationService.callApiWithData("Company/getAllCompany", data, function (data) {
        
                $scope.company = data.data.data;
        
                $scope.companyData = _.chunk($scope.company, 3);
        
        
            });
})
//Example API Controller

.controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
    apiService.getDemo($scope.formData, function (data) {});
});