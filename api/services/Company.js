// URLSlugs = require('mongoose-url-slugs');
var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    banner: {
        type: String,
    },
    backgroundBanner: {
        type: String,
    },
    backgroundImage: {
        type: String,
    },
    order: {
        type: Number,
    }
});
// schema.plugin(URLSlugs('name', {
//     field: 'myslug'
// }));

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Company', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, null, null, "order", "asc"));
var model = {
    getAllCompany: function (data, callback) {
        Company.find({}).exec(function (err, found) {
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
    getCompanyBanner: function (data, callback) {
        console.log("data inside product: ", data);
        Company.findOne({
            _id: mongoose.Types.ObjectId(data._id)
            // "myslug": data.myslug
        }).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                console.log("**** inside getCompanyBanner  ******", err);
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