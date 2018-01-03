var schema = new Schema({
     name: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String
    },
    order: {
        type: Number
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Showroom', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAllShowroom: function (data, callback) {
        Showroom.find({}).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("found in getAllShowroom", found);
                callback(null, found);
            }

        });
    },
};
module.exports = _.assign(module.exports, exports, model);