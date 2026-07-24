let status = "PASSED";
let errorCount = 0;

function teststatus(status ,errorCount ){
    if ((status.toUpperCase() == "PASSED" || status.toUpperCase() == "SKIPPED") && (errorCount == 0))
        console.log("✅ Test completed successfully");
    else
        console.log("❌ Test has issues");
}

teststatus("PASsED", 0);
teststatus("SKIPPED", 0);
teststatus("PASSED", 2);
teststatus("FAILED", 0);