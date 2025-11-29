// Quiz Application Logic

class QuizApp {
    constructor() {
        this.mode = 'choice'; // 'choice' or 'write'
        this.direction = 'fr-de'; // 'fr-de' or 'de-fr'
        this.selectedChapter = 'all';
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.questionsPerQuiz = 10;

        this.initializeDOM();
        this.initializeEventListeners();
        this.populateChapters();
    }

    initializeDOM() {
        // Screens
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Home screen elements
        this.modeChoiceBtn = document.getElementById('mode-choice');
        this.modeWriteBtn = document.getElementById('mode-write');
        this.dirFrDeBtn = document.getElementById('dir-fr-de');
        this.dirDeFrBtn = document.getElementById('dir-de-fr');
        this.chapterSelect = document.getElementById('chapter-select');
        this.startBtn = document.getElementById('start-quiz');

        // Quiz screen elements
        this.backBtn = document.getElementById('back-btn');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score');
        this.wordToTranslate = document.getElementById('word-to-translate');
        this.wordHint = document.getElementById('word-hint');
        this.choiceContainer = document.getElementById('choice-container');
        this.writeContainer = document.getElementById('write-container');
        this.choiceBtns = document.querySelectorAll('.choice-btn');
        this.answerInput = document.getElementById('answer-input');
        this.submitAnswerBtn = document.getElementById('submit-answer');
        this.feedback = document.getElementById('feedback');
        this.feedbackText = document.getElementById('feedback-text');
        this.correctAnswerText = document.getElementById('correct-answer');
        this.nextBtn = document.getElementById('next-btn');

        // Results screen elements
        this.finalScore = document.getElementById('final-score');
        this.percentage = document.getElementById('percentage');
        this.resultsDetails = document.getElementById('results-details');
        this.restartBtn = document.getElementById('restart-btn');
        this.homeBtn = document.getElementById('home-btn');
    }

    initializeEventListeners() {
        // Mode selection
        this.modeChoiceBtn.addEventListener('click', () => this.selectMode('choice'));
        this.modeWriteBtn.addEventListener('click', () => this.selectMode('write'));

        // Direction selection
        this.dirFrDeBtn.addEventListener('click', () => this.selectDirection('fr-de'));
        this.dirDeFrBtn.addEventListener('click', () => this.selectDirection('de-fr'));

        // Chapter selection
        this.chapterSelect.addEventListener('change', (e) => {
            this.selectedChapter = e.target.value;
        });

        // Start quiz
        this.startBtn.addEventListener('click', () => this.startQuiz());

        // Back button
        this.backBtn.addEventListener('click', () => this.goHome());

        // Choice buttons
        this.choiceBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleChoiceAnswer(e));
        });

        // Submit answer (write mode)
        this.submitAnswerBtn.addEventListener('click', () => this.handleWriteAnswer());
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleWriteAnswer();
            }
        });

        // Next question
        this.nextBtn.addEventListener('click', () => this.nextQuestion());

        // Results screen
        this.restartBtn.addEventListener('click', () => this.startQuiz());
        this.homeBtn.addEventListener('click', () => this.goHome());
    }

    populateChapters() {
        vocabulary.chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter.id;
            option.textContent = chapter.name;
            this.chapterSelect.appendChild(option);
        });
    }

    selectMode(mode) {
        this.mode = mode;
        this.modeChoiceBtn.classList.toggle('active', mode === 'choice');
        this.modeWriteBtn.classList.toggle('active', mode === 'write');
    }

    selectDirection(direction) {
        this.direction = direction;
        this.dirFrDeBtn.classList.toggle('active', direction === 'fr-de');
        this.dirDeFrBtn.classList.toggle('active', direction === 'de-fr');
    }

    getWords() {
        if (this.selectedChapter === 'all') {
            return vocabulary.chapters.flatMap(chapter => chapter.words);
        }
        const chapter = vocabulary.chapters.find(c => c.id === parseInt(this.selectedChapter));
        return chapter ? chapter.words : [];
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    generateQuestions() {
        const words = this.getWords();
        const shuffledWords = this.shuffleArray(words);
        const questionCount = Math.min(this.questionsPerQuiz, shuffledWords.length);

        this.questions = shuffledWords.slice(0, questionCount).map(word => {
            const question = {
                word: word,
                questionText: this.direction === 'fr-de' ? word.fr : word.de,
                correctAnswer: this.direction === 'fr-de' ? word.de : word.fr,
                hint: word.hint
            };

            if (this.mode === 'choice') {
                // Generate 3 wrong answers
                const otherWords = words.filter(w => w !== word);
                const wrongAnswers = this.shuffleArray(otherWords)
                    .slice(0, 3)
                    .map(w => this.direction === 'fr-de' ? w.de : w.fr);

                question.choices = this.shuffleArray([question.correctAnswer, ...wrongAnswers]);
            }

            return question;
        });
    }

    startQuiz() {
        this.generateQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];

        this.showScreen('quiz');
        this.showQuestion();
    }

    showScreen(screen) {
        this.homeScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');

        if (screen === 'home') {
            this.homeScreen.classList.add('active');
        } else if (screen === 'quiz') {
            this.quizScreen.classList.add('active');
        } else if (screen === 'results') {
            this.resultsScreen.classList.add('active');
        }
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update counter and score
        this.questionCounter.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        this.scoreDisplay.textContent = `Score: ${this.score}`;

        // Display the word
        this.wordToTranslate.textContent = question.questionText;
        this.wordHint.textContent = question.hint || '';

        // Reset feedback and next button
        this.feedback.classList.add('hidden');
        this.feedback.classList.remove('correct', 'incorrect');
        this.nextBtn.classList.add('hidden');

        // Show appropriate answer container
        if (this.mode === 'choice') {
            this.choiceContainer.classList.remove('hidden');
            this.writeContainer.classList.add('hidden');

            // Set up choice buttons
            this.choiceBtns.forEach((btn, index) => {
                btn.textContent = question.choices[index];
                btn.classList.remove('correct', 'incorrect', 'disabled');
                btn.disabled = false;
            });
        } else {
            this.choiceContainer.classList.add('hidden');
            this.writeContainer.classList.remove('hidden');

            // Clear and focus input
            this.answerInput.value = '';
            this.answerInput.classList.remove('correct', 'incorrect');
            this.answerInput.disabled = false;
            this.submitAnswerBtn.disabled = false;
            setTimeout(() => this.answerInput.focus(), 100);
        }
    }

    handleChoiceAnswer(e) {
        const selectedBtn = e.target;
        const selectedAnswer = selectedBtn.textContent;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedAnswer === question.correctAnswer;

        // Disable all buttons
        this.choiceBtns.forEach(btn => {
            btn.classList.add('disabled');
            btn.disabled = true;
            if (btn.textContent === question.correctAnswer) {
                btn.classList.add('correct');
            }
        });

        if (isCorrect) {
            this.score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }

        this.recordAnswer(question, selectedAnswer, isCorrect);
        this.showFeedback(isCorrect, question.correctAnswer);
    }

    handleWriteAnswer() {
        const userAnswer = this.answerInput.value.trim();
        if (!userAnswer) return;

        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = this.checkWrittenAnswer(userAnswer, question.correctAnswer);

        this.answerInput.disabled = true;
        this.submitAnswerBtn.disabled = true;

        if (isCorrect) {
            this.score++;
            this.answerInput.classList.add('correct');
        } else {
            this.answerInput.classList.add('incorrect');
        }

        this.recordAnswer(question, userAnswer, isCorrect);
        this.showFeedback(isCorrect, question.correctAnswer);
    }

    checkWrittenAnswer(userAnswer, correctAnswer) {
        // Normalize both strings for comparison
        const normalize = (str) => {
            return str.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') // Remove accents
                .replace(/ß/g, 'ss')
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/ü/g, 'u')
                .trim();
        };

        // Exact match (case-insensitive)
        if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
            return true;
        }

        // Normalized match (for accents)
        if (normalize(userAnswer) === normalize(correctAnswer)) {
            return true;
        }

        return false;
    }

    recordAnswer(question, userAnswer, isCorrect) {
        this.answers.push({
            questionText: question.questionText,
            correctAnswer: question.correctAnswer,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });
    }

    showFeedback(isCorrect, correctAnswer) {
        this.feedback.classList.remove('hidden');
        this.feedback.classList.toggle('correct', isCorrect);
        this.feedback.classList.toggle('incorrect', !isCorrect);

        this.feedbackText.textContent = isCorrect ? '✓ Correct !' : '✗ Incorrect';
        this.correctAnswerText.textContent = isCorrect ? '' : `La bonne réponse était : ${correctAnswer}`;

        this.nextBtn.classList.remove('hidden');
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.showScreen('results');

        const total = this.questions.length;
        const pct = Math.round((this.score / total) * 100);

        this.finalScore.textContent = `${this.score} / ${total}`;
        this.percentage.textContent = `${pct}%`;

        // Generate results details
        this.resultsDetails.innerHTML = '';
        this.answers.forEach(answer => {
            const item = document.createElement('div');
            item.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            item.innerHTML = `
                <span class="result-word">${answer.questionText}</span>
                <span class="result-answer">${answer.isCorrect ? '✓' : answer.correctAnswer}</span>
            `;
            this.resultsDetails.appendChild(item);
        });
    }

    goHome() {
        this.showScreen('home');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
