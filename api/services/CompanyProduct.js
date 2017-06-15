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
    description: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    images: [{
        image: {
            type: String,
            required: true
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
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('CompanyProduct', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "companyCategory", "companyCategory"));
var model = {};
module.exports = _.assign(module.exports, exports, model);