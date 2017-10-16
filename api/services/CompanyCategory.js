var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true,
        // excel: {
        //     name: Name
        // }
    },
    order: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        index: true
    }
});

schema.plugin(deepPopulate, {
    Populate: {
        'company': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('CompanyCategory', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "company", "company", "order", "asc"));
var model = {
    getAllCategory: function (data, callback) {
        CompanyCategory.find({}).deepPopulate('company').exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("found in getAllCompany", found);
                callback(null, found);
            }

        });
    },
    getAllCategoriesOfCompany: function (data, callback) {
        console.log("data: ", data);
        CompanyCategory.find({
            company: mongoose.Types.ObjectId(data._id)
        }).deepPopulate('company').lean().exec(function (err, found) {
            if (err) {
                console.log("**** inside getCategoryWithCompany of CompanyCategoryjs ******", err);
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    },


    //To search company category by its name
    searchCompanyCategory: function (data, callback) {
        var trimText = data.searchText.trim();
        var search = new RegExp('^' + trimText);

        var queryString = {
            name: {
                $regex: search,
                $options: "i"
            }
        }

        CompanyCategory.find(queryString).limit(5).exec(function (error, companyCategoryFound) {
            if (error || companyCategoryFound == undefined) {
                console.log("CompanyCategory >>> searchCompanyCategory >>> find  >>> error >>> ", error);
                callback(error, null);
            } else {
                if (!_.isEmpty(companyCategoryFound)) {
                    callback(null, companyCategoryFound);
                } else {
                    callback(null, []);
                }
            }
        });
    }
};


module.exports = _.assign(module.exports, exports, model);