const accountId = 1234;
let accountEmali = "prosanto@gmail.com";
var accountPassword = "1234";
accountCity = "Sreemangal"; // we should not use it
let accountState;//output will show as undefined

// accountId = 2; not allowed to change const variables.
/* 
   Prefer not to use var
   because of issue in block scope and functional scope. 
*/ 
console.log(accountId);
console.table([accountId,accountEmali,accountPassword,accountCity,accountState]);