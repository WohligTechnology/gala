var schema = new Schema({
    name: {
        type: String,
        required: true,
        excel: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: validators.isEmail()
    },
    dob: {
        type: Date,
        excel: {
            name: "Birthday",
            modify: function (val, data) {
                return moment(val).format("MMM DD YYYY");
            }
        }
    },
    photo: {
        type: String,
        default: "",
        excel: [{
            name: "Photo Val"
        }, {
            name: "Photo String",
            modify: function (val, data) {
                return "http://abc/" + val;
            }
        }, {
            name: "Photo Kebab",
            modify: function (val, data) {
                return data.name + " " + moment(data.dob).format("MMM DD YYYY");
            }
        }]
    },
    password: {
        type: String,
        default: ""
    },

    mobile: {
        type: String,
        default: ""
    },

    googleAccessToken: String,
    googleRefreshToken: String,
    oauthLogin: {
        type: [{
            socialId: String,
            socialProvider: String
        }],
        index: true
    },
    accessLevel: {
        type: String,
        default: "User",
        enum: ['User', 'Admin']
    }
});

schema.plugin(deepPopulate, {
    populate: {
        'user': {
            select: 'name _id'
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('User', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "user", "user"));
var model = {
    registerAppuser: function (data, callback) {
        var User = this(data);

        User.password = md5(User.password); //Apply md5 encryption algo to password and store it in database

        //To save record in database
        User.save(function (err, created) {
            if (err) {
                callback(err, null);
            } else if (created) { //Record created successfully
                callback(null, created);
            } else {
                callback({
                    message: "Unable to register"
                }, null);
            }
        });
    },
    userLogin: function (userData, callback) {
        User.findOne({
            email: userData.email,
            password: md5(userData.password)
        }).exec(function (err, data) {
            if (err) {
                console.log("err: ", err);
                callback(err, null);
            } else if (data) {
                if (!_.isEmpty(data)) {

                    console.log("data: ", data);
                    callback(null, data);
                } else {
                    callback(null, {});
                }
            } else {
                console.log("Big mistake");
                callback({
                    message: {
                        data: "Something terrible happened! Please contact administrator"
                    }
                }, null);
            }
        })
    },
    existsSocial: function (user, callback) {
        var Model = this;
        Model.findOne({
            "oauthLogin.socialId": user.id,
            "oauthLogin.socialProvider": user.provider,
        }).exec(function (err, data) {
            if (err) {
                callback(err, data);
            } else if (_.isEmpty(data)) {
                var modelUser = {
                    name: user.displayName,
                    accessToken: [uid(16)],
                    oauthLogin: [{
                        socialId: user.id,
                        socialProvider: user.provider,
                    }]
                };
                if (user.emails && user.emails.length > 0) {
                    modelUser.email = user.emails[0].value;
                    var envEmailIndex = _.indexOf(env.emails, modelUser.email);
                    if (envEmailIndex >= 0) {
                        modelUser.accessLevel = "Admin";
                    }
                }
                modelUser.googleAccessToken = user.googleAccessToken;
                modelUser.googleRefreshToken = user.googleRefreshToken;
                if (user.image && user.image.url) {
                    modelUser.photo = user.image.url;
                }
                Model.saveData(modelUser, function (err, data2) {
                    if (err) {
                        callback(err, data2);
                    } else {
                        data3 = data2.toObject();
                        delete data3.oauthLogin;
                        delete data3.password;
                        delete data3.forgotPassword;
                        delete data3.otp;
                        callback(err, data3);
                    }
                });
            } else {
                delete data.oauthLogin;
                delete data.password;
                delete data.forgotPassword;
                delete data.otp;
                data.googleAccessToken = user.googleAccessToken;
                data.save(function () {});
                callback(err, data);
            }
        });
    },

    updateAccessToken: function (id, accessToken) {
        User.findOne({
            "_id": id
        }).exec(function (err, data) {
            data.googleAccessToken = accessToken;
            data.save(function () {});
        });
    }

};
module.exports = _.assign(module.exports, exports, model);