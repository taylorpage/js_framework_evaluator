var fetchWorker;

(function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(fetchWorker) === "undefined") {
      fetchWorker = new Worker("./scripts/fetch.js");
    }
    fetchWorker.onmessage = function(event) {
      document.getElementById("react").innerText = event.data;
    };
  } else {
    document.getElementById("react").innerText = "Not Supported";
  }
})();
