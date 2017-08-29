'use strict';
var twitter = require('twitter');
var client = require("./accessToken");
var sendTweet = require("./sendTweet");
var getProfile = require("./getProfile")
var reg = require("./reg");

// var profile;

var stream = client.stream('statuses/filter',
{ 'track': '@lalalaworldsec' },
function (stream) {
    stream.on('data', function (tweet) {
        /*ツイートの全情報表示ログ */
        

        console.log("get!");
        console.log(tweet["text"]);
        var text = new String(tweet["text"])
        console.log(text);

        //名前抜出ロジック
        var space = text.indexOf(" ");
        text = text.slice(space + 1);
        console.log(text + "2");

        //文字列チェック
        if(reg(text) == true){
            //update Name
            console.log("reg true");
            getProfile(updateName, text);
            
        }
    });

    stream.on('error', function (error) {
        console.log(error);
        // expt(error);
    });
});

module.exports = stream;



function updateName(profile, text){
    console.log("update name");
    profile["name"] = text;
    client.post('account/update_profile',
    { 'name': profile["name"] },
    function (error, tweet, response) {
        if(error){
            sendTweet("@lalalaworld86 名前変えようとしたらエラー出た");
        }else{
            sendTweet("@lalalaworld86 " + profile["name"] + "に名前を変えた！");
        }
    });
}