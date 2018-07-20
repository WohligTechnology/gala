myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $state, $stateParams) {

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
            $scope.loaded = true;
        });

        var imagePopup = null;
        // $scope.openpopup = function () {
        //     imagePopup = $uibModal.open({
        //         templateUrl: "views/popupmodal.html",
        //         size: "md",
        //         scope: $scope
        //     });
        // };

        var data = {};
        data.page = 1;
        NavigationService.callApiWithData("Company/getAllCompany", data, function (data) {
            $scope.company = data.data.data;
            $scope.companyData = _.chunk($scope.company, 3);
        });

        $scope.brands = []
        NavigationService.callApiWithData("Company/getAllCompanyWithCategory", data, function (data) {
            $scope.companyCategoryBrands = data.data.data;
            // $scope.Brandchunks = _.chunk($scope.companyCategoryBrands, 4);
            _.forEach($scope.companyCategoryBrands, function (value) {
                _.forEach(value.brands, function (value) {
                    $scope.brands.push(value)
                });
            });
        });

        var abc = _.times(100, function (n) {
            return n;
        });


        var i = 0;
        $scope.buttonClick = function () {
            i++;

        };

        $scope.division = function (comapnyName) {

            var comapnyName = comapnyName.split(' ').join('-');
            $state.go('division', {
                comapnyName: comapnyName
            })
        }

        $scope.closepopup = function () {
            // $.jStorage.set('firstTime', false);
            imagePopup.close();
        };



        //category
        NavigationService.callApi("CompanyCategory/getAllCategory", function (data) {
            $scope.getAllCategory = data.data.data;
            $scope.data = _.groupBy($scope.getAllCategory, 'company.name');
            //  $scope.companyarray  = _.slice($scope.data, 0 , )

            $scope.loaded = true;
        });
        $scope.divisions = function (companyName, categoryName) {
            var categoryName = categoryName.split(' ').join('-');
            var companyName = companyName.split(' ').join('-');
            $state.go('divisions', {
                companyName: companyName,
                categoryName: categoryName
            })
        }

    })



    .controller('allProductCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout, $state) {
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
            $scope.data = _.groupBy($scope.data1, 'company.name');
            $scope.loaded = true;
        });
        $scope.divisions = function (companyName, categoryName) {
            console.log("************************8", companyName, categoryName)
            var categoryName = categoryName.split(' ').join('-');
            var companyName = companyName.split(' ').join('-');
            $state.go('divisions', {
                companyName: companyName,
                categoryName: categoryName
            })
        }
    })

    .controller('DivisionCtrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.getHTML("content/division.html");
        TemplateService.title = "Division"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        $scope.loaded = false;
        var companyName = $stateParams.comapnyName.split('-').join(' ')
        $scope.companyName = {
            // _id: $stateParams.category,
            name: companyName
        };


        // $scope.categoryName = $stateParams.categoryName.split('/');



        NavigationService.callApiWithData("Company/getCompany", $scope.companyName, function (data) {
            if (data.data.value) {
                $scope.company = {}
                $scope.company._id = data.data.data._id
                $scope.banner = data.data.data;
                NavigationService.callApiWithData("CompanyCategory/getAllCategoriesOfCompany", $scope.company, function (data) {
                    $scope.companyBrands = data.data.data[0].company.brandImage;

                    $scope.companyCategory = data.data.data;
                    $scope.companyCategory = _.orderBy($scope.companyCategory, ['order'], ['asc', 'desc'])
                    $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
                    $scope.loaded = true;

                });
            }

        });
        $scope.divisions = function (categoryName) {
            var categoryName = categoryName.split(' ').join('-');
            $state.go('divisions', {
                companyName: $stateParams.comapnyName,
                categoryName: categoryName
            })
        }

    })
    .controller('DownloadCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/download.html");
        TemplateService.title = "download"; //This is the Title of the Website
        $scope.loaded = false;
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.social = "views/template/social.html";
        NavigationService.callApi("PdfImageUpload/getAllPdfData", function (data) {
            $scope.PdfData = data.data.data;
        });

    })

    .controller('Division1Ctrl', function ($rootScope, $scope, $stateParams, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.getHTML("content/division1.html");
        TemplateService.title = "Division1"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.productName = {
            name: $stateParams.productName
        };
        $scope.loaded = false;
        TemplateService.social = "views/template/social.html";
        $scope.product = {
            _id: $stateParams.product
        };
        var companyName = $stateParams.companyName.split('-').join(' ')
        var categoryName = $stateParams.categoryName.split('-').join(' ')
        $scope.companyName = {
            // _id: $stateParams.category,
            name: companyName
        };
        NavigationService.callApiWithData("Company/getCompany", $scope.companyName, function (data) {
            $scope.banner = data.data.data;
            $scope.bannerName = $scope.banner.name.split('/')
            $scope.loaded = true;

        })
        $scope.categoryName = {
            // _id: $stateParams.category,
            name: categoryName
        };
        NavigationService.callApiWithData("CompanyCategory/getCategory", $scope.categoryName, function (data) {
            if (data.data.value == true) {
                $scope.categoryId = {}
                $scope.categoryId._id = data.data.data._id
                NavigationService.callApiWithData("CompanyProduct/getAllProductWithCategory", $scope.categoryId, function (data) {
                    $scope.companyproduct = data.data.data;
                    $scope.companyproductdata = _.chunk($scope.companyproduct, 3);
                    $scope.loaded = true;
                });
                NavigationService.callApiWithData("CompanyProduct/getCompanyOfCategory", $scope.categoryId, function (data) {
                    $scope.companyCategory = data.data.data;
                    $scope.companyCategoryData = _.chunk($scope.companyCategory, 3);
                    $scope.loaded = true;
                });
                NavigationService.callApiWithData("CompanyCategory/getOne", $scope.categoryId, function (data) {
                    $scope.productImage = data.data.data;
                    // $scope.productIdimage = data.data.data.images;
                    // $scope.bigImage = $scope.productId.images[0].bigImage;

                });
            }
        })
        $scope.gallery = function (productName) {
            var productName = productName.split(' ').join('-');
            $state.go('gallery', {
                companyName: $stateParams.companyName,
                productName: productName
            })
        }
        $scope.divisions = function (categoryName) {
            var categoryName = categoryName.split(' ').join('-');
            $state.go('divisions', {
                companyName: $stateParams.companyName,
                categoryName: categoryName
            })
        }
    })


    .controller('GalleryCtrl', function ($stateParams, $state, $scope, TemplateService, NavigationService, $timeout, $uibModal) {

        $scope.template = TemplateService.getHTML("content/gallery.html");
        TemplateService.title = "Gallery"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.loaded = false;
        TemplateService.social = "views/template/social.html";

        var companyName = $stateParams.companyName.split('-').join(' ')
        $scope.companyName = {}
        $scope.companyName.name = companyName


        var productName = $stateParams.productName.split('-').join(' ')
        $scope.productName = {}
        $scope.productName.name = productName
        $scope.bigImage = "";
        NavigationService.callApiWithData("Company/getCompany", $scope.companyName, function (data) {
            if (data.data.value == true) {

                $scope.companyName = data.data.data;
                $scope.loaded = true;
                $scope.company = {
                    _id: data.data.data._id
                };
            }

        })
        $scope.productId = {
            _id: $stateParams.productId
        };

        NavigationService.callApiWithData("CompanyProduct/getProduct", $scope.productName, function (data) {
            if (data.data.value == true) {
                $scope.productId = {}
                $scope.productId._id = data.data.data._id
                // NavigationService.callApiWithData("Company/getCompanyBanner", $scope.company, function (data) {
                //     $scope.companyName = data.data.data;
                // });
                console.log("Product id is", $scope.productId)
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
            }

        })


    })

    .controller('ShowroomCtrl', function ($scope, TemplateService, apiService, NavigationService, $stateParams, $timeout) {
        $scope.template = TemplateService.getHTML("content/showroom.html");
        TemplateService.title = "Showroom"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        NavigationService.callApi("Showroom/getAllShowroom", function (data) {
            $scope.showroom = data.data.data;
        });
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


        $scope.pdf = function () {
            window.open('http://galagroup.in/divisioncontact', 'test');

            function getBase64Image() {
                var img = new Image();
                var dataURL;

                img.src = "../../img/contact/Contact-page.jpg";
                img.crossOrigin = "";
                img.onload = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    var context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);

                    dataURL = canvas.toDataURL('image/jpeg');
                    var doc = new jsPDF();
                    doc.addImage(dataURL, "JPEG", 15, 15, 180, 240);
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