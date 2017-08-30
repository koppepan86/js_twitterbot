'use strict';
var twitter = require('twitter');
var client = require("./accessToken");
var getProfile = require("./getProfile");
var reg = require("./reg");
var sendTweet = require("./sendTweet");

function reaction(text){
    //名前抜出ロジック
    //TODO:
    //まだがばがばなので要修正
    var sliceText = text.slice(text.indexOf(" ") + 1);
    
    //文字列チェック
    if(reg(sliceText) == true){
        //update Name
        console.log("reg true");
        getProfile(updateName, sliceText);
    }else{
        console.log("reg false");
    }
}

module.exports = reaction;




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