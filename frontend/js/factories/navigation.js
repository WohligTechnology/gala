var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;
myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "HOME",
            classis: "active",
            anchor: "home",
            subnav: []
        }, {
            name: "ABOUT US",
            classis: "active",
            anchor: "aboutUs",
            subnav: []
        }, {
            name: "DIVISION",
            classis: "active",
            anchor: "division",
            subnav: [{
                name: "uro Veneer World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Wood & Mouldings",
                classis: "active",
                anchor: "home"
            }, {
                name: "Mahaveer Corporation",
                classis: "active",
                anchor: "home"
            }, {
                name: "Euro Ceramic World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Euro Hardware World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Euro Flooring(p) LTD",
                classis: "active",
                anchor: "home"
            }, {
                name: "Euro Lighting World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Bath World",
                classis: "active",
                anchor: "home"
            }, {
                name: "vridhi Woods",
                classis: "active",
                anchor: "home"
            }, {
                name: "Drapes World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Hafele & Blum",
                classis: "active",
                anchor: "home"
            }, {
                name: "Stone World",
                classis: "active",
                anchor: "home"
            }, {
                name: "Gala Furniture World",
                classis: "active",
                anchor: "home"
            }]
        }, {
            name: "GALLERY",
            classis: "active",
            anchor: "gallery",
            subnav: []
        }, {
            name: "CONTACT",
            classis: "active",
            anchor: "contact",
            subnav: []
        }
        , {
            name: "Form",
            classis: "active",
            anchor: "form",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
        callApiWithData: function (url, data, callback) {
            $http.post(adminurl + url, data).then(function (data) {
                console.log(data);
                callback(data);
            });
        },
        callApi: function (url, callback) {
            console.log("data", url)
            $http.post(adminurl + url).then(function (data) {
                callback(data);
            });
        }
    };
});