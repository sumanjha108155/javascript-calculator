class Calculator {

    constructor(previousInput, currentInput) {
        this.previousInput = previousInput;
        this.currentInput = currentInput;
    }

    // function to append numbers 
    concatnumber(texttoconcat) { 
       
        if(this.currentInput.innerText == Math.PI || this.currentInput.innerText == Math.E) {
            this.currentInput.innerText = '';
        } else if(texttoconcat === '.' && this.currentInput.innerText.includes('.')) {
            return;
        } 
        this.currentInput.innerText += texttoconcat;
    }

    // function to append operator
    operatorconcat(operatortoconcat) {
        let operators = /[+\-*/]/;
        if(this.previousInput.innerText == '' && this.currentInput.innerText.charAt(0) != 0 ) {
            if(this.currentInput.innerText == '') return
            else this.previousInput.innerText =  this.currentInput.innerText.toString() + operatortoconcat ;

        } else if(this.currentInput.innerText.length > 1 && this.currentInput.innerText.charAt(0) == 0) {
            this.currentInput.innerText = Number.parseFloat(this.currentInput.innerText);
            this.previousInput.innerText =  this.currentInput.innerText.toString() + operatortoconcat ;
            this.currentInput.innerText = '';

        } else if(this.currentInput.innerText.length == 0 && this.previousInput.innerText.length == 0 ) {
            this.previousInput.innerText = '0' + operatortoconcat;

        } else if(this.previousInput.innerText != '' && this.currentInput.innerText == '' && operators.test(this.previousInput.innerText)) {
            let texttappend = this.previousInput.innerText.toString().slice(0, this.previousInput.innerText.length - 1 );
            this.previousInput.innerText = texttappend + operatortoconcat;

        } else {
            this.previousInput.innerText =  this.previousInput.innerText.toString() + this.currentInput.innerText.toString() + operatortoconcat ;
        }
        this.currentInput.innerText = '';
    }

    // function to calculate the value
    equalsto() {
        let operators = /[+\-*/]/;
        if(this.previousInput.innerText.includes('^') && this.currentInput.innerText != '') {
            let num1 = this.previousInput.innerText.toString().slice(0, -1);
            let num2 = this.currentInput.innerText;
            this.currentInput.innerText = Math.pow(num1,num2);
            this.previousInput.innerText = '';
            
        } else if(this.previousInput.innerText.includes('root') && this.currentInput.innerText != '') {
            let num1 = this.previousInput.innerText.charAt(0);
            let num2 = this.currentInput.innerText;
            this.currentInput.innerText = Math.pow(num2, (1 / num1));
            this.previousInput.innerText = '';

        }  else if(this.previousInput.innerText.includes('base') && this.currentInput.innerText != '') {
            let num1 = this.previousInput.innerText.charAt(this.previousInput.innerText.length- 1);
            let num2 = this.currentInput.innerText;
            this.currentInput.innerText = Math.log(num2) / Math.log(num1);
            this.previousInput.innerText = '';

        }  else {
           
            
            if(this.currentInput.innerText != '' ) {

                if(operators.test(this.currentInput.innerText)) {

                } else {
                    this.currentInput.innerText = Number.parseFloat(this.currentInput.innerText);
                }
                
                this.expression = this.previousInput.innerText.toString() + this.currentInput.innerText.toString();
                this.output = eval(this.expression);
                this.currentInput.innerText = this.output;
                this.previousInput.innerText ='';
            }
        }
    }

    // function to add value of constant
    piande(value){
        if(this.currentInput.innerText == '') {
            this.currentInput.innerText =  value;
        } else {
            this.currentInput.innerText = '';
            this.currentInput.innerText =  value;
        } 
    }

    // function to calculate the square
    squareandcube(type) {
        if(this.currentInput.innerText != '') {
            if(type == "square") {
                this.currentInput.innerText = Math.pow(this.currentInput.innerText, 2);
            } else {
                this.currentInput.innerText = Math.pow(this.currentInput.innerText, 3);
            } 
        }
    }

    // function for 1/x division
    oneby() {
        if(this.currentInput.innerText != '') {
            this.currentInput.innerText = (1/ this.currentInput.innerText);
        } 
    }

    // fumction for absolute value
    absolute() {
        if(this.currentInput.innerText != '') {
            this.currentInput.innerText = Math.abs(this.currentInput.innerText);
        }
    }

    // function to find the exponential notation 
    exponential() {
        if(this.currentInput.innerText != '') {
            this.currentInput.innerText = Number.parseFloat(this.currentInput.innerText).toExponential();
        }
    }

    // function for square and cube root of a number
    sqandcbroot(type) {
        if(this.currentInput.innerText != '') {
            if(type=='square') {
                this.currentInput.innerText = Math.sqrt(this.currentInput.innerText);
            } else if(type== 'cube') {
                this.currentInput.innerText = Math.cbrt(this.currentInput.innerText);
            }  
        }   
    }

    // function to calculate the factorial of a number
    factorial() {
        if(this.currentInput.innerText != '') {
            if(this.currentInput.innerText.includes('-')) {
                this.previousInput.innerText = 'fact('+this.currentInput.innerText+')';
                this.invalid();
            } else if(this.currentInput.innerText == 0 || this.currentInput.innerText == 1) {
                this.currentInput.innerText = 1;
            }
            else {
                this.fact=1;
                for(let i = 1 ; i <= this.currentInput.innerText ; i++) {
                    this.fact *= i;
                }
                this.currentInput.innerText = this.fact ;
            }
       }   
    }

    // function to raise a number by certain power
    powerraise(type) {
        if(type == 'normal') {
            if(this.currentInput.innerText != '') {
                this.previousInput.innerText = this.currentInput.innerText + '^';
                this.currentInput.innerText = '';
            }
        } else if(type=='ten') {
            if(this.currentInput.innerText != '') {
                this.currentInput.innerText =  Math.pow(10 , this.currentInput.innerText);
                this.previousInput.innerText = '';
            }
        } else if(type=='two') {
            if(this.currentInput.innerText != '') {
                this.currentInput.innerText =  Math.pow(2 , this.currentInput.innerText);
                this.previousInput.innerText = '';
            }
        } else if(type =='exp') {
            if(this.currentInput.innerText != '') {
                this.currentInput.innerText =  Math.pow(Math.E, this.currentInput.innerText);
                this.previousInput.innerText = '';
            }
        }
    }

    // function to apply logarthim in a function
    logarithm(type) {

        if(type== 'ten') {
            if(this.currentInput.innerText != '') {
                this.currentInput.innerText = Math.log10(this.currentInput.innerText);
            }
        } else if(type == 'natural') {
            if(this.currentInput.innerText != '') {
                this.currentInput.innerText = Math.log(this.currentInput.innerText);
            }
        } else if( type== 'auto') {
            if(this.currentInput.innerText != '') {
                this.previousInput.innerText = 'value with base ' + this.currentInput.innerText  ;
                this.currentInput.innerText = '';
            }
        }
    }

    // function to make a function negative and vice-versa
    negate() {
        if(this.currentInput.innerText !='') {
            if(this.currentInput.innerText > 0 ) {
                this.currentInput.innerText = -(this.currentInput.innerText);
            } else {
                this.currentInput.innerText = -(this.currentInput.innerText);
            }
        }
    }

    // function for sin cos tan trigonometric fucntions
    trifun(operation) {
        if(this.currentInput.innerText != '') {
            if(operation == 'sin') {
              this.currentInput.innerText = Math.sin(this.currentInput.innerText);
            } else if(operation == 'cos') {
                this.currentInput.innerText = Math.cos(this.currentInput.innerText);
            } else if(operation == 'tan') {
                this.currentInput.innerText = Math.tan(this.currentInput.innerText);
            } else if(operation == 'csc') {
                this.currentInput.innerText = 1 / (Math.sin(this.currentInput.innerText));
            } else if(operation == 'sec') {
                  this.currentInput.innerText = 1 / (Math.cos(this.currentInput.innerText));
            } else if(operation == 'cot') {
                  this.currentInput.innerText = (Math.cos(this.currentInput.innerText)) /  (Math.sin(this.currentInput.innerText));
            }
        }
    }

    // function to round off numbers
    roundoff(type) {
        if(this.currentInput.innerText != '') {
            if(this.type == 'floor') {
                this.currentInput.innerText = Math.floor(this.currentInput.innerText);
            } else {
                this.currentInput.innerText = Math.ceil(this.currentInput.innerText);
            }
        }
    }

    random() {
        if(this.currentInput.innerText != '') {
            this.currentInput.innerText = '';
            this.currentInput.innerText = Math.random();
        } else {
            this.currentInput.innerText = Math.random();
        }
    }
    // function for any root calculation
    rootpower() {
        if(this.currentInput.innerText != '') {
            this.previousInput.innerText = this.currentInput.innerText + 'th root of ' ;
            this.currentInput.innerText = '';
        }
    }

    // function to chaneg to expoential form
    fe() {
        if(this.currentInput.innerText != '') {
            this.currentInput.innerText = this.currentInput.innerText.toString() + 'e+0';
        }
    }

    // function for memory operations 
    memoryfunctions(type) {
        
        if(this.currentInput.innerText != '') {
            if(type == 'ms') {
                if(localStorage.getItem('memorystore') != '') {
                   localStorage.setItem('memorystore', this.currentInput.innerText.toString());
                   return 1;
                } else {
                   localStorage.setItem('memorystore', this.currentInput.innerText.toString());
                   return 1;
                } 

            } else if(type == 'clear') {
                localStorage.setItem('memorystore', '');
                this.currentInput.innerText = '';

            } else if(type == 'recall') {
                if(localStorage.getItem('memorystore') != '') {
                    this.currentInput.innerText = '';
                    this.currentInput.innerText = localStorage.getItem('memorystore');
                }
                
            } else if (type == 'add') {
                this.memorystore = Number.parseFloat(this.currentInput.innerText) + Number.parseFloat(localStorage.getItem('memorystore'));
                localStorage.setItem('memorystore', this.memorystore);

            } else if(type == 'sub') {
                this.memorystore =  Number.parseFloat(localStorage.getItem('memorystore')) - Number.parseFloat(this.currentInput.innerText);
                localStorage.setItem('memorystore', this.memorystore);
            }
        } else if( this.currentInput.innerText == '' && localStorage.getItem('memorystore')) {

            if(type == 'recall') {
                if(localStorage.getItem('memorystore') != '') {
                    this.currentInput.innerText = '';
                    this.currentInput.innerText = localStorage.getItem('memorystore');
                }
            } else if(type == 'clear') {
                localStorage.setItem('memorystore', '');
                this.currentInput.innerText = '';
            } 
        }  
    }

    //function to remove numbers    
    remove() {
        if(this.currentInput.innerText != '') {
            this.removeable = this.currentInput.innerText.toString().slice(0, -1);
            this.currentInput.innerText = this.removeable;
        } else if(this.currentInput.innerText == '' && this.previousInput.innerText != '')
        {
            this.removeable = this.previousInput.innerText.toString().slice(0, -1);
            this.currentInput.innerText = this.removeable;
            this.previousInput.innerText ='';
        }
    }

    // function to clear the output 
    clear() {
        this.previousInput.innerText = '';
        this.currentInput.innerText = ''; 
    }
    invalid() 
    {
        this.currentInput.innerText = "Invalid Input";
    }
}

// outer function for second menu
function itemsafterchange() {
    const numbercube = document.querySelector('[data-number-cube]');
    const cuberoot = document.querySelector('[data-cube-root]');
    const rootpower = document.querySelector('[data-root-power-raise]');
    const poweroftwo = document.querySelector('[data-two-power-raise]');
    const autolog = document.querySelector('[data-auto-logarithm]');
    const exponentialraise = document.querySelector('[data-exponential-raise]');

    numbercube.addEventListener('click', ()=>{
        calculator.squareandcube();
    })

    cuberoot.addEventListener('click', ()=>{
        calculator.sqandcbroot('cube');
    })

    rootpower.addEventListener('click', ()=>{
        calculator.rootpower();
    })

    poweroftwo.addEventListener('click', ()=>{
        calculator.powerraise('two');
    })

    autolog.addEventListener('click', ()=>{
        calculator.logarithm('auto');
    })

    exponentialraise.addEventListener('click', ()=>{
        calculator.powerraise('exp');
    })
}
// fuction to change html content of second menu
function changehtmlcontent() {
    square.outerHTML = '<button data-number-cube class="rounded">x<sup>3</sup></button>';
    sqroot.outerHTML = ' <button data-cube-root class="rounded"><sup>3</sup>&radic;x</button>';
    powerraise.outerHTML = '<button data-root-power-raise class="rounded"><sup>y</sup>&radic;x</button>';
    tenpowerraise.outerHTML = '<button data-two-power-raise class="rounded">2<sup>x</sup></button>';
    basetenlogarithm.outerHTML = '<button data-auto-logarithm class="rounded">log<sub>y</sub>x</button>';
    naturallogarithm.outerHTML = '<button data-exponential-raise class="rounded">e<sup>x</sup></button>';             
}
// function to reverse back to first menu
function reversehtmlcontent() {
    window.location.reload();
}

// variables to access the DOM elements
const number = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');

const previousInput = document.querySelector('[data-previous-input]');
const currentInput = document.querySelector('[data-current-input]');

const equalsto = document.querySelector('[data-equalto]');
const clear = document.querySelector('[data-clearall]');
const remove = document.querySelector('[data-remove]');
const fe = document.querySelector('[data-fe]');

const pi = document.querySelector('[data-pi]');
const exp = document.querySelector('[data-exponential-value]');
const square = document.querySelector('[data-number-square]');
const oneby = document.querySelector('[data-oneby-number]');
const absolute = document.querySelector('[data-absolute-num]');
const exponential = document.querySelector('[data-exponential]');
const modulus = document.querySelector('[data-modulus-number]');
const sqroot = document.querySelector('[data-square-root]');
const oparenthesis = document.querySelector('[data-opening-parenthesis]');
const cparenthesis = document.querySelector('[data-closing-parenthesis]');
const factorial = document.querySelector('[data-number-factorial]');
const powerraise = document.querySelector('[data-power-raise]');
const tenpowerraise = document.querySelector('[data-tenpower-raise]');
const basetenlogarithm = document.querySelector('[data-logarithm]');
const naturallogarithm = document.querySelector('[data-natural-logarithm]');
const negate = document.querySelector('[data-negate]');
const dot = document.querySelector('[data-dot]');
const trifun = document.querySelectorAll('[data-trifun]');
const roundoff = document.querySelectorAll('[data-roundoff]');
const randomGen = document.querySelector('[data-random]');

const memoryclear = document.querySelector('[data-memory-clear]');
const memoryrecall = document.querySelector('[data-memory-recall]');
const memoryadd = document.querySelector('[data-memory-add]');
const memorysub = document.querySelector('[data-memory-sub]');
const memorystore = document.querySelector('[data-memory-store]');
const datamemory = document.querySelector('[data-memory]');

const secfuntion = document.getElementById("secondfunctionalitites");
let token = 0;
secfuntion.addEventListener('click', function(){
    
    if(token == 0) {
        secfuntion.style.backgroundColor = "#2874f0";
        secfuntion.style.color = "white";
        changehtmlcontent();
        itemsafterchange();
        token = 1;
    } else if(token == 1) {
        secfuntion.style.backgroundColor = "";
        secfuntion.style.color = "black";
        itemsafterchange();
        reversehtmlcontent();
        token=0;
    }
});

const calculator = new Calculator(previousInput, currentInput);         // intializing class object

//event listener for memory functions
memorystore.addEventListener('click', () => {
    
    let flag = calculator.memoryfunctions('ms');
    if(flag == 1) {
        memoryrecall.disabled = false;
        memoryclear.disabled = false;
        datamemory.disabled = false;
    }
})

memoryclear.addEventListener('click', () => {
    memoryrecall.disabled = true;
    memoryclear.disabled = true;
    datamemory.disabled = true;
    calculator.memoryfunctions('clear');
})

memoryrecall.addEventListener('click', () => {
    calculator.memoryfunctions('recall');
})

memoryadd.addEventListener('click', () => {
    calculator.memoryfunctions('add');
})

memorysub.addEventListener('click', () => {
    calculator.memoryfunctions('sub');
})

//event listener for numbers button
number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.concatnumber(button.innerText);
    });
});

// eventlistner for operator button
operator.forEach(button => {
    button.addEventListener('click', (e) => {
        calculator.operatorconcat(e.target.value);
    });
});

// eventlistner for equalsto button
equalsto.addEventListener('click', () =>{
    calculator.equalsto();
})


fe.addEventListener('click', () => {
    calculator.fe();
})

// eventlistener to remove a number
remove.addEventListener('click' ,() => {
    calculator.remove();
});

// eventlistener for clear button
clear.addEventListener('click', () =>{
    calculator.clear();
})

// calculator functionalities event listeners
roundoff.forEach(button => {
    button.addEventListener('click', () => {
        calculator.roundoff(button.value);
    });
});

trifun.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.trifun(button.innerText);
    });
});

pi.addEventListener('click' ,() => {
    calculator.piande(Math.PI);
});

exp.addEventListener('click' ,() => {
    calculator.piande(Math.E);
});

square.addEventListener('click' ,() => {
    calculator.squareandcube('square');
});

oneby.addEventListener('click' ,() => {
    calculator.oneby();
});

absolute.addEventListener('click' ,() => {
    calculator.absolute();
});

exponential.addEventListener('click' ,() => {
    calculator.exponential();
});

modulus.addEventListener('click' ,() => {
    calculator.operatorconcat('%');
});

sqroot.addEventListener('click' ,() => {
    calculator.sqandcbroot('square');
});

oparenthesis.addEventListener('click' ,() => {
    calculator.concatnumber(oparenthesis.innerText);
});

cparenthesis.addEventListener('click' ,() => {
    calculator.concatnumber(cparenthesis.innerText);
});

factorial.addEventListener('click' ,() => {
    calculator.factorial();
});

powerraise.addEventListener('click' ,() => {
    calculator.powerraise('normal');
});

tenpowerraise.addEventListener('click' ,() => {
    calculator.powerraise('ten');
});

basetenlogarithm.addEventListener('click' ,() => {
    calculator.logarithm('ten');
});

naturallogarithm.addEventListener('click' ,() => {
    calculator.logarithm('natural');
});

negate.addEventListener('click' ,() => {
    calculator.negate();
});

dot.addEventListener('click' ,() => {
    calculator.concatnumber(dot.innerText);
});

randomGen.addEventListener('click', ()=>{
    calculator.random();
})