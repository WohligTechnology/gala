var schema = new Schema({
    brandImage: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('BrandsHomeImage', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    getAllData: function (data, callback) {
        BrandsHomeImage.find({}).exec(function (err, found) {
            // console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in getAllCompany", found);
                callback(null, found);
            }

        });
    },
};
module.exports = _.assign(module.exports, exports, model);