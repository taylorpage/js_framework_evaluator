
//Alternatively web workers can be used to update information without interupting the user interface processes. This does not work in Chrome or Firefox when the origin is Localhost.

// function workerFetch(user, repo) {
//   var url = `https://api.github.com/repos/${user}/${repo}`;
//   fetch(url).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     postMessage(data);
//   })
//   setTimeout(workerFetch, 1000);
// }

// workerFetch();