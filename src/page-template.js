//a function for about section becuase the user can either add information in about section or not.
// if statement will not work with template literal, so we are creating a function
const generateAbout = aboutText => {
    if(!aboutText)
    {
        return '';
    }
    return `
    <section>
    <h2>About Me</h2>
    <p>${aboutText}</p>
    </section>
    `;
};

const generateProjects = projectsArr => {
  return `
    <section>
      <h2>Work</h2>
      <div>
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div>
            <h3>${name}</h3>
            <h5>
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}">View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div>
            <h3>${name}</h3>
            <h5>
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}">View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};
  

module.exports = templateData =>
{
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names
    const {projects, about, ...header} = templateData;
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
        <header>
            <div>
                <h1>${header.name}</h1>
                <nav>
                </nav>
                <a href="https://github.com/${header.github}">Github</a>
            </div>
        </header>
        <main>
        ${generateAbout(about)}
        ${generateProjects(projects)}
        </main>
        <footer class="container text-center py-3">
                <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    </body>
    `;
};

