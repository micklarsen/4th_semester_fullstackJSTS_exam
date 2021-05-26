const EventEmitter = require("events");

class DOS_Detector extends EventEmitter {
    constructor(timeValue) {
        // Threshold
        super();
        this.urls = new Map();
        this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) => {
        const time = new Date().getTime();
        if (this.urls.has(url)) {
            const deltaTime = time - this.urls.get(url);
            if (deltaTime < this.TIME_BETWEEN_CALLS) {
                // First string is what the eventlistener is listening for - they have to match!
                this.emit("DOS Detected", { url: url, timeBetweenCalls: deltaTime });
            }
        }
        this.urls.set(url, time);
    };
}
module.exports.DosDetector = DOS_Detector;




const DosDetector  = DOS_Detector; //Simulated import
const ddosDetector = new DosDetector(2000); // Call the constructor on the new obj.

ddosDetector.on("DOS Detected", (arg) => {
    //This string is what the listener is listetning for!
    // Eventlistener with callback
    console.log("Plausible DDOS attack detected", arg);
});

ddosDetector.addUrl("url1");
ddosDetector.addUrl("url2");
ddosDetector.addUrl("url3");

//Simulate requests for same URL within short time period
setTimeout(() => {
    ddosDetector.addUrl("url1");
    ddosDetector.addUrl("url3");
}, 1000);

// Output
// Plausible DDOS attack detected { url: 'url1', timeBetweenCalls: 1003 }
// Plausible DDOS attack detected { url: 'url3', timeBetweenCalls: 1003 }