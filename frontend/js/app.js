// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'angular-flexslider',
    'ui.swiper'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('division', {
            url: "/division/:category/:categoryName",
            templateUrl: tempateURL,
            controller: 'DivisionCtrl'
        })
        .state('divisions', {
            url: "/divisions/:category/:product",
            // url: "/divisions/:product",
            templateUrl: tempateURL,
            controller: 'Division1Ctrl'
        })
        .state('gallery', {
            url: "/gallery/:category/:productId/",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })

        .state('groupActivities', {
            url: "/groupActivities",
            templateUrl: tempateURL,
            controller: 'GroupActivitiesCtrl'
        })

        .state('showroom', {
            url: "/showroom",
            templateUrl: tempateURL,
            controller: 'ShowroomCtrl'
        })

        .state('faq', {
            url: "/faq",
            templateUrl: tempateURL,
            controller: 'FAQCtrl'
        })
         .state('aboutUs', {
            url: "/aboutus",
            templateUrl: tempateURL,
            controller: 'AboutUsCtrl'
        })
          .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('allProduct', {
            url: "/products",
            templateUrl: tempateURL,
            controller: 'allProductCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});