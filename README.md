# js_framework_evaluator

The Js Framework Evaluator displays data from specific javascript framework repositories on github.com. It compares the number of Stars, Forks, and Watchers based on a given repository to evaluate how often the framework is contributed to and how relevant it is in the Javascript community.

This specific project uses Vanilla Javascript and interacts with the github API using the window.fetch() method.

There are two approaches for this specific evaluator. The first naive method uses the helpers.js file exclusively and fetches data every ten seconds using a setTimeout function. This solution works the best for running the project with Chrome or Firefox from the local host using fetch. The second method uses the Web Workers API to constantly fetch data behind the scenes and not interupt any client side processes. This unfortunately only works when the project is deployed or run anywhere other than the local host.

The DOM is manipulated in such a way that resembles a bar graph. The output data that is fetched from the API is returned as a number so it directly manipulates the height of each bar based on those numbers. There is a single bar that is made up of three smaller bars that represent the repository Stars, Forks, and Watchers. I felt that this was pertinent data since all frameworks are open sourced and the relevance of a framework soley depends on the engineers who use it. It can easily be seen which frameworks are the most popularized and contributed to based on the size of the bars.
