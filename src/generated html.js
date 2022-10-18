const generateHTMLTemplate = function (employees) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <title>Document</title>
  </head>
  <body>
      <body>
          <header>
              <h2 style="padding: 40px;" class="text-center text-white bg-danger">My Team</h2>
                  <div class="container-fluid">
          </header>
          <main>
              <div class="container">
                  <div class="justify-content-center row">
                      ${employees}
                  </div>
              </div>
          </main>
      
  </body>
  </html>`
}

const generateEngineerCard = function (engineer) {
  return `
  <div class="card col-2 center">
  <div class="card-header text-center">
    ${engineer.name}
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">Engineer</h5>
    <p class="card-text text-left">ID:${engineer.id}</p>
    <p class="card-text text-left">Github:${engineer.github}</p>
    <a href="#" class="btn btn-primary">${engineer.email}</a>
  </div>
</div>`
}
const generateManagerCard = function (manager) {
  return `
  <div class="card col-2 center">
  <div class="card-header text-center">
    ${manager.name}
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">Manager</h5>
    <p class="card-text text-left">ID:${manager.id}</p>
    <p class="card-text text-left">Github:${manager.officeNumber}</p>
    <a href="#" class="btn btn-primary">${manager.email}</a>
  </div>
</div>`
}
const generateInternCard = function (intern) {
  return `
  <div class="card col-2 center">
  <div class="card-header text-center">
    ${intern.name}
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">Intern</h5>
    <p class="card-text text-left">ID:${intern.id}</p>
    <p class="card-text text-left">Github:${intern.school}</p>
    <a href="#" class="btn btn-primary">${intern.email}</a>
  </div>
</div>`
}
fillCards = (data) => {
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const managerDiv = generateManagerCard(employee);
          pageArray.push(managerDiv);
      }

      if (role === 'Engineer') {
          const engineerDiv = generateEngineerCard(employee);
          pageArray.push(engineerDiv);
      }

      if (role === 'Intern') {
          const internDiv = generateInternCard(internDiv);
          pageArray.push(internCard);
      }
      
  }

  const employees = pageArray.join('')
  
  const generateHTML = fillCards(employees); 
  return generateHTML;

}

module.exports = fillCards; 