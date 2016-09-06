const repos = [
  { user: 'facebook', repo: 'react' },
  { user: 'angular',  repo: 'angular.js' },
  { user: 'emberjs',  repo: 'ember.js' },
  { user: 'vuejs',    repo: 'vue' }
]

function gitFetch(user, repo, index, callback) {
  var url = `https://api.github.com/repos/${user}/${repo}`;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data, repo);
  })
}

function domManipulator(data, repo, index) {
  const elements = [
    { id: `${repo}-stars`,  data: data.stargazers_count },
    { id: `${repo}-forks`,  data: data.forks_count },
    { id: `${repo}-issues`, data: data.open_issues_count }
  ]

  elements.forEach(element => {
    document.getElementById(element.id).innerText = element.data;
  });

  updateRepos(elements, index);
}

function updateRepos(data, i) {
  const props = ['stars', 'forks', 'issues'];

  props.forEach((prop, index) => {
    repos[i][prop] = data[index].data;
  });
}

(function updateDom() {
    repos.forEach((account, i) => {
      domManipulator({ stargazers_count: 230, forks_count: 600, open_issues_count: 200 }, account.repo, i);
    })

  //setTimeout(updateDom, 1000);
  // repos.forEach(account => {
  //   gitFetch(account.user, account.repo, domManipulator);
  // });
})();

function evaluateRepos() {

}





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