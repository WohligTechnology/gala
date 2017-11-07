module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getAllProduct: function (req, res) {
        if (req.body) {
            CompanyProduct.getAllProduct(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    
    getAllProductWithCategory: function (req, res) {
        if (req.body) {
            CompanyProduct.getAllProductWithCategory(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    getCompanyOfCategory: function (req, res) {
        if (req.body) {
            CompanyProduct.getCompanyOfCategory(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    getOneProductDetails: function (req, res) {
        if (req.body) {
            CompanyProduct.getOneProductDetails(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    companyProductAggregate: function (req, res) {
        if (req.body) {
            CompanyProduct.companyProductAggregate(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
getProductByOrder: function (req, res) {
        // console.log(req.body);
        if (req.body) {
            CompanyProduct.getProductByOrder(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {

                }
            })
        }
    },



search: function (req, res) {
        if (req.user.accessLevel == "Company" && req.user.acessLevel.company) {
            req.body.filter.company = data.filter.company;
        }

        if (req.body) {
            CompanyProduct.search(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },




};







module.exports = _.assign(module.exports, controller);