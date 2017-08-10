var schema = new Schema({
    name: {
        type: String,

    },
    description: {
        type: String,
        required: true
    },
    order: {
        type: Number,

    },
    images: [{
        bigImage: {
            type: String,

        },
        smallImage: {
            type: String,
        }
    }],
    companyCategory: {
        type: Schema.Types.ObjectId,
        ref: 'CompanyCategory',
        index: true
    },
    enquiry: [{
        subject: {
            type: String
        },
        enquiry: {
            type: String
        }
    }]
});

schema.plugin(deepPopulate, {
    Populate: {
        'companyCategory': {
            select: ''
        },
        'companyCategory.company': {
            select: ''
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('CompanyProduct', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "companyCategory companyCategory.company", "companyCategory companyCategory.company", "createdAt", "desc"));
var model = {
    getAllProduct: function (data, callback) {
        CompanyProduct.find({}).deepPopulate('companyCategory companyCategory.company')
            .exec(function (err, found) {
                console.log("Found: ", found);
                if (err) {
                    callback(err, null);
                } else if (_.isEmpty(found)) {
                    callback(null, "noDataound");
                } else {
                    console.log("found in getAllProduct", found);
                    callback(null, found);
                }

            });
    },
    getCompanyOfCategory: function (data, callback) {
        CompanyCategory.findOne({
            _id: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, category) {
            if (!_.isEmpty(category)) {
                console.log("Category: ", category);
                var input = {};
                input._id = category.company;

                CompanyCategory.getAllCategoriesOfCompany(input, callback);
            }
        });
    },

    getAllProductWithCategory: function (data, callback) {
        console.log("data inside product: ", data);
        CompanyProduct.find({
            companyCategory: mongoose.Types.ObjectId(data._id)
        }).sort({
            'order': 1
        }).lean().exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                console.log("**** inside getAllProductWithCategory of CompanyProduct ******", err);
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    },


    getOneProductDetails: function (data, callback) {
        console.log("data inside productDetail : ", data);
        CompanyProduct.findOne({
            _id: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                console.log("**** inside getOneProductDetails description  ******", err);
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("**** inside getOneProductDetails description  ******", found);
                callback(null, found);
            }

        });
    }
};
module.exports = _.assign(module.exports, exports, model);