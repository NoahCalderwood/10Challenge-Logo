const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        message: 'What three letters do you want on logo?',
        name: 'letters',
        validate: function(letters) {
            if (letters.length > 3) {
                return false;
                
            } else{
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What color do you want the three letters to be?',
        name: 'lettersColor',
    },
    {
        type: 'list',
        message: 'What shape do you want this logo to be?',
        name: 'shape',
        choices: [
            'Triangle',
            'Square',
            'Circle',
        ]
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor'
    }
])
.then((data) => {
    let logoShape = '';
    switch (data.shape) {
         case 'Triangle':
           logoShape = new shapes.Triangle();
           logoShape.setColor(data.shapeColor);
           break;
           
         case 'Circle':
            logoShape = new shapes.Circle();
            logoShape.setColor(data.shapeColor);
            break;
            
         case 'Square':
            logoShape = new shapes.Square();
            logoShape.setColor(data.shapeColor);
            break;
            
    }
    fs.writeFile(`./examples/logo.svg`, 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${logoShape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.lettersColor}">${data.letters}</text>
  
  </svg>`, () => {
        console.log('Generated logo.svg')
    }
)})
