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

    NavigationService.callApi("BrandsHomeImage/search", function (data) {
        $scope.brandImage = data.data.data.results[0];
        console.log("brandImage",$scope.brandImage)
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

$scope.brands=[]
    NavigationService.callApiWithData("Company/getAllCompanyWithCategory", data, function (data) {
        $scope.companyCategoryBrands = data.data.data;
        // $scope.Brandchunks = _.chunk($scope.companyCategoryBrands, 4);
        console.log('companyCategoryBrands&&&&',$scope.companyCategoryBrands)
        _.forEach($scope.companyCategoryBrands, function(value) {
            _.forEach(value.brands, function(value){
                console.log('hellomoto',value);
                $scope.brands.push(value)
            });
            console.log('hellimagebrand',$scope.brands);
          });
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
        $scope.data1 = _.orderBy($scope.getAllCategory, ['company.order'], ['asc', 'desc'])
        console.log( 'orderby',$scope.data1)
        $scope.data = _.groupBy($scope.data1, 'company.name');
        console.log( $scope.data)
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

    $scope.categoryName = $stateParams.categoryName.split('/');

    NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.company, function (data) {
        console.log("companybrands",data)
        $scope.companyBrands = data.data.data[0].company.brandImage;
console.log("hellobrands",$scope.companyBrands)
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
        console.log("companyNAme",$scope.banner)
        $scope.bannerName = $scope.banner.name.split('/')
        $scope.loaded = true;
    });

    NavigationService.callApiWithData("CompanyProduct/getAllProductWithCategory", $scope.product, function (data) {
        $scope.companyproduct = data.data.data;
        console.log("companyNAme",$scope.companyproduct)
        $scope.companyproductdata = _.chunk($scope.companyproduct, 3);
        $scope.loaded = true;
    });

    NavigationService.callApiWithData("CompanyProduct/getCompanyOfCategory", $scope.product, function (data) {
        console.log("companyNAme",$scope.companyCategory)
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


.controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $sce) {
    $scope.template = TemplateService.getHTML("content/aboutUs.html");
    TemplateService.title = "AboutUs"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    NavigationService.callApi("company/getAllCompany", function (data) {
        $scope.aboutUs = data.data.data;
        // _.each($scope.aboutUs,function(value){
        //     value.content = $sce.trustAsHtml(value.aboutCompData)
        // })
        console.log("aboutUsData",$scope.aboutUs)
        $scope.loaded = true;
    });

})

// start of contact

.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/contact.html");
    TemplateService.title = "Contact"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.saveEnquiry = function (detail) {
        // detail.productName = $scope.productId.name;
        // detail.image = $scope.bigImage;

        NavigationService.callApiWithData("ContactUs/save", detail, function (data) {
            $scope.submitmsg = data.data;
            console.log("submit",$scope.submitmsg)
            detail.firstName = "";
            detail.lastName = "";
            detail.contactNumber = "";
            detail.message = "";
            // detail.productName = "";
            // detail.image = "";
           
        })
    }

    $scope.allDivisions = function () {
        allDivisions = $uibModal.open({
            templateUrl: "views/modal/alldivisions.html",
            size: "md",
            scope: $scope
        });
    };

    $scope.closepopup = function () {
        $.jStorage.set('popNot', false);
        allDivisions.close();
        $state.reload()
    };

    // var pdf = new jsPDF();
    // var img = new Image;
    // img.onload = function() {
    //     pdf.addImage(this, 500, 500);
    //     pdf.save("test.pdf");
    // };
    // img.crossOrigin = "";  // for demo as we are at different origin than image
    // img.src = "../../img/contact/Contact-page.jpg";  // some random imgur image

    // function getBase64Image(url) {
        
    //     // alert(url);
    //     var canvas = document.createElement('canvas');
    //     var context = canvas.getContext('2d');
    //     var img = new Image();
    //     img.src = url;
    //     img.style.height ="181px";
    //     img.style.width ="183px";
    //     //img.crossOrigin ="Anonymous";
        
    //     context.drawImage(img,0,0);
        
    //     var dataURL = canvas.toDataURL("image/png");
    //     // alert(dataURL);
    //     document.body.appendChild(img);
        
        
    //     var doc = new jsPDF('landscape');
        
    //     doc.addImage(img,'PNG',0,0,50,50);
    //     doc.save('Saved.pdf');
        
    //      }
        
    //     getBase64Image("http://galaapi.wohlig.co.in/api/upload/readFile?file=59edc1abd77a1b3b59726684.jpg");
$scope.pdf = function() {
    window.open('http://galagroup.in/divisioncontact', 'test'); 
    function getBase64Image() {
        var img = new Image();
        var dataURL;
    
        img.src = "../../img/contact/Contact-page.jpg";
        img.crossOrigin = "";  
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
    
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0);
    
            dataURL = canvas.toDataURL('image/jpeg');
            var doc = new jsPDF();
            doc.addImage(dataURL, "JPEG", 15, 15,180, 240); 
            doc.save("All Divisions Contact Details.pdf");
            // return dataURL;   /* MOVED */
        }
    } 
       getBase64Image();
}
  
    
})

.controller('DivisioncontactCtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/divisionscontact.html");
    TemplateService.title = "divisionscontact"; //This is the Title of the Website
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