

const generateHTML = function(managerData, engineerData, internData) {

var formattedManager = [];
var formattedEngineer = [];
var formattedIntern = [];

for (let i = 0; i < managerData.length; i++) {
    console.log(managerData)
    cardDiv = `<div class="card">
        <h2>${managerData[i].manager_name}</h2>
        <p>ID: ${managerData[i].manager_id}</p>
        <p>Email Address: ${managerData[i].manager_email}</p>
        <p>Office Number: ${managerData[i].manager_office}</p>
    </div>`
    formattedManager.push(cardDiv);
}

for (let i = 0; i < engineerData.length; i++) {
    console.log(engineerData)
    cardDiv = `<div class="card">
        <h2>${engineerData[i].engineer_name}</h2>
        <p>ID: ${engineerData[i].engineer_id}</p>
        <p>Email Address: ${engineerData[i].engineer_email}</p>
        <a href="https://github.com/${engineerData[i].engineer_github}">Github: ${engineerData[i].engineer_github}</a>
    </div>`
    formattedEngineer.push(cardDiv);
}

for (let i = 0; i < internData.length; i++) {
    console.log(internData)
    cardDiv = `<div class="card">
        <h2>${internData[i].intern_name}</h2>
        <p>ID: ${internData[i].intern_id}</p>
        <p>Email Address: <a href="mailto: ${internData[i].intern_email}">${internData[i].intern_email}</a></p>
        <p>School: ${internData[i].intern_school}</p>
    </div>`
    formattedIntern.push(cardDiv);
}

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Programming Team</title>
</head>
<body>
    <header>
        <h1>Programming Team</h1>
    </header>
    <main id="content">
        ${formattedManager.join("")}
        ${formattedEngineer.join("")}
        ${formattedIntern.join("")}
    </main>
    <script src="../src/scripts.js"></script>
</body>
</html>
`
}


module.exports = generateHTML;