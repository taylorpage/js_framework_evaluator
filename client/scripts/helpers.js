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
  domManipulator({ stargazers_count: 48330, forks_count: 8300, watchers_count: 23560 }, 'react', 0);
  domManipulator({ stargazers_count: 51330, forks_count: 25300, watchers_count: 35690 }, 'angular.js', 1);
  domManipulator({ stargazers_count: 16330, forks_count: 3300, watchers_count: 12280 }, 'ember.js', 2);
  domManipulator({ stargazers_count: 26330, forks_count: 2800, watchers_count: 32340 }, 'vue', 3);

  // setTimeout(updateDom, 10000);

  // repos.forEach((account, i) => {
  //   gitFetch(account.user, account.repo, i, domManipulator);
  // });

})();