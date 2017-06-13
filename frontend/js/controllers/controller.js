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
        name: "mahavir corporation (India)",
        id: "mahavircorporation",
        url: "img/homenew/10.jpg"
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

.controller('DivisionCtrl', function ($scope, $stateParams, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.getHTML("content/division.html");
    TemplateService.title = "Division"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.social = "views/template/social.html";



    $scope.category = $stateParams.category;
    console.log("cat", $scope.category);
    //world//
    $scope.subcategoryAll = [{
        name: "Alabaster & MDF",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/AlabasterMDF.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: "Designer Charcoal",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/DesignerCharcoal.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: " Designer Laminates",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/Exclusiveveener.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: " Exclusive veener",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/PanelsAcrylam.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: " Panels & Acrylam",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/DesignerLaminates.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: " Plywood",
        bannerImg: "img/divisions/banner/Uroveneerworld.jpg",
        smallerImg: "img/divisions/categories/UroVeneerWorld/Plywood.jpg",
        bgImg: "img/divisions/bg/Uroveneerworld.jpg",
        category: "uroveenerworld"
    }, {
        name: "Door",
        bannerImg: "img/divisions/banner/WoodMouldings.jpg",
        smallerImg: "img/divisions/categories/WoodMouldings/1.jpg",
        bgImg: "img/divisions/bg/WoodMouldings.jpg",
        category: "woodmouldings"
    }, {
        name: "Dupont Corian",
        bannerImg: "img/divisions/banner/WoodMouldings.jpg",
        smallerImg: "img/divisions/categories/WoodMouldings/2.jpg",
        bgImg: "img/divisions/bg/WoodMouldings.jpg",
        category: "woodmouldings"
    }, {
        name: " Exterior Cladding",
        bannerImg: "img/divisions/banner/WoodMouldings.jpg",
        smallerImg: "img/divisions/categories/WoodMouldings/3.jpg",
        bgImg: "img/divisions/bg/WoodMouldings.jpg",
        category: "woodmouldings"
    }, {
        name: " Wallpaper",
        bannerImg: "img/divisions/banner/WoodMouldings.jpg",
        smallerImg: "img/divisions/categories/WoodMouldings/4.jpg",
        bgImg: "img/divisions/bg/WoodMouldings.jpg",
        category: "woodmouldings"
    }, {
        name: " Decking",
        bannerImg: "img/divisions/banner/WoodMouldings.jpg",
        smallerImg: "img/divisions/categories/WoodMouldings/5.jpg",
        bgImg: "img/divisions/bg/WoodMouldings.jpg",
        category: "woodmouldings"
    }, {
        name: "CP Fittings",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/CPFittings.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Faucets",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/Faucets.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Flooring Tiles",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/FlooringTiles.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Kitchen Sinks",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/KitchenSinks.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Sanitary ware",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/Sanitaryware.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Wall Tiles",
        bannerImg: "img/divisions/banner/Bathworld.jpg",
        smallerImg: "img/divisions/categories/BathWorld/WallTiles.jpg",
        bgImg: "img/divisions/bg/Bathworld.jpg",
        category: "bathworld"
    }, {
        name: "Bathroom Acce",
        bannerImg: "img/divisions/banner/Galahardwareworld.jpg",
        smallerImg: "img/divisions/categories/GalaHardwareWorld/BathroomAcce.jpg",
        bgImg: "img/divisions/bg/Galahardwareworld.jpg",
        category: "galahardwareworlds"
    }, {
        name: "Cabinet Handles & Locks",
        bannerImg: "img/divisions/banner/Galahardwareworld.jpg",
        smallerImg: "img/divisions/categories/GalaHardwareWorld/CabinetHandlesLocks.jpg",
        bgImg: "img/divisions/bg/Galahardwareworld.jpg",
        category: "galahardwareworlds"
    }, {
        name: "Designer Hardware",
        bannerImg: "img/divisions/banner/Galahardwareworld.jpg",
        smallerImg: "img/divisions/categories/GalaHardwareWorld/DesignerHardware.jpg",
        bgImg: "img/divisions/bg/Galahardwareworld.jpg",
        category: "galahardwareworlds"
    }, {
        name: "Glass Fittings",
        bannerImg: "img/divisions/banner/Galahardwareworld.jpg",
        smallerImg: "img/divisions/categories/GalaHardwareWorld/GlassFittings.jpg",
        bgImg: "img/divisions/bg/Galahardwareworld.jpg",
        category: "galahardwareworlds"
    }, {
        name: "SS Railings",
        bannerImg: "img/divisions/banner/Galahardwareworld.jpg",
        smallerImg: "img/divisions/categories/GalaHardwareWorld/SSRailings.jpg",
        bgImg: "img/divisions/bg/Galahardwareworld.jpg",
        category: "galahardwareworlds"
    }, {
        name: "Exclusive Temple Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/ExclusiveTempleCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Flex Stone Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/FlexStoneCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Metal Series Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/MetalSeriesCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Natural Stone Cladding Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/NaturalStoneCladdingCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Odyssey Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/OdysseyCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "ORVI Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/ORVICollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Wash Basin and Pebbles Collection",
        bannerImg: "img/divisions/banner/Galastoneworld.jpg",
        bgImg: "img/divisions/bg/Galastoneworld.jpg",
        smallerImg: "img/divisions/categories/GalaStoneWorld/WashBasinPebblesCollection.jpg",
        category: "galastoneworlds"
    }, {
        name: "Accessories & Carpets",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/AccessoriesCarpets.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Coffee Table",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/CoffeeTable.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Dining Tables",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/DiningTables.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Fabric Sofas",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/Fabric Sofas.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Luxury Sofas",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/LuxurySofas.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Out Door",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/OutDoor.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Recliner Sofas",
        bannerImg: "img/divisions/banner/GalaFurnitureworld.jpg",
        bgImg: "img/divisions/bg/GalaFurnitureworld.jpg",
        smallerImg: "img/divisions/categories/GalaFurnitureWorld/ReclinerSofas.jpg",
        category: "galafurnitureworlds"
    }, {
        name: "Ceiling Fans",
        bannerImg: "img/divisions/banner/Eurolightingworld.jpg",
        bgImg: "img/divisions/bg/Eurolightingworld.jpg",
        smallerImg: "img/divisions/categories/EuroLightingWorld/CeilingFans.jpg",
        category: "eurolightingworld"
    }, {
        name: "Decoratives",
        bannerImg: "img/divisions/banner/Eurolightingworld.jpg",
        bgImg: "img/divisions/bg/Eurolightingworld.jpg",
        smallerImg: "img/divisions/categories/EuroLightingWorld/Decoratives.jpg",
        category: "eurolightingworld"
    }, {
        name: "Designer Lights",
        bannerImg: "img/divisions/banner/Eurolightingworld.jpg",
        bgImg: "img/divisions/bg/Eurolightingworld.jpg",
        smallerImg: "img/divisions/categories/EuroLightingWorld/DesignerLights.jpg",
        category: "eurolightingworld"
    }, {
        name: "Light Fixtures",
        bannerImg: "img/divisions/banner/Eurolightingworld.jpg",
        bgImg: "img/divisions/bg/Eurolightingworld.jpg",
        smallerImg: "img/divisions/categories/EuroLightingWorld/LightFixtures.jpg",
        category: "eurolightingworld"
    }, {
        name: "Blinds",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/Blinds.jpg",
        category: "galadrapesworld"
    }, {
        name: "Carpets Door mats and Runners",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/CarpetsDoormatsRunners.jpg",
        category: "galadrapesworld"
    }, {
        name: "Curtains",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/Curtains.jpg",
        category: "galadrapesworld"
    }, {
        name: "Home Linen & Accessories",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/HomeLinenAccessories.jpg",
        category: "galadrapesworld"
    }, {
        name: "Mattress",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/Mattress.jpg",
        category: "galadrapesworld"
    }, {
        name: "Upholstery",
        bannerImg: "img/divisions/banner/Galacurtainworld.jpg",
        bgImg: "img/divisions/bg/Galacurtainworld.jpg",
        smallerImg: "img/divisions/categories/GalaCurtainWorld/Upholstery.jpg",
        category: "galadrapesworld"
    }, {
        name: "Appliances",
        bannerImg: "img/",
        bgImg: "img/",
        smallerImg: "img/divisions/categories/GalaKitchenWorld/Appliances.jpg",
        category: "galakitchenworld"
    }, {
        name: "Hobs & Chimneys",
        bannerImg: "img/",
        bgImg: "img/",
        smallerImg: "img/divisions/categories/GalaKitchenWorld/HobsChimneys.jpg",
        category: "galakitchenworld"
    }, {
        name: " Kitchen & Wardrobe Acce",
        bannerImg: "img/",
        bgImg: "img/",
        smallerImg: "img/divisions/categories/GalaKitchenWorld/KitchenWardrobeAcce.jpg",
        category: "galakitchenworld"
    }, {
        name: " Sliding Fittings",
        bannerImg: "img/",
        bgImg: "img/",
        smallerImg: "img/divisions/categories/GalaKitchenWorld/SlidingFittings.jpg",
        category: "galakitchenworld"
    }, {
        name: "Aluminum Composite Panels",
        bannerImg: "img/divisions/banner/Mahaveercorporation.jpg",
        bgImg: "img/divisions/bg/Mahaveercorporation.jpg",
        smallerImg: "img/divisions/categories/MahaveerCorporation/AluminumCompositePanels.jpg",
        category: "mahavircorporation"
    }];
    $scope.subcategory = _.filter($scope.subcategoryAll, function (o) {
        return o.category == $scope.category;
    });
    //chunk//
    $scope.subcategoryBig = _.chunk($scope.subcategory, 3);
    console.log("$scope.subcategory ", $scope.subcategory);
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

})

//Example API Controller
.controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
    apiService.getDemo($scope.formData, function (data) {
        console.log(data);
    });
});