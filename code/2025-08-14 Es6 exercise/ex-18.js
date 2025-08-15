var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NOTFOUND"] = 404] = "NOTFOUND";
    HttpStatusCode[HttpStatusCode["ACCESSDENIED"] = 403] = "ACCESSDENIED";
    HttpStatusCode[HttpStatusCode["INTERNALERROR"] = 500] = "INTERNALERROR";
})(HttpStatusCode || (HttpStatusCode = {}));
// Example usage
console.log("OK:", HttpStatusCode.OK); // 200
console.log("NOTFOUND:", HttpStatusCode.NOTFOUND); // 404
console.log("ACCESSDENIED:", HttpStatusCode.ACCESSDENIED); // 403
console.log("INTERNALERROR:", HttpStatusCode.INTERNALERROR); // 500
