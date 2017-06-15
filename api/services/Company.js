var schema = new Schema({
    name: {
        type: String,
    },
    banner: {
        type: String,
    },
    backgroundBanner: {
        type: String,
    },
    order: {
        type: Number,
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Company', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);