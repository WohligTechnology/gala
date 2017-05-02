myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.mySlides = [
            '../img/home/banner.jpg',
            '../img/division/banner.jpg',
            '../img/about/banner.jpg',
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };



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