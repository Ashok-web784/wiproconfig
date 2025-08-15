enum HttpStatuscode {
    OK = 200,
    NOTFOUND = 404,
    ACCESSDENIED = 403,
    INTERNALERROR = 500
}
console.log("OK:", HttpStatuscode.OK);                   
console.log("NOTFOUND:", HttpStatuscode.NOTFOUND);       
console.log("ACCESSDENIED:", HttpStatuscode.ACCESSDENIED); 
console.log("INTERNALERROR:", HttpStatuscode.INTERNALERROR); 
