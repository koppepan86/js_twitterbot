'use strict';
var twitter = require('twitter');

//アクセストークン
var client = new twitter({
    consumer_key: '9vdFmz1vhlwnNXQJ43Wpy9Y5z',
    consumer_secret: 'RVsZ80GpI4cGqvJlQKeORg95nLjq4ATJ2TgU0RPUKvwiXox9Vb',
    access_token_key: '1179516272-r0aiAJHT1T5TXJs7fTO6LmsOCaSg34A34GWVwE6',
    access_token_secret: 'berkQ0lv4vPfM7Jqm8nVfHNp7SGEW7YTZV26IIpDFXxEP'
});

module.exports = client;