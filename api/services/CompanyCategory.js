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
      link: {
        type: String,
    },
    noImage: {
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
    },


    getCategoryByOrder: function (data, callback) {
        CompanyCategory.find({
            order: data.order
        }).exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    console.log("Found", found);
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },

    search: function (data, callback) {
        if (data.count) {
            var maxCount = data.count;
        } else {
            var maxCount = Config.maxRow;
        }
        var maxRow = maxCount
        var page = 1;
        if (data.page) {
            page = data.page;
        }
        var field = data.field;
        var options = {
            field: data.field,
            filters: {
                keyword: {
                    fields: ['name'],
                    term: data.keyword
                }
            },
            sort: {
                desc: 'createdAt'
            },
            start: (page - 1) * maxRow,
            count: maxRow
        };
        console.log("sssssssssssss", data);
        var match = {};
        if (!_.isEmpty(data.filter)) {
            match = {
                company: data.filter.company
            }

        } else {
            match = {}

        }
        console.log("match---", match);
        CompanyCategory.find(match)
            .order(options)
            .keyword(options)
            .page(options,
                function (err, found) {

                    if (err) {
                        callback(err, null);
                    } else if (found) {
                        console.log("found", found);
                        callback(null, found);
                    } else {
                        callback("Invalid data", null);
                    }
                });

    },

};
module.exports = _.assign(module.exports, exports, model);