'use strict';
var twitter = require('twitter');
var client = require("./accessToken");
var reactionFunc = require("./reactionFunction");

//Streamより自身へのリプライを取得し、その内容に応じて反応する
var stream = client.stream('statuses/filter',
{ 'track': '@lalalaworldsec' },
function (stream) {
    stream.on('data', function (tweet) {
        /*ツイートの全情報表示ログ */
        
        console.log("//Get Stream ");
        var text = new String(tweet["text"])
        console.log(text);

        //ツイートに対する反応
        reactionFunc(text);
    });

    stream.on('error', function (error) {
        console.log(error);
        // expt(error);
    });
});

module.exports = stream;
