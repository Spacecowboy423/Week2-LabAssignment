// Set Base State
resetContent = () => {
    document.querySelector(".displayArea").innerHTML = ""; // Clear previous content
    // Initialize display area
    let displayArea = document.querySelector(".displayArea");
    let Info = document.createElement("h1");
    Info.innerHTML = "<em>Assignement of the Labs: 7 Tasks for CIT-Lords in their halls of stone</em>";
    displayArea.append(Info);
}

// Task #1: Variables
const task1 = () => {
    resetContent(); // Clear previous content

    // a)
    let quantity = prompt("Please enter a number:");
    quantity = parseFloat(quantity);
    console.log(`Number entered: ${quantity}`);

    let numberArea = document.createElement("p");
    document.querySelector(".displayArea").appendChild(numberArea); // Clear previous content
    numberArea.innerHTML = `
        <ul>
            <li>
                <b>Task 1 (a):</b>
                <div>
                    The number you've entered is: <strong>${quantity}</strong>
                </div>
            </li>
        </ul>`;
    document.querySelector(".displayArea").appendChild(numberArea);


    /* b) 
        I don't know how to get this to display part a and then prompt for part b,
        so it looks like part a and part b are updating as one when they are actually 
        two separate tasks. 
    */
    let percent = prompt("Enter a percentage amount:");
    percent = parseFloat(percent);
    let result = (quantity * percent) / 100;
    console.log(`Percentage entered: ${percent}%`);

    let percentageArea = document.createElement("p");
    percentageArea.innerHTML = `
        <ul>
            <li>
                <b>Task 1 (b):</b>
                <div>
                    The percentage you've entered is: <strong>${percent}%</strong>
                </div>
                <div>
                    ${percent}% of ${quantity}, is <strong>${result}</strong>;
                </div>
            </li>
        </ul>`;
    document.querySelector(".displayArea").appendChild(percentageArea);
}


// Task #2: Variables & Conditionals
const task2 = () => {
    resetContent();
    
    let grade = prompt("Enter your numeric grade (1-100):");
    grade = parseFloat(grade);
    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Invalid grade entered. Please enter a number from 1 to 100.");
        console.log("Invalid entry from user.");
    };
    grade = Math.round(grade); // Round the nearest integer using built in Math function
    console.log(`Grade entered: ${grade}`);

    let letterGrade = "";
    // (a) If with branches for grade ranges
    if (grade >= 91) {
        letterGrade = "A";
    }
    else if (grade >= 81) {
        letterGrade = "B";
    }
    else if (grade >= 71) {
        letterGrade = "C";
    }
    else if (grade >= 61) {
        letterGrade = "D";
    }
    else {
        letterGrade = "F";
    }
    let gradesArea = document.createElement("p");
    gradesArea.innerHTML = `
        <ul>
            <li>
                <b>Task 2 (a):</b>
                <div>
                    The numeric grade you've entered is: <strong>${grade}%</strong>.
                </div>
                <div>
                    Through the IF Branches, the letter grade is <strong>${letterGrade}</strong>.
                </div>
            </li>
        </ul>`;
    document.querySelector(".displayArea").appendChild(gradesArea)


    // (b) Switch with branches for grade ranges    
    switch (true) {
        case (grade >= 91):
            letterGrade = "A";
            break;
        case (grade >= 81):
            letterGrade = "B";
            break;
        case (grade >= 71):
            letterGrade = "C";
            break;
        case (grade >= 61):
            letterGrade = "D";
            break;
        default:
            letterGrade = "F";
    }
    gradesArea = document.createElement("p");
    gradesArea.innerHTML = `
        <ul>
            <li>
                <b>Task 2 (b):</b>
                <div>
                    The numeric grade you've entered is: <strong>${grade}%</strong>.
                </div>
                <div>
                    Through the Switch Case, the letter grade is <strong>${letterGrade}</strong>.
                </div>
            </li>
        </ul>`;
    document.querySelector(".displayArea").appendChild(gradesArea);
}


// Task #3: Variables and loops
const task3 = () => {
    resetContent();
    
    let prof = prompt("Who are the lines for?"); // Not used yet but are of task 3 to have it
    let line = prompt("What is the line?");
    let quantity = prompt("How many lines?");
    quantity = parseInt(quantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid number of lines.");
        return;
    }

    for (let i = 1; i <= quantity; i++) {
        console.log(`${i}: ${line}`);
    }
}


// Task #4: Variables, Loops, DOM (left as expression to task 5 can use arrow function)
const task4 = function () {
    resetContent();

    let prof = prompt("Who are the lines for?");
    let line = prompt("What is the line?");
    let quantity = prompt("How many lines?");
    quantity = parseInt(quantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid number of lines.");
        return;
    }

    let pottersArea = document.createElement("h1");
    pottersArea.innerHTML = `<b>${prof}'s</b> <em>special</em> writing plan:`;
    document.querySelector(".displayArea").appendChild(pottersArea);

    let i = 1;
    let html = "";
    while (i <= quantity) {
        html += `
            <ul>
                <li>
                    ${i}: ${line}
                </li>
            </ul>`;

        i++;
    };

    pottersArea = document.createElement("p");
    pottersArea.innerHTML += html;
    document.querySelector(".displayArea").appendChild(pottersArea);
}


// Task #5: Variables, Loops, DOM, Function (with arrow function!)
const task5 = () => {
    resetContent();

    let prof = prompt("Who are the lines for?");
    let line = prompt("What is the line?");
    let quantity = prompt("How many lines?");
    quantity = parseInt(quantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid number of lines.");
        return;
    }

    let pottersArea = document.createElement("h1");
    pottersArea.innerHTML = `<b>${prof}'s</b> <em>special</em> writing plan:`;
    document.querySelector(".displayArea").appendChild(pottersArea);

    let i = 1;
    let html = "";
    while (i <= quantity) {
        html += `
            <ul>
                <li>
                    ${i}: ${line}
                </li>
            </ul>`;

        i++;
    };

    pottersArea = document.createElement("p");
    pottersArea.innerHTML += html;
    document.querySelector(".displayArea").appendChild(pottersArea);
};


// Task #6: Variables, Loops, Functions
// First strategy
const task6FirstStrategy = () => {
    resetContent();
    
    let timesTableArea = document.createElement("h1");
    timesTableArea.innerHTML = `<b>1 through 12 Times Table:</b>`;
    document.querySelector(".displayArea").appendChild(timesTableArea);

    let table = "";
    for (let factor1 = 1; factor1 <= 12; factor1++) {
        for (let factor2 = 1; factor2 <= 12; factor2++) {
            table += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
        }
        switch (factor1) {
            case 12:
                break;
            default:
                table += "\n-------------------------------\n";
                break;
        }
    }
    timesTableArea = document.createElement("p");
    timesTableArea.innerText = table;
    document.querySelector(".displayArea").appendChild(timesTableArea);
}

// Second strategy
const createTable = (factor1) => {
    let innerTable = "";
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        innerTable += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
    }
    return innerTable;
}

const task6SecondStrategy = () => {
    resetContent();

    let timesTableArea = document.createElement("h1");
    timesTableArea.innerHTML = `<b>1 through 12 Times Table:</b>`;
    document.querySelector(".displayArea").appendChild(timesTableArea);

    let outerTable = "";
    for (let factor1 = 1; factor1 <= 12; factor1++) {
        outerTable += createTable(factor1);
        switch (factor1) {
            case 12:
                break;
            default:
                outerTable += "\n-------------------------------\n";
                break;
        }
    }

    timesTableArea = document.createElement("p");
    timesTableArea.innerText = outerTable;
    document.querySelector(".displayArea").appendChild(timesTableArea);
}

// Third strategy
const task6ThirdStrategy = (delimiter) => {
    resetContent();

    parseFloat(delimiter);
    if (isNaN(delimiter) || delimiter <= 0) {
        alert("Please enter a valid number for the times table limit.");
        return;
    }
    // Validate the delimiter
    if (delimiter > 12) {
        alert("The times table limit should not exceed 12.");
        return;
    }
    
    // Inner Loop
    const createTables = (factor1, limit) => {
        let innerTable = "";
        for (let factor2 = 1; factor2 <= limit; factor2++) {
            innerTable += `${factor1} x ${factor2} = ${factor1 * factor2}\n`;
        }
        return innerTable;
    };

    // Outer Loop
    const allTables = (delimiter) => {
        let outerTable = "";
        for (let factor1 = 1; factor1 <= delimiter; factor1++) {
            outerTable += createTables(factor1, delimiter);
            switch (factor1 == delimiter) {
                case true:
                    break;
                default:
                    outerTable += "\n-------------------------------\n";
                    break;
            }
        }
        return outerTable;
    };

    let timesTableArea = document.createElement("h1");
    timesTableArea.innerHTML = `<b>1 through 12 Times Table:</b>`;
    document.querySelector(".displayArea").appendChild(timesTableArea);

    timesTableArea = document.createElement("p");
    timesTableArea.innerText = allTables(delimiter);
    document.querySelector(".displayArea").appendChild(timesTableArea);
};


// Execute main flow
// Initialize display area using reset display function
resetContent();


// Task #7: Hoisting (10 pts)
/*
Hoisting (HoistableDeclaration) referes to when the interpreter moves the declaration of functions, variables, classes, or imports 
to the top of their scope during compilation, proir to execution of the code.

a) Function Hoisting description and example:
Functions declared using `function` can be called before they are declared.

Example:
    console.log(greet());
    function greet() {
    return "Hello!";
    }

    This statement works because the function declaration is hoisted to the top of its scope, allowing it to be called before its definition.
    So to the compiler, the JavaScript code is similar to:

    Example:
    function greet() {
    return "Hello!";
    }
    console.log(greet());

b) Variable Hoisting description and example:
    Variables declared with `var` are hoisted like 'function' declarations but initialized as undefined.

    Example:
    console.log(x === undefined); // true
    var x = 3;

    (function () {
    console.log(x); // undefined
    var x = "local value";
    })();


c) ECMA Standards resolution and example:
    ECMA standards referes to the use of 'let', 'const', and 'class'. Some people call then non-hoisting declarations.
    They definitely are hoistable, but the "temporal dead zone" of hoisting strictly forbids any use of the varaible
    before its declaration. With `let` or `const`, hoisting occurs but accessing the variable before declaration causes
    a ReferenceError, shown in the example below.

    Example:
    const x = 1;
    {
    console.log(x); // ReferenceError
    var x = 2;
    }

    Description of Example:
    If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the 
    console.log(x) statement should be able to read the x value from the upper scope. However, because the const declaration 
    still "taints" the entire scope it's defined in, the console.log(x) statement reads the x from the const x = 2 
    declaration instead, which is not yet initialized, and throws a ReferenceError. 



Examples and explanations directly from https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
*/
