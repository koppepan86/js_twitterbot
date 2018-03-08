'use strict';
var twitter = require('twitter');

//アクセストークン
//2nd
// var client = new twitter({
//     consumer_key: '9vdFmz1vhlwnNXQJ43Wpy9Y5z',
//     consumer_secret: 'RVsZ80GpI4cGqvJlQKeORg95nLjq4ATJ2TgU0RPUKvwiXox9Vb',
//     access_token_key: '1179516272-r0aiAJHT1T5TXJs7fTO6LmsOCaSg34A34GWVwE6',
//     access_token_secret: 'berkQ0lv4vPfM7Jqm8nVfHNp7SGEW7YTZV26IIpDFXxEP'
// });


//1st
var client = new twitter({
    consumer_key: 'IEknsAlqOxxrk3y1yQhwqqn9E',
    consumer_secret: 'ECwpZ3BuWs51jf8qbEJBIdG3SNhhguaIxdiaAeN42XadJ1FWUk',
    access_token_key: '618921013-nRIodr031DW1ku4OVYgVaKE8I8WDzPaDLvzXgv5L',
    access_token_secret: 'Sp9nOg1YGkq0nSsIaWkyUD5OfbtIEeSMWpQlA4xUs0TKV'
});

module.exports = client;