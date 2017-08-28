'use strict';
var twitter = require('twitter');
var client = require("./accessToken");
var sendTweet = require("./sendTweet");

var profile;

var stream = client.stream('statuses/filter',
{ 'track': '@lalalaworldsec' },
function (stream) {

    stream.on('data', function (tweet) {
        /*ツイートの全情報表示ログ */

        // var newTweet = createTweetElem(tweet);
        console.log("get!");
        console.log(tweet["text"]);
        var text = new String(tweet["text"])
        console.log(text);
        if(text.endsWith("パン")){
            var space = text.indexOf(" ");
            text = text.slice(space);
            console.log("update_name");
            console.log(text);
            getProfile(text);
        }
    });

    stream.on('error', function (error) {
        console.log(error);
        // expt(error);
    });
});


function getProfile(text){
    client.get('account/settings',
    {},
    function (error, tweets, response) {
        if(error) throw error;
        if(tweets) console.log(tweets);
        profile = null;
        profile = tweets;
        profile["name"] = text;
        console.log("getProfile!");
        console.log(profile["name"]);
        updateName();
    });
}

function updateName(){
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

module.exports = stream;



/*取得したツイートの表示*/
function createTweetElem(tweet) {
var plateElem = document.createElement('div');
plateElem.style = "background-color : #AAEEDD";
var nameElem = document.createElement('div'); //div要素を作成
var textElem = document.createElement('div');
plateElem.appendChild(nameElem);
plateElem.appendChild(textElem);

plateElem.id = "tweetDiv";
var name = document.createTextNode(tweet.user.name);
var text = document.createTextNode(tweet.text);

textElem.appendChild(text); //作成したdiv要素にテキストノードを追加
nameElem.appendChild(name);

return plateElem;
}

function sendTweet() {
var textBox = document.getElementById("tweetBox");
if (textBox == null) {
    return;
}
console.log("tweet");
console.log(textBox.value);
client.post('statuses/update', { status: textBox.value })
    .then(function (tweet) {
        console.log(tweet);
    })
    .catch(function (error) {
        //重複ツイート送信エラー
        if(error[0]["code"] == "187"){
            //重複時の処理
        }

        expt(error);
        throw error;
    })
}