//文字列に関するメソッド


'use strict';

//ツイートから正規表現を判定し真偽を返す

function reg(text){
    var str = new String(text.toString());
    console.log(str.length);
    console.log(str);

    if(str.length > 50 || getReplyCount(str) > 1){
        console.log("lengh over");
        return false;
    }
    // var regText = /(^[^\x01-\x7E\xA1-\xDF]|[0-9]|[a-zA-Z]+)/giu;
    var regText = /([^\W]|[\u30a0-\u30ff]|[\u3040-\u309f]|[\u30e0-\u9fcf]+)(パン|ぱん)$/giu;
    return regText.test(text);
}

//@によるリプライ対象の数をカウントし返す
/*
*   @param text 文字列
*   @param return リプライ対象数
*/
function getReplyCount(text){
    var count = 0;
    var startIndex = 0;
    // if(!(text instanceof String)){
    //     console.log("not String");
    //     return -1;
    // }
    
    while(true){
        if(text.indexOf("@", startIndex) >= 0){
            count++;
            startIndex = text.indexOf("@") + 1;
        }else{
            break;
        }
    }
    console.log("getRpleyCount : " + count);
    return count;
}

module.exports = reg;
