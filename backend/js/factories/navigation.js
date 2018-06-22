var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http, TemplateService) {

    var navigation = [{
            name: "Users",
            classis: "active",
            sref: "#!/page/viewUser//",
            onlyAdmin: true
        },
        {
            name: "HomeBanner",
            classis: "active",
            sref: "#!/page/viewHomeBanner//",
            onlyAdmin: true
        },
        // {
        //     name: "Config",
        //     classis: "active",
        //     sref: "#!/page/viewConfig//",
        //     onlyAdmin: true
        // },
        {
            name: "Pdf/Image Upload",
            classis: "active",
            sref: "#!/page/viewPdfImageUpload//",
            onlyAdmin: true

        }, {
            name: "Company",
            classis: "active",
            sref: "#!/page/viewCompany//",
            onlyAdmin: true

        }, {
            name: "Company Category",
            classis: "active",
            sref: "#!/page/viewCompanyCategory//"
        },
        {
            name: "Company Product",
            classis: "active",
            sref: "#!/page/viewCompanyProduct//"

        },
        {
            name: "Showroom",
            classis: "active",
            sref: "#!/page/viewShowroom//",
            onlyAdmin: true
        },
        {
            name: "Enquiry Request",
            classis: "active",
            sref: "#!/page/viewContactUs//",
            onlyAdmin: true
        },
        {
            name: "Pop Up Image",
            classis: "active",
            sref: "#!/page/viewPopUpImage//",
            onlyAdmin: true
        },
        {
            name: "Brands Home Page",
            classis: "active",
            sref: "#!/page/viewBrandsHomeImage//",
            onlyAdmin: true
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                console.log("data", data)
                if (data.value === true) {
                    TemplateService.profile = data.data;
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        search: function (url, formData, i, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        apiCall: function (url, formData, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        searchCall: function (url, formData, i, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        // CompanyCategorySearch: function (formData, i, callback) {
        //         $http.post(adminurl + 'CompanyCategory/search', formData).then(function (data) {
        //           data = data.data;
        //           // console.log("data-----------------------------", data);
        //           callback(data, i);
        //         });
        //       },


        api: function (url, formData, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        //for filter//

        companySearch: function (data, formData, i, callback, four) {
            if (!formData) {
                formData = {};
            }
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + 'company/search', formData).then(function (data) {
                data = data.data;
                // console.log("data-----------------------------", data);
                callback(data, i);
            });
        },


        CompanyCategorySearch: function (callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + 'CompanyCategory/search').then(function (data) {
                data = data.data;
                console.log("data-----------------------------", data);
                callback(data);
            });
        },


        CompanyProductSearch: function (callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + 'CompanyProduct/search').then(function (data) {
                data = data.data;
                console.log("data-----------------------------", data);
                callback(data);
            });
        },


        forLogin: function (url, formData, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        userSearch: function (formData, i, callback) {
            formData._accessToken = $.jStorage.get("accessToken");
            $http.post(adminurl + 'User/findAllUsers', formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

    };
});