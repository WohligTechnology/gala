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
};

module.exports = _.assign(module.exports, controller);