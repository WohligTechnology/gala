myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";
    $scope.mySlides = [
        '../img/homenew/banner2.jpg',
        '../img/homenew/banner3.jpg',
        '../img/homenew/banner4.jpg',
        '../img/homenew/banner5.jpg',
        '../img/homenew/banner6.jpg'
    ];

    $scope.category = [{
        name: "uro veener world",
        id: "uroveenerworld",
        url: "img/homenew/1.jpg"

    }, {
        name: "wood & mouldings",
        id: "woodmouldings",
        url: "img/homenew/2.jpg"
    }, {
        name: " bath world",
        id: "bathworld",
        url: "img/homenew/3.jpg"
    }, {
        name: " gala hardware worlds",
        id: "galahardwareworlds",
        url: "img/homenew/4.jpg"
    }, {
        name: " gala stone worlds",
        id: "galastoneworlds",
        url: "img/homenew/5.jpg"
    }, {
        name: " gala furniture worlds",
        id: "galafurnitureworlds",
        url: "img/homenew/6.jpg"
    }, {
        name: "euro lighting world",
        id: "eurolightingworld",
        url: "img/homenew/7.jpg"
    }, {
        name: "gala drapes world",
        id: "galadrapesworld",
        url: "img/homenew/8.jpg"
    }, {
        name: "gala kitchen world",
        id: "galakitchenworld",
        url: "img/homenew/9.jpg"
    }, {

    }, {
        name: "mahavir corporation (India)",
        id: "mahavircorporation",
        url: "img/homenew/10.jpg"
    }, {

    }];

    //chunk//
    $scope.homecategory = _.chunk($scope.category, 3);

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

.controller('DivisionCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/division.html");
    TemplateService.title = "Division"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";

    //world//
    $scope.uroveenerworld = [{
        name: "Alabaster & MDF",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Designer Charcoal",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Designer Laminates",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Exclusive veener",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Panels & Acrylam",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Plywood",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    // woodmouldings
    $scope.woodmouldings = [{
            name: "Door",
            bannerImg: "img/",
            bgImg: "img/"
        }, {
            name: "Dupont Corian",
            bannerImg: "img/",
            bgImg: "img/"
        }, {
            name: " Exterior Cladding",
            bannerImg: "img/",
            bgImg: "img/"
        }, {
            name: " Wallpaper",
            bannerImg: "img/",
            bgImg: "img/"
        }, {
            name: " Decking",
            bannerImg: "img/",
            bgImg: "img/"
        }]
        //bathworld
    $scope.bathworld = [{
        name: "CP Fittings",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Faucets",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Flooring Tiles",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Kitchen Sinks",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Sanitary ware",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Wall Tiles",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //galahardwareworlds

    $scope.galahardwareworlds = [{
        name: "Bathroom Acce",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Cabinet Handles & Locks",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Designer Hardware",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Glass Fittings",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " SS Railings",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //galastoneworlds

    $scope.galastoneworlds = [{
        name: "Exclusive Temple Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Flex Stone Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Metal Series Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Natural Stone Cladding Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Odyssey Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "  ORVI Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "  Wash Basin and Pebbles Collection",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //galafurnitureworlds

    $scope.galafurnitureworlds = [{
        name: "Accessories & Carpets",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Coffee Table",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Dining Tables",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Fabric Sofas",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Luxury Sofas",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "  Out Door",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "  Recliner Sofas",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //eurolightingworld

    $scope.eurolightingworld = [{
        name: "Ceiling Fans",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Decoratives",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Designer Lights",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Light Fixtures",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //galadrapesworld
    $scope.galadrapesworld = [{
        name: "Blinds",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Carpets Door mats and Runners",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Curtains",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Home Linen & Accessories",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Mattress",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Upholstery",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //galakitchenworld

    $scope.galakitchenworld = [{
        name: "Appliances",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: "Hobs & Chimneys",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Kitchen & Wardrobe Acce",
        bannerImg: "img/",
        bgImg: "img/"
    }, {
        name: " Sliding Fittings",
        bannerImg: "img/",
        bgImg: "img/"
    }]

    //mahavircorporation

    $scope.mahavircorporation = [{
        name: "Aluminum Composite Panels",
        bannerImg: "img/",
        bgImg: "img/"
    }]
})

.controller('Division1Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/division1.html");
    TemplateService.title = "Division1"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";
})


.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";
    $scope.mySlidess = [
        '../img/product/2.jpg',
        '../img/product/3.jpg',
        '../img/product/4.jpg',
        '../img/product/5.jpg',
        '../img/product/6.jpg',
        '../img/product/7.jpg'
    ];
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