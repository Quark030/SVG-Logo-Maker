const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const generateSVG = require('./lib/utils/generateSVG');

const shapeChoices = ['Circle', 'Triangle', 'Square'];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ])
  .then(answers => {
    const { shape, shapeColor, textColor, text } = answers;
    let selectedShape;

    switch (shape) {
      case 'Circle':
        selectedShape = new Circle(shapeColor);
        break;
      case 'Triangle':
        selectedShape = new Triangle(shapeColor);
        break;
      case 'Square':
        selectedShape = new Square(shapeColor);
        break;
      default:
        console.log('Invalid shape choice.');
        process.exit(1);
    }

    const svgContent = generateSVG(selectedShape, shapeColor, textColor, text);

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  })
  .catch(error => {
    console.error(error);
  });
