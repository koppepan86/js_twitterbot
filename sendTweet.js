'use strict';
var twitter = require('twitter');
var client = require("./accessToken");

//ツイート処理
function sendTweet(text) {
    console.log("send mode");
    
    client.post('statuses/update', { status: text })
        .then(function (tweet) {
            console.log(tweet);
        })
        .catch(function (error) {
            //Error 
            //Case 187
            if(error[0]["code"] == "187"){
                //重複時の処理
                client.post('statuses/update', { status: "@lalalaworld86" + " 重複エラー発生" })
                .then(function (tweet) {
                    console.log(tweet);
                })
                .catch(function (error) {
                    //重複ツイート送信エラー　多分あり得ない？
                    //出たら普通にエラーは貸せる
                    if(error[0]["code"] == "187"){
                        //更に重複時の処理
                    }
                    expt(error);
                    throw error;
                    exit();
                })
            }
            // expt(error);
            // throw error;
        })
}

module.exports = sendTweet;