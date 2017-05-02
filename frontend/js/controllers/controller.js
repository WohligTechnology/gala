myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.mySlides = [
          '../img/home/banner2.jpg',
            '../img/home/banner3.jpg',
            '../img/home/banner4.jpg',
            '../img/home/banner5.jpg',
            '../img/home/banner6.jpg'
        ];

        $scope.mySlidess=[
            '../img/product/2.jpg',
            '../img/product/3.jpg',
            '../img/product/4.jpg',
            '../img/product/5.jpg',
            '../img/product/6.jpg'  
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };


$scope.openModal = function() {
        var modalInstance = $uibModal.open({
                animation: true,
                scope: $scope,
                // size: 'sm',
                windowClass: 'eddy-modal',
                templateUrl: "views/modal/welcome.html"
            });
};
            
$scope.openModal();


    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

        .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/about.html");
        TemplateService.title = "About Us"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
    })

          .controller('DivisionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/division.html");
        TemplateService.title = "Division"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
    })


       .controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/gallery.html");
        TemplateService.title = "Gallery"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
//         $(window).load(function() {
//   // The slider being synced must be initialized first
//   $('#carousel').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: false,
//     slideshow: false,
//     itemWidth: 210,
//     itemMargin: 5,
//     asNavFor: '#carousel'
//   });
 
//   $('#slider').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: false,
//     slideshow: false,
//     sync: "#carousel"
//   });
// });
    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });