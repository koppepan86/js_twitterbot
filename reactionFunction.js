'use strict';
let twitter = require('twitter');
let client = require("./accessToken");
let getProfile = require("./getProfile");
let reg = require("./reg");
let sendTweet = require("./sendTweet");

function reaction(text){
    //名前抜出ロジック
    //TODO:
    //まだがばがばなので要修正
    let sliceText = text.slice(text.indexOf(" ") + 1);
    
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
            let date = new Date();
            let now = "(" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDay() + "/" + date.getHours() + "/" + date.getMinutes()+ ")";
            sendTweet("@lalalaworld86 " + profile["name"] + "に名前を変えた！" + now);
        }
    });
}