// QUIZ-GAME (QUESTION'S) : 

// QUIZ-GAME (QUESTION's):
const quizGameQuestions = [
    // HTML & CSS (QUESTION'S) :
    {
        category: "HTML & CSS",
        questions: [
            // JSON-FORMAT (QUESTION & ANSWER) :
            {
                questionNumber: 1,
                currentQuestion: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"],
                correctAnswer: "Hyper Text Markup Language"
            },

            {
                questionNumber: 2,
                currentQuestion: "Which HTML tag is used to define an unordered list?",
                options: ["ul", "ol", "li", "list"],
                correctAnswer: "ul"
            },

            {
                questionNumber: 3,
                currentQuestion: "Which property is used to change the text color in CSS?",
                options: ["text-color", "font-color", "color", "background-color"],
                correctAnswer: "color"
            },

            {
                questionNumber: 4,
                currentQuestion: "What is the correct HTML tag for inserting a line break?",
                options: ["lb", "break", "br", "newline"],
                correctAnswer: "br"
            },

            {
                questionNumber: 5,
                currentQuestion: "Which CSS property controls the spacing between elements?",
                options: ["padding", "margin", "border", "spacing"],
                correctAnswer: "margin"
            },

            {
                questionNumber: 6,
                currentQuestion: "Through, How many ways you STYLE your HTML Code ?",
                options: ["5", "3", "4", "2"],
                correctAnswer: "3"
            },

            {
                questionNumber: 7,
                currentQuestion: "Which HTML element is used to define the title of a document?",
                options: ["meta", "title", "header", "head"],
                correctAnswer: "title"
            },

            {
                questionNumber: 8,
                currentQuestion: "Which CSS property is used to make text bold?",
                options: ["font-weight", "text-style", "bold", "text-weight"],
                correctAnswer: "font-weight"
            },

            {
                questionNumber: 9,
                currentQuestion: "Which HTML element is used for the largest heading?",
                options: ["h6", "h1", "header", "h3"],
                correctAnswer: "h1"
            },

            {
                questionNumber: 10,
                currentQuestion: "Which CSS unit is relative to the font size of the root element?",
                options: ["em", "rem", "%", "px"],
                correctAnswer: "rem"
            }
        ]
    },

    // JAVASCRIPT (QUESTION'S) : 
    {
        category: "JAVA-SCRIPT",
        questions: [
            // JSON-FORMAT (QUESTION & ANSWER) :
            {
                questionNumber: 1,
                currentQuestion: "What is the correct way to declare a variable in JavaScript?",
                options: ["var myVar = 10;", "let myVar = 10;", "const myVar = 10;", "All of the above"],
                correctAnswer: "All of the above"
            },

            {
                questionNumber: 2,
                currentQuestion: "What will console.log(typeof null); output?",
                options: ["object", "null", "undefined", "number"],
                correctAnswer: "object"
            },

            {
                questionNumber: 3,
                currentQuestion: "What does NaN stand for in JavaScript?",
                options: ["Not a Null", "Not a Number", "No Assigned Name", "New and Null"],
                correctAnswer: "Not a Number"
            },

            {
                questionNumber: 4,
                currentQuestion: "Which method is used to remove the last element from an array?",
                options: [".shift()", ".pop()", ".push()", ".splice()"],
                correctAnswer: ".pop()"
            },

            {
                questionNumber: 5,
                currentQuestion: "How do you write an arrow function in JavaScript?",
                options: ["function myFunc() {}", "let myFunc = () => {}", "myFunc: function() {}", "arrow function myFunc() {}"],
                correctAnswer: "let myFunc = () => {}"
            },

            {
                questionNumber: 6,
                currentQuestion: "What will console.log(2 + \"2\"); output?",
                options: ["4", "22", "NaN", "Error"],
                correctAnswer: "22"
            },

            {
                questionNumber: 7,
                currentQuestion: "What keyword is used to define a JavaScript class?",
                options: ["function", "class", "define", "object"],
                correctAnswer: "class"
            },

            {
                questionNumber: 8,
                currentQuestion: "Which of the following is NOT a primitive data type in JavaScript?",
                options: ["String", "Number", "Object", "Boolean"],
                correctAnswer: "Object"
            },

            {
                questionNumber: 9,
                currentQuestion: "How can you convert a string to a number in JavaScript?",
                options: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
                correctAnswer: "All of the above"
            },

            {
                questionNumber: 10,
                currentQuestion: "What will console.log(0 == false); return?",
                options: ["true", "false", "undefined", "Error"],
                correctAnswer: "true"
            }
        ]
    },

    // PYTHON (QUESTION'S) : 
    {
        category: "PYTHON",
        questions: [
            // JSON-FORMAT (QUESTION & ANSWER) :
            {
                questionNumber: 1,
                currentQuestion: "Which keyword is used to define a function in Python?",
                options: ["func", "def", "define", "lambda"],
                correctAnswer: "def"
            },

            {
                questionNumber: 2,
                currentQuestion: "What will print(type([])) output in Python?",
                options: ["list", "array", "tuple", "dict"],
                correctAnswer: "list"
            },

            {
                questionNumber: 3,
                currentQuestion: "Which of the following data types is immutable in Python?",
                options: ["List", "Dictionary", "Set", "Tuple"],
                correctAnswer: "Tuple"
            },

            {
                questionNumber: 4,
                currentQuestion: "What will the expression 3 * 'Python' return?",
                options: ["'PythonPythonPython'", "['Python', 'Python', 'Python']", "Error", "None"],
                correctAnswer: "'PythonPythonPython'"
            },

            {
                questionNumber: 5,
                currentQuestion: "Which method is used to remove the last item from a list?",
                options: ["pop()", "remove()", "delete()", "discard()"],
                correctAnswer: "pop()"
            },

            {
                questionNumber: 6,
                currentQuestion: "How do you define a block of code in Python?",
                options: ["Using curly brackets {}", "Using indentation", "Using square brackets []", "Using parentheses ()"],
                correctAnswer: "Using indentation"
            },

            {
                questionNumber: 7,
                currentQuestion: "What will print(bool([])) return?",
                options: ["True", "False", "None", "Error"],
                correctAnswer: "False"
            },

            {
                questionNumber: 8,
                currentQuestion: "Which of the following statements is used to exit a loop?",
                options: ["return", "exit", "break", "continue"],
                correctAnswer: "break"
            },

            {
                questionNumber: 9,
                currentQuestion: "Which module is used for working with regular expressions in Python?",
                options: ["regex", "pyregex", "re", "string"],
                correctAnswer: "re"
            },

            {
                questionNumber: 10,
                currentQuestion: "What will print(2 ** 3) output?",
                options: ["5", "6", "8", "9"],
                correctAnswer: "8"
            }
        ]
    },

    // JAVA (QUESTION'S) : 
    {
        category: "JAVA",
        questions: [
            // JSON-FORMAT (QUESTION & ANSWER) :
            {
                questionNumber: 1,
                currentQuestion: "Which keyword is used to define a class in Java?",
                options: ["class", "Class", "define", "object"],
                correctAnswer: "class"
            },

            {
                questionNumber: 2,
                currentQuestion: "Which data type is used to store decimal numbers in Java?",
                options: ["int", "float", "char", "boolean"],
                correctAnswer: "float"
            },

            {
                questionNumber: 3,
                currentQuestion: "What is the default value of an uninitialized int variable in Java?",
                options: ["null", "0", "undefined", "Error"],
                correctAnswer: "0"
            },

            {
                questionNumber: 4,
                currentQuestion: "Which of the following is NOT a valid access modifier in Java?",
                options: ["public", "protected", "internal", "private"],
                correctAnswer: "internal"
            },

            {
                questionNumber: 5,
                currentQuestion: "Which keyword is used to create an object in Java?",
                options: ["new", "create", "object", "instance"],
                correctAnswer: "new"
            },

            {
                questionNumber: 6,
                currentQuestion: "What will the expression 5 / 2 return in Java?",
                options: ["2.5", "2", "3", "Error"],
                correctAnswer: "2"
            },

            {
                questionNumber: 7,
                currentQuestion: "Which loop is guaranteed to execute at least once?",
                options: ["for loop", "while loop", "do-while loop", "foreach loop"],
                correctAnswer: "do-while loop"
            },

            {
                questionNumber: 8,
                currentQuestion: "Which exception is thrown when dividing by zero in Java?",
                options: ["ArithmeticException", "NullPointerException", "IOException", "ClassCastException"],
                correctAnswer: "ArithmeticException"
            },

            {
                questionNumber: 9,
                currentQuestion: "Which method is called automatically when an object is created?",
                options: ["main()", "finalize()", "constructor", "init()"],
                correctAnswer: "constructor"
            },

            {
                questionNumber: 10,
                currentQuestion: "Which of the following is NOT a feature of Java?",
                options: ["Platform-independent", "Object-oriented", "Supports multiple inheritance", "Secure"],
                correctAnswer: "Supports multiple inheritance"
            }
        ]
    },

    // PHP & MY-SQL (QUESTION'S) : 
    {
        category: "PHP & MY-SQL",
        questions: [
            // JSON-FORMAT (QUESTION & ANSWER) :
            {
                questionNumber: 1,
                currentQuestion: "Which symbol is used to start a variable in PHP?",
                options: ["$", "&", "#", "@"],
                correctAnswer: "$"
            },

            {
                questionNumber: 2,
                currentQuestion: "Which function is used to establish a connection to a MySQL database in PHP?",
                options: ["mysqli_connect()", "mysql_connect()", "connect_db()", "db_connect()"],
                correctAnswer: "mysqli_connect()"
            },

            {
                questionNumber: 3,
                currentQuestion: "What does 'echo' do in PHP?",
                options: ["Prints output to the screen", "Creates a variable", "Defines a function", "Sends an email"],
                correctAnswer: "Prints output to the screen"
            },

            {
                questionNumber: 4,
                currentQuestion: "Which MySQL command is used to retrieve data from a database?",
                options: ["FETCH", "SELECT", "RETRIEVE", "GET"],
                correctAnswer: "SELECT"
            },

            {
                questionNumber: 5,
                currentQuestion: "How do you start a PHP block of code?",
                options: ["<?php", "<script>", "<php>", "<?"],
                correctAnswer: "<?php"
            },

            {
                questionNumber: 6,
                currentQuestion: "Which function is used to prevent SQL injection in PHP?",
                options: ["mysqli_escape()", "mysql_real_escape_string()", "mysqli_real_escape_string()", "escape_string()"],
                correctAnswer: "mysqli_real_escape_string()"
            },

            {
                questionNumber: 7,
                currentQuestion: "What is the default port number for MySQL?",
                options: ["8080", "3306", "1521", "1433"],
                correctAnswer: "3306"
            },

            {
                questionNumber: 8,
                currentQuestion: "Which of the following is a valid way to start a session in PHP?",
                options: ["start_session()", "initiate_session()", "session_start()", "session_init()"],
                correctAnswer: "session_start()"
            },

            {
                questionNumber: 9,
                currentQuestion: "Which SQL clause is used to filter records in a SELECT query?",
                options: ["WHERE", "FILTER", "ORDER BY", "GROUP BY"],
                correctAnswer: "WHERE"
            },

            {
                questionNumber: 10,
                currentQuestion: "Which function is used to count the number of rows returned by a MySQL query in PHP?",
                options: ["num_rows()", "mysqli_num_rows()", "count_rows()", "row_count()"],
                correctAnswer: "mysqli_num_rows()"
            }
        ]
    }
];