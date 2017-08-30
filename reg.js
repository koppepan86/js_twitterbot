'use strict';

//ツイートから正規表現を判定し真偽を返す
function reg(text){
    var regText = /^[^\x01-\x7E\xA1-\xDF]|[0-9]|[a-zA-Z]{1,13}(パン|ぱん)$/giu;
    return regText.test(text);
}

module.exports = reg;