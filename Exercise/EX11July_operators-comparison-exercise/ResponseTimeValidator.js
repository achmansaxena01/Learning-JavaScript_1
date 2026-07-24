let responseTime = 2.5;
let i = 1;
function response_status (responseTime){
    console.log("--------------------------------------------------")
    console.log ("Response Time Test : "+ i);
    console.log("Threshold : 3 second");
    console.log("Actual Time : "+ responseTime);
    if (responseTime < 3)
        console.log("✅ Performance test PASSED (response time:" + responseTime+" seconds)");
    else
        console.log("❌ Performance test FAILED (response time: " + responseTime+" seconds)");
    i++;
}

response_status(2.5);
response_status(3.0);
response_status(2.999);
response_status(3.5);

