
const inquirer = require('inquirer');

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