var mongoose = require("mongoose");
var Schema = mongoose.Schema;


mongoose.connect("mongodb://138.68.188.190/longUrl");


var urlSchema = new Schema({
    url: String,
    localHost: {type: String, default: 'localhost:3000/'},
    randNum: {type: Number, default: function() {
        return Math.floor(Math.random()*90000) + 10000
    }}
});

var url = mongoose.model("url", urlSchema);



module.exports = {
    url: url
};
