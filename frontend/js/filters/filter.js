// JavaScript Document
myApp.filter('myFilter', function () {
        // In the return function, we must pass in a single parameter which will be the data we will work on.
        // We have the ability to support multiple other parameters that can be passed into the filter optionally
        return function (input, optional1, optional2) {

            var output;

            // Do filter work here
            return output;
        };
    })
    .filter('serverimage', function () {
        return function (input, width, height, style) {
            if (input) {
                if (input.substr(0, 4) == "http") {
                    return input;
                } else {
                    image = imgpath + "?file=" + input;
                    if (width) {
                        image += "&width=" + width;
                    }
                    if (height) {
                        image += "&height=" + height;
                    }
                    if (style) {
                        image += "&style=" + style;
                    }
                    return image;
                }

            } else {
                return "img/D-SMALL.jpg";
            }
        };
    });