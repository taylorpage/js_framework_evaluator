//Contains all needed repository data for querying and display

const repos = [
  { user: 'facebook', repo: 'react' },
  { user: 'angular',  repo: 'angular.js' },
  { user: 'emberjs',  repo: 'ember.js' },
  { user: 'vuejs',    repo: 'vue' }
]

//Fetches data from specified github repos

function gitFetch(user, repo, index, callback) {
  let url = `https://api.github.com/repos/${user}/${repo}`;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data, repo, index);
  })
}

//Manipulates the DOM based on data fetched from github repos

function domManipulator(data, repo, index) {
  const elements = [
    { id: `${repo}-stars`,  data: data.stargazers_count },
    { id: `${repo}-forks`,  data: data.forks_count },
    { id: `${repo}-watchers`, data: data.watchers_count }
  ]
  elements.forEach(element => {
    document.getElementById(element.id).innerText = element.data;
    document.getElementById(element.id).style.height = `${element.data/200}px`;
  });
}

//Fetches the data repeatedly and applies the domManipulator to the newly fetched data
//Allows for data to be updated without a page refresh

(function updateDom() {
  repos.forEach((account, i) => {
    gitFetch(account.user, account.repo, i, domManipulator);
  });
  setTimeout(updateDom, 5000);
})();
