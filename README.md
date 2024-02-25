# 5e-dice-roller API


This is a scaled down version of my [dice roller](https://blue-flower-09e983b10.4.azurestaticapps.net/) application from [CPSC-44000 sprint 2](https://github.com/mszost/cpsc-44000/tree/main/sprint-02), adapted to run on Node.js and Express instead of solely client-side Javascript.


It does not include calculations for ability scores, proficiency, etc. but it can be used to generate random numbers of size 1~`d` through URL queries.


### References & Attribution
- Eric Pogue [MERNa Node and Express on Azure 2024 Demo](https://github.com/EricPogueExampleCode-Web/merna-node-and-express-on-azure-2024https://github.com/EricPogueExampleCode-Web/merna-node-and-express-on-azure-2024)
    - Copied the entire `web.config` file and some parts of `index.js`
    - Used the rest of the codebase as an example of how Node.js page routing and `async`/`await`/`fetch()` works