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
    getAllCategoriesOfCompany: function (data, callback) {
        console.log("data: ", data);
        CompanyCategory.find({
            company: mongoose.Types.ObjectId(data._id)
        }).lean().exec(function (err, found) {
            if (err) {
                console.log("**** inside getCategoryWithCompany of CompanyCategoryjs ******", err);
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    }
};


module.exports = _.assign(module.exports, exports, model);