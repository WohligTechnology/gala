myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "HOME",
        classis: "active",
        anchor: "home",
         subnav: []
    }, {
        name: "ABOUT US",
        classis: "active",
        anchor: "about",
        subnav: []
    }, {
        name: "DIVISION",
        classis: "active",
        anchor: "division",
        subnav: []
    }, {
        name: "GALLERY",
        classis: "active",
        anchor: "gallery",
        subnav: []
    }
    , {
        name: "CONTACT",
        classis: "active",
        anchor: "contact",
        subnav: []
    }
    // , {
    //     name: "Form",
    //     classis: "active",
    //     anchor: "form",
    //     subnav: []
    // }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});