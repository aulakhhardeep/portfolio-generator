const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name1, github] = profileDataArgs;

//const generatePage = (userName, gitHubName) => {
//return`Name: ${userName}
//Github:${gitHubName}`;
//};
//console.log(generatePage('Hardeep', 'aulakhhardeep'));
const generatePage = (userName, githubName) => 
{
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name1}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    `;
};
fs.writeFile('index.html', generatePage(name1, github), err =>{
    if(err) throw err;
console.log('Portfolio complete! Check out index.html to see the output!');
});
  


