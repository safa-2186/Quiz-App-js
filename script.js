const quizData = {
  html: {
    name: "HTML",
    icon: "imgs/Subject Icon Container.png",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Markup Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Level"],
        answer: "Hyper Text Markup Language"
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        answer: "<style>"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "styles", "font", "style"],
        answer: "style"
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        answer: "<br>"
      },
      {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        answer: "<title>"
      },
      {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a url='url'>text</a>", "<a href='url'>text</a>", "<link href='url'>text</link>", "<a name='url'>text</a>"],
        answer: "<a href='url'>text</a>"
      },
      {
        question: "Which HTML element is used to specify a footer for a document?",
        options: ["<bottom>", "<section>", "<footer>", "<div>"],
        answer: "<footer>"
      },
      {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: "<h1>"
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "src", "alt", "longdesc"],
        answer: "alt"
      },
      {
        question: "Which HTML element is used to define emphasized text?",
        options: ["<i>", "<em>", "<italic>", "<strong>"],
        answer: "<em>"
      }
    ]
  },
  css: {
    name: "CSS",
    icon: "imgs/Subject Icon Container (1).png",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "fgcolor", "color", "font-color"],
        answer: "color"
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-style", "font-size", "text-style"],
        answer: "font-size"
      },
      {
        question: "How do you make each word in a text start with a capital letter in CSS?",
        options: ["text-transform: capitalize", "text-transform: uppercase", "text-style: capital", "font-transform: capitalize"],
        answer: "text-transform: capitalize"
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color"
      },
      {
        question: "How do you add a shadow to an element in CSS?",
        options: ["shadow: 2px 2px black", "element-shadow: 2px 2px black", "box-shadow: 2px 2px black", "drop-shadow: 2px 2px black"],
        answer: "box-shadow: 2px 2px black"
      },
      {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["spacing", "margin", "padding", "border"],
        answer: "margin"
      },
      {
        question: "What is the default value of the position property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static"
      },
      {
        question: "Which CSS property is used to make a flex container?",
        options: ["display: flex", "position: flex", "float: flex", "flex: true"],
        answer: "display: flex"
      },
      {
        question: "How do you select an element with the id 'header' in CSS?",
        options: [".header", "*header", "#header", "header"],
        answer: "#header"
      }
    ]
  },
  javascript: {
    name: "Javascript",
    icon: "imgs/Subject Icon Container (2).png",
    questions: [
      {
        question: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "let", "const", "Both let and const"],
        answer: "Both let and const"
      },
      {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["<!-- comment -->", "# comment", "// comment", "** comment"],
        answer: "// comment"
      },
      {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "append()"],
        answer: "push()"
      },
      {
        question: "What does '===' mean in JavaScript?",
        options: ["Equal value", "Equal value and type", "Assign value", "Not equal"],
        answer: "Equal value and type"
      },
      {
        question: "Which built-in method removes the last element of an array?",
        options: ["last()", "pop()", "splice()", "shift()"],
        answer: "pop()"
      },
      {
        question: "How do you write a function in JavaScript?",
        options: ["function = myFunc()", "function myFunc()", "func myFunc()", "def myFunc()"],
        answer: "function myFunc()"
      },
      {
        question: "What is the output of typeof null?",
        options: ["null", "undefined", "object", "string"],
        answer: "object"
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        answer: "onclick"
      },
      {
        question: "How do you select an HTML element by its id in JavaScript?",
        options: ["document.getElement('id')", "document.getElementById('id')", "document.query('id')", "document.findById('id')"],
        answer: "document.getElementById('id')"
      },
      {
        question: "What is a closure in JavaScript?",
        options: ["A way to close the browser", "A function with access to its outer scope", "A method to end a loop", "A type of variable"],
        answer: "A function with access to its outer scope"
      }
    ]
  },
  accessibility: {
    name: "Accessibility",
    icon: "imgs/Subject Icon Container (3).png",
    questions: [
      {
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
        answer: "4.5 : 1"
      },
      {
        question: "Which HTML element is used to define important text for screen readers?",
        options: ["<b>", "<i>", "<strong>", "<em>"],
        answer: "<strong>"
      },
      {
        question: "What does the 'alt' attribute in an image tag provide?",
        options: ["A tooltip on hover", "A text alternative for screen readers", "A caption below the image", "A title for the image"],
        answer: "A text alternative for screen readers"
      },
      {
        question: "What does ARIA stand for?",
        options: ["Accessible Rich Internet Applications", "Advanced Responsive Interface Actions", "Automated Rendering Interface API", "Accessible Responsive Internet Attributes"],
        answer: "Accessible Rich Internet Applications"
      },
      {
        question: "Which HTML element is most appropriate for the main navigation of a website?",
        options: ["<div>", "<section>", "<nav>", "<header>"],
        answer: "<nav>"
      },
      {
        question: "What is the purpose of a 'skip navigation' link?",
        options: ["To hide the navigation menu", "To allow keyboard users to skip to main content", "To create a sitemap", "To redirect to the homepage"],
        answer: "To allow keyboard users to skip to main content"
      },
      {
        question: "Which WCAG level is considered the minimum acceptable standard for most websites?",
        options: ["Level A", "Level AA", "Level AAA", "Level B"],
        answer: "Level AA"
      },
      {
        question: "What attribute should be added to a decorative image to hide it from screen readers?",
        options: ["role='none'", "hidden='true'", "alt=''", "aria-hidden='true'"],
        answer: "alt=''"
      },
      {
        question: "Which element should be used to associate a label with a form input?",
        options: ["<caption>", "<label>", "<legend>", "<title>"],
        answer: "<label>"
      },
      {
        question: "What does 'keyboard accessible' mean in web accessibility?",
        options: ["The site has a virtual keyboard", "All functionality is available using only a keyboard", "The site supports shortcuts", "The site works on mobile keyboards"],
        answer: "All functionality is available using only a keyboard"
      }
    ]
  }
};


let currentSubject = "";      //Subject chosen
let currentQuestionIndex = 0; 
let score = 0;                
let selectedOptionIndex = null; 
let hasSubmitted = false;     // Submission



// Show / Hide Screen


function showScreen(screenId) {
  
  const screens = ['start-screen', 'question-screen', 'score-screen'];
  
  
  screens.forEach(id => {
    const screen = document.getElementById(id);
    screen.classList.add('hidden');
    screen.classList.remove('flex');
  });

 
  const activeScreen = document.getElementById(screenId);
  activeScreen.classList.remove('hidden');
  activeScreen.classList.add('flex');
}

function startQuiz(subject) {
  
  currentSubject = subject;
  
  
  currentQuestionIndex = 0;
  score = 0;

  
  const subjectData = quizData[subject];

  
  document.getElementById('subject-icon').src = subjectData.icon;
  document.getElementById('subject-name').textContent = subjectData.name;

  
  showScreen('question-screen');

  
  showQuestion();
}


// Show the question


function showQuestion() {
  
  hasSubmitted = false;
  selectedOptionIndex = null;

  
  const subjectData = quizData[currentSubject];
  const currentQuestion = subjectData.questions[currentQuestionIndex];
  const totalQuestions = subjectData.questions.length;

  // Set/Update the current question number
  document.getElementById('question-number').textContent = 
    `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

  
  document.getElementById('question-text').textContent = currentQuestion.question;

  
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';

  
  for (let i = 0; i < 4; i++) {
    
    document.getElementById(`opt-text-${i}`).textContent = currentQuestion.options[i];

    
    const optBtn = document.getElementById(`opt-${i}`);

    
    optBtn.classList.remove('border-Purple-600', 'border-Green-500', 'border-Red-500');
    optBtn.classList.add('border-transparent');

    
    const optLetter = optBtn.querySelector('.option-letter');
    optLetter.classList.remove('bg-purple-600', 'bg-Green-500', 'bg-Red-500', 'text-white');
    optLetter.classList.add('bg-Grey-50', 'text-Grey-500');

    
    const optIcon = document.getElementById(`opt-icon-${i}`);
    optIcon.classList.add('hidden');
    optIcon.src = '';
  }

  
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.textContent = 'Submit Answer';
  submitBtn.onclick = submitAnswer;

  
  document.getElementById('error-msg').classList.add('hidden');
}

// Select an option

function selectOption(index) {
  
  if (hasSubmitted) return;

  
  selectedOptionIndex = index;

  
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt-${i}`);
    const letter = btn.querySelector('.option-letter');

    btn.classList.remove('border-Purple-600');
    btn.classList.add('border-transparent');

    letter.classList.remove('bg-Purple-600', 'text-white');
    letter.classList.add('bg-Grey-50', 'text-Grey-500');
  }

  
  const selectedBtn = document.getElementById(`opt-${index}`);
  const selectedLetter = selectedBtn.querySelector('.option-letter');

  selectedBtn.classList.remove('border-transparent');
  selectedBtn.classList.add('border-purple-600');

  selectedLetter.classList.remove('bg-Grey-50', 'text-Grey-500');
  selectedLetter.classList.add('bg-purple-600', 'text-white');

  
  document.getElementById('error-msg').classList.add('hidden');
}


// Answers

function submitAnswer() {
  
  if (selectedOptionIndex === null) {
    document.getElementById('error-msg').classList.remove('hidden');
    return;
  }

  
  hasSubmitted = true;

  
  const currentQuestion = quizData[currentSubject].questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;

  
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt-${i}`);
    const letter = btn.querySelector('.option-letter');
    const icon = document.getElementById(`opt-icon-${i}`);
    const optionText = currentQuestion.options[i];

   
    btn.classList.remove('border-transparent', 'border-purple-600');

    if (optionText === correctAnswer) {
      
      btn.classList.add('border-Green-500');
      letter.classList.remove('bg-Grey-50', 'text-Grey-500', 'bg-purple-600', 'text-white');
      letter.classList.add('bg-Green-500', 'text-white');
      icon.src = 'imgs/correct.png';
      icon.classList.remove('hidden');

    } else if (i === selectedOptionIndex) {
      
      btn.classList.add('border-Red-500');
      letter.classList.remove('bg-Grey-50', 'text-Grey-500', 'bg-purple-600', 'text-white');
      letter.classList.add('bg-Red-500', 'text-white');
      icon.src = 'imgs/incorrect.png';
      icon.classList.remove('hidden');

    } else {
      // Les autres options → style neutre
      btn.classList.add('border-transparent');
    }
  }

  
  if (currentQuestion.options[selectedOptionIndex] === correctAnswer) {
    score++;
  }

  
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.textContent = 'Next Question';
  submitBtn.onclick = nextQuestion;
}


// Next question

function nextQuestion() {
  
  currentQuestionIndex++;

  
  if (currentQuestionIndex < quizData[currentSubject].questions.length) {
    
    showQuestion();
  } else {
    // Score
    showScore();
  }
}


// Score

function showScore() {
  
  const subjectData = quizData[currentSubject];

  
  document.getElementById('score-subject-icon').src = subjectData.icon;
  document.getElementById('score-subject-name').textContent = subjectData.name;

  
  document.getElementById('score-card-icon').src = subjectData.icon;
  document.getElementById('score-card-name').textContent = subjectData.name;

  
  document.getElementById('score-number').textContent = score;
  document.getElementById('score-total').textContent = 
    `out of ${subjectData.questions.length}`;

  
  showScreen('score-screen');
}


// Play Again

function playAgain() {
  
  currentSubject = "";
  currentQuestionIndex = 0;
  score = 0;
  selectedOptionIndex = null;
  hasSubmitted = false;

  // Return to the first page
  showScreen('start-screen');
}
