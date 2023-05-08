console.log('Hello World')
const skills = document.querySelectorAll('.skill-icon')
const description = document.querySelector('.text-description')

const description_Skill = [
  '<p>HTML</p> <br> <p>It is a markup language used to build web pages.</p> <br>',

  '<p>CSS</p> <br> <p>It is a mechanism for adding styles to a web page.</p> <br>',

  '<p>PHP</p> <br> <p>It is a free interpreted programming language.</p> <br>',

  '<p>Java Script</p> <br> <p>It is a structured interpreted programming language.</p> <br>',

  '<p>Node.Js</p> <br> <p>It is open-source, cross-platform software.</p> <br>',

  '<p>C#</p> <br> <p>It is a programming language, multiparadigm, strongly typed.</p> <br>',

  '<p>Java</p> <br> <p>It is an object-oriented programming language.</p> <br>',

  '<p>Git</p> <br> <p>It is a distributed version control system, mainly used in software development.</p> <br>',

  '<p>Github</p> <br> <p>It is a source code and file hosting platform with version control using Git. </p> <br>'
]

skills.forEach((elemento, index) => {
  var index = index

  elemento.addEventListener('mouseover', evento => {
    description.innerHTML = `<p>${description_Skill[index]} </p>`
  })

  elemento.addEventListener('mouseout', (evento, elemento) => {
    description.innerHTML = '( Mouse over a skill to read the description )'
  })
})
