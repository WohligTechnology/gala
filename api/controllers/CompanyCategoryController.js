module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getCategory: function (req, res) {
        if (req.body) {
            CompanyCategory.getCategory(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
    getAllCategory: function (req, res) {
        if (req.body) {
            CompanyCategory.getAllCategory(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    getAllCategoriesOfCompany: function (req, res) {
        if (req.body) {
            CompanyCategory.getAllCategoriesOfCompany(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },

    getCategoryByOrder: function (req, res) {
        // console.log(req.body);
        if (req.body) {
            CompanyCategory.getCategoryByOrder(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {

                }
            });
        }
    },


    search: function (req, res) {
        console.log("req.user.company", req.user);
        if (req.user.accessLevel == "Company" && req.user.company) {
            req.body.filter.company = req.user.company;
        }
        if (req.body) {
            CompanyCategory.search(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            });
        }
    },

    searchForDropDown: function (req, res) {
        // console.log(req.body);
        if (req.body) {
            CompanyCategory.searchForDropDown(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {

                }
            });
        }
    },
};

module.exports = _.assign(module.exports, controller);