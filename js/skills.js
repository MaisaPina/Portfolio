console.log('Hello World')
const skills = document.querySelectorAll('.skill-icon')
// console.log(' Qual é a Skill: ')
// console.log(skills)
const description = document.querySelector('.text-description')
// console.log(' Qual é a descrição: ')
// console.log(description)

const description_Skill = [
  '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na web.</p> <br>',

  '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilos a uma página web.</p> <br>',

  '<p>PHP</p> <br> <p>É uma linguagem de programa interpretada livre.</p> <br>',

  '<p>Java Script</p> <br> <p>É uma linguagem de programação interpretada estruturada.</p> <br>',

  '<p>Node.Js</p> <br> <p>É um software de código aberto, multiplataforma.</p> <br>',

  '<p>C#</p> <br> <p>É uma linguagem de programação, multiparadigma, de tipagem forte.</p> <br>',

  '<p>Java</p> <br> <p>É uma linguagem de programação orientada a objetos.</p> <br>',

  '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',

  '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]

// console.log(' Array de Descrições: ')
// console.log(description_Skill)

skills.forEach((elemento, index) => {
  var index = index

  elemento.addEventListener('mouseover', evento => {
    description.innerHTML = `<p>${description_Skill[index]} </p>`
  })

  elemento.addEventListener('mouseout', (evento, elemento) => {
    description.innerHTML =
      '/* Passe o mouse por cima de alguma habilidade para ler a descrição */'
  })
})
