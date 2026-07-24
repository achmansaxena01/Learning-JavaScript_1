
let username = "testuser";
let password = "Test@123";
let email = "" ;

function testcase (username , password , email ){
if ((username != "" && password != "") || email != "")
   console.log("✅ Sufficient login credentials");
else console.log("❌ Insufficient credentials - provide username+password OR email");
}

testcase("testuser","Test@123","");
testcase("testuser","","");
testcase("","","test@example.com");
