/**
 * [MyError 错误模块]
 * @param {string} message [错误信息]
 * @param {string} code    [错误码]
 */
let myError=function(message,code){
    this.message=message;
    this.code=code;
};
myError.prototype=new Error();
module.exports = MyError;