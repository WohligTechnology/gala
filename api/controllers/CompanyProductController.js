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
};

module.exports = _.assign(module.exports, controller);