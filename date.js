//jshint esversion:6

exports.getDate = function() {
    const day = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    return day.toLocaleDateString("en-US",options);

};