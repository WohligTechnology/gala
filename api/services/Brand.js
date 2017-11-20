// URLSlugs = require('mongoose-url-slugs');
var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
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
module.exports = mongoose.model('Brand', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, null, null, "order", "asc"));
var model = {
    getAllBrand: function (data, callback) {
        Brand.find({}).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("found in getAllBrand", found);
                callback(null, found);
            }

        });
    }

};
module.exports = _.assign(module.exports, exports, model);