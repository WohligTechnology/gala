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
var model = {};
module.exports = _.assign(module.exports, exports, model);