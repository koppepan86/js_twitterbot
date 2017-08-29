var twitter = require('twitter');
var client = require("./accessToken");


//非同期処理わからんから、コールバックで無理やりユーザー情報を渡す関数
function getProfile(func, text){
    console.log("get profile");
    
    var async = client.get('account/settings',
    {},
    function (error, tweets, response) {
        if(error) throw error;
        // if(tweets) console.log(tweets);
        func(tweets, text);
    });
}

function setProfile(profile, tweets){
    profile = tweets;
}

module.exports = getProfile;