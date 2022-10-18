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