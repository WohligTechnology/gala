var schema = new Schema({
   image: {
        type: String
    },
     order: {
        type: Number
    },
      pdf: {
        type: String
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('PdfImageUpload', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "order", "asc"));
var model = {
    getAllPdfData: function (data, callback) {
        PdfImageUpload.find({}).exec(function (err, found) {
           
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                callback(null, found);
            }

        });
    },
};
module.exports = _.assign(module.exports, exports, model);