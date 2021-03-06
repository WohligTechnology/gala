module.exports = function (profile) {
    var req = this.req;
    var res = this.res;
    var sails = req._sails;
    if (_.isEmpty(profile)) {
        res.callback("Error fetching profile in Social Login", profile);
        // res.serverError();
    } else {
        console.log("profileprofileprofileprofileprofile", profile)

        if (req.session.returnUrl) {
            User.existsSocial(profile, function (err, data) {
                console.log("datadatadata", data)
                if (err || !data) {
                    res.callback(err, data);
                } else {
                    console.log("data.accessLevel", data.accessLevel);
                    if (data.accessLevel != "Admin" && data.accessLevel != 'Company') {
                        data.accessToken[0] = "AccessNotAvailable";
                    }
                    res.redirect(req.session.returnUrl + "/" + data.accessToken[0]);
                    req.session.destroy(function () {});
                }
            });
        } else {
            User.existsSocial(profile, res.callback);
        }
    }
};