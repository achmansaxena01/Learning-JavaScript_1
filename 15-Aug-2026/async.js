setTimeout(() => {
console.log( "Step 1" );   
setTimeout(() => {
    console.log( "Step 2" );
    setTimeout(() => {
      console.log( "Step 3" );// ...and it keeps nesting
    },1000 );
  },1000 );
}, 1000 );

letpending = newPromise (( resolve , reject ) => {/* waiting... */ });
letfulfilled = newPromise (( resolve ) =>resolve ("Success!" ));
letrejected = newPromise (( resolve , reject ) => reject( new Error( "Failed!" )));



function runTest(name, duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(name + " PASSED")
        : reject(new Error(name + " FAILED"));
    }, duration);
  });
}

runTest("Login Test")
  .then((result) => console.log("Success:", result))
  .catch((error) => console.log("Error:", error.message));
 