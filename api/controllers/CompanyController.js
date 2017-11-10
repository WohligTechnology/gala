module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getAllCompany: function (req, res) {
        if (req.body) {
            Company.getAllCompany(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getCompanyBanner: function (req, res) {
        if (req.body) {
            Company.getCompanyBanner(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    globalSearch: function (req, res) {
        var searchResult = {};
        async.parallel({
            getCompany: function (cb) {
                Company.searchCompany(req.body, function (error, data) {
                    if (error || data == undefined) {
                        console.log("CompanyController >>> gobalSearch >>>  getCompany >>> error >>> ", error);
                        cb(error, null);
                    } else {
                        searchResult.company = data;
                        cb();
                    }
                })
            },
            getCompanyCategories: function (cb) {
                CompanyCategory.searchCompanyCategory(req.body, function (error, data) {
                    if (error || data == undefined) {
                        console.log("CompanyController >>> gobalSearch >>>  searchCompanyCategory >>> error >>> ", error);
                        cb(error, null);
                    } else {
                        searchResult.companyCategory = data;
                        cb();
                    }
                })
            },
            getCompanyProduct: function (cb) {
                CompanyProduct.searchCompanyProducts(req.body, function (error, data) {
                    if (error || data == undefined) {
                        console.log("CompanyController >>> gobalSearch >>>  searchCompanyCategory >>> error >>> ", error);
                        cb(error, null);
                    } else {
                        searchResult.companyProduct = data;
                        cb();
                    }
                })
            }
        }, function (error) {
            if (error) {
                console.log("CompanyController >>> gobalSearch >>> finalError >>> ", error);
                res.callback(error, null);
            } else {
                res.callback(null, searchResult);
            }
        })
    },


findOneCompany: function (req, res) {
        if (req.body) {
            Company.findOneCompany(req.body, res.callback);
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