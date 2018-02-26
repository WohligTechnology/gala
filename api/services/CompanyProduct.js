var objectId = require("mongodb").ObjectID;
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
      urlLink: {
        type: String,
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
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        index: true
    }, //filter

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
        // 'companyCategory.company': {
        //     select: ''
        // },
        'company': {
            select: '_id name'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('CompanyProduct', schema);

// var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "companyCategory companyCategory.company", "companyCategory companyCategory.company","company", "company","createdAt", "desc"));


var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "company", "company", "companyCategory", "companyCategory", "createdAt", "desc"));


var model = {
       getProduct: function (data, callback) {
        console.log("data inside comapny: ", data);
        CompanyProduct.findOne({
            name: data.name
            // "myslug": data.myslug
        }).exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }
        });
    },
    getAllProduct: function (data, callback) {
        CompanyProduct.find({}).deepPopulate('companyCategory companyCategory.company')
            .exec(function (err, found) {
                console.log("Found: ", found);
                if (err) {
                    callback(err, null);
                } else if (_.isEmpty(found)) {
                    callback(null, "noDataound");
                } else {
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
        CompanyProduct.find({
            companyCategory: mongoose.Types.ObjectId(data._id)
        }).sort({
            'order': 1
        }).lean().exec(function (err, found) {
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    },

    getOneProductDetails: function (data, callback) {
        CompanyProduct.findOne({
            _id: mongoose.Types.ObjectId(data._id)
        }).exec(function (err, found) {
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    },

    //To search company products by its name
    searchCompanyProducts: function (data, callback) {
        var trimText = data.searchText.trim();
        var search = new RegExp('^' + trimText);

        var queryString = {
            name: {
                $regex: search,
                $options: "i"
            }
        }

        CompanyProduct.find(queryString).deepPopulate('companyCategory.company').limit(5).exec(function (error, companyProductFound) {
            if (error || companyProductFound == undefined) {
                callback(error, null);
            } else {
                if (!_.isEmpty(companyProductFound)) {
                    callback(null, companyProductFound);
                } else {
                    callback(null, []);
                }
            }
        });
    },

    companyProductAggregate: function (data, callback) {
        var page = 1;
        if (data.page) {
            page = data.page
        }
        var pagestartfrom = (page - 1) * 10;

        async.parallel({
                results: function (callback) {
                    CompanyProduct.aggregate([{
                        $lookup: {
                            "from": "companycategories",
                            "localField": "companyCategory",
                            "foreignField": "_id",
                            "as": "companyCategory"
                        }
                    }, {
                        $unwind: {
                            path: "$companyCategory",
                        }
                    }, {
                        $match: {
                            "companyCategory.company": objectId(data.company)
                        }
                    }, {
                        $skip: parseInt(pagestartfrom)
                    }, {
                        $limit: 10
                    }], function (err, res) {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, res);
                        }
                    })
                },
                total: function (callback) {
                    CompanyProduct.aggregate([{
                            $lookup: {
                                "from": "companycategories",
                                "localField": "companyCategory",
                                "foreignField": "_id",
                                "as": "companyCategory"
                            }
                        }, {
                            $unwind: {
                                path: "$companyCategory",
                            }
                        }, {
                            $match: {
                                "companyCategory.company": objectId(data.company)
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                count: {
                                    $sum: 1
                                }
                            }
                        }, {
                            $project: {
                                "_id": 1,
                                "count": 1
                            }
                        }
                    ], function (err, res) {
                        if (err) {
                            callback(err, null);
                        } else {

                            callback(null, res);
                        }
                    })
                }
            },
            function (err, res) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, res);
                }
            });

    },

    getProductByOrder: function (data, callback) {
        CompanyProduct.find({
            order: data.order
        }).exec(function (err, found) {

            if (err) {

                callback(err, null);
            } else {

                if (found) {
                    callback(null, found);
                } else {
                    callback(null, {
                        message: "No Data Found"
                    });
                }
            }
        })
    },
    //     search:function (data, callback){
    //        if (data.count) {
    //            var maxCount = data.count;
    //        } else {
    //            var maxCount = Config.maxRow;
    //        }
    //        var maxRow = maxCount
    //        var page = 1;
    //        if (data.page) {
    //            page = data.page;
    //        }
    //        var field = data.field;
    //        var options = {
    //            field: data.field,
    //            filters: {
    //                keyword: {
    //                    fields: ['name'],
    //                    term: data.keyword
    //                }
    //            },
    //            sort: {
    //                desc: 'createdAt'
    //            },
    //            start: (page - 1) * maxRow,
    //            count: maxRow
    //        };
    //        var match={};
    //        if(data.company){
    //            console.log("if");
    //                       match={company: data.company}
    //        }else{
    //            console.log("else");
    //                   match={}
    //        }
    //        console.log("match---",match);
    //        CompanyProduct.find(match)
    //            .order(options)
    //            .keyword(options)
    //            .page(options,
    //                function (err, found) {

    //                    if (err) {
    //                        callback(err, null);
    //                    } else if (found) {
    //                        callback(null, found);
    //                    } else {
    //                        callback("Invalid data", null);
    //                    }
    //                });

    // },

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


        var match = {};
        if (!_.isEmpty(data.filter)) {
            match = {
                company: data.filter.company
            }

        } else {
            match = {}

        }
        CompanyProduct.find(match)
            .order(options)
            .keyword(options)
            .page(options,
                function (err, found) {
                    if (err) {
                        callback(err, null);
                    } else if (found) {
                        callback(null, found);
                    } else {
                        callback("Invalid data", null);
                    }
                });

    }
};
module.exports = _.assign(module.exports, exports, model);