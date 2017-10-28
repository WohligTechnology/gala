module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
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
            })
        }
    },


    search: function (req, res) {
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



};

module.exports = _.assign(module.exports, controller);