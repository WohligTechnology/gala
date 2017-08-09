var schema = new Schema({
    image: {
        type: String,
        // excel: {
        //     name: Name
        // }
    },
    order: {
        type: Number
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('HomeBanner', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "order", "asc"));
var model = {
    getAllBanner: function (data, callback) {
        HomeBanner.find({}).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("found in HomeBanner", found);
                callback(null, found);
            }

        });
    },
};
module.exports = _.assign(module.exports, exports, model);