function gitFetch(user, repo, callback) {
  var url = `https://api.github.com/repos/${user}/${repo}`;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data, repo);
  })
}

function domManipulator(data, repo) {
  document.getElementById(`${repo}-stars`).innerHTML = data.stargazers_count;
  document.getElementById(`${repo}-forks`).innerHTML = data.forks_count;
  document.getElementById(`${repo}-issues`).innerHTML = data.open_issues_count;
  console.log(data)
}

(function updateDom() {
  gitFetch('facebook', 'react', domManipulator);
  gitFetch('angular', 'angular.js', domManipulator);
  gitFetch('emberjs', 'ember.js', domManipulator);
  gitFetch('vuejs', 'vue', domManipulator);
})();


/*
  Alternatively web workers can be used to update information without interupting the user interface processes. This does not work in Chrome or Firefox when the origin is Localhost.
*/

// function workerFetch(user, repo) {
//   var url = `https://api.github.com/repos/${user}/${repo}`;
//   fetch(url).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     postMessage(data);
//   })
//   setTimeout(workerFetch, 1000);
// }

//workerFetch();