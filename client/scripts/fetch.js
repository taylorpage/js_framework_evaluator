const data = "fetch data"

function gitFetch() {
  postMessage(data);
  setTimeout(gitFetch, 1000);
}

gitFetch();