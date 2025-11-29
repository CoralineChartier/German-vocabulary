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
        this.updateStatsPreview();
    }

    initializeDOM() {
        // Screens
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.statsScreen = document.getElementById('stats-screen');

        // Home screen elements
        this.modeChoiceBtn = document.getElementById('mode-choice');
        this.modeWriteBtn = document.getElementById('mode-write');
        this.dirFrDeBtn = document.getElementById('dir-fr-de');
        this.dirDeFrBtn = document.getElementById('dir-de-fr');
        this.chapterSelect = document.getElementById('chapter-select');
        this.startBtn = document.getElementById('start-quiz');
        this.statsBtn = document.getElementById('stats-btn');
        this.statsPreview = document.getElementById('stats-preview');

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

        // Stats screen elements
        this.statsBackBtn = document.getElementById('stats-back-btn');
        this.statsContent = document.getElementById('stats-content');
        this.resetStatsBtn = document.getElementById('reset-stats-btn');
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

        // Stats button
        this.statsBtn.addEventListener('click', () => this.showStats());

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

        // Stats screen
        this.statsBackBtn.addEventListener('click', () => this.goHome());
        this.resetStatsBtn.addEventListener('click', () => this.confirmResetStats());
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
                // Generate 3 wrong answers from different words
                const otherWords = words.filter(w => w !== word);
                const shuffledOther = this.shuffleArray(otherWords);
                const wrongAnswers = [];
                
                // Get up to 3 wrong answers, handle case with fewer words
                for (let i = 0; i < Math.min(3, shuffledOther.length); i++) {
                    wrongAnswers.push(this.direction === 'fr-de' ? shuffledOther[i].de : shuffledOther[i].fr);
                }
                
                // If we don't have enough wrong answers, duplicate some to ensure 4 choices
                while (wrongAnswers.length < 3) {
                    const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
                    wrongAnswers.push(wrongAnswers[randomIndex] + ' ');
                }

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
        this.statsScreen.classList.remove('active');

        if (screen === 'home') {
            this.homeScreen.classList.add('active');
            this.updateStatsPreview();
        } else if (screen === 'quiz') {
            this.quizScreen.classList.add('active');
        } else if (screen === 'results') {
            this.resultsScreen.classList.add('active');
        } else if (screen === 'stats') {
            this.statsScreen.classList.add('active');
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
            this.saveQuizStats();
            this.showResults();
        }
    }

    saveQuizStats() {
        statsManager.recordQuiz({
            chapter: this.selectedChapter,
            mode: this.mode,
            direction: this.direction,
            totalQuestions: this.questions.length,
            correctAnswers: this.score
        });
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

    updateStatsPreview() {
        const stats = statsManager.getStats();
        const pct = statsManager.getOverallPercentage();
        
        if (stats.totalQuizzes > 0) {
            this.statsPreview.innerHTML = `
                <span class="stats-mini">📊 ${stats.totalQuizzes} quiz${stats.totalQuizzes > 1 ? 's' : ''} • ${pct}% réussite</span>
            `;
        } else {
            this.statsPreview.innerHTML = `<span class="stats-mini">📊 Aucune statistique</span>`;
        }
    }

    showStats() {
        this.showScreen('stats');
        this.renderStats();
    }

    renderStats() {
        const stats = statsManager.getStats();
        const pct = statsManager.getOverallPercentage();

        let html = `
            <div class="stats-overview">
                <div class="stat-card">
                    <div class="stat-number">${stats.totalQuizzes}</div>
                    <div class="stat-label">Quiz effectués</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.totalQuestions}</div>
                    <div class="stat-label">Questions</div>
                </div>
                <div class="stat-card highlight">
                    <div class="stat-number">${pct}%</div>
                    <div class="stat-label">Réussite globale</div>
                </div>
            </div>
        `;

        // Mode stats
        html += `
            <div class="stats-section">
                <h3>Par mode</h3>
                <div class="stats-bars">
                    ${this.renderStatBar('Choix multiple', stats.byMode.choice)}
                    ${this.renderStatBar('Écriture', stats.byMode.write)}
                </div>
            </div>
        `;

        // Direction stats
        html += `
            <div class="stats-section">
                <h3>Par direction</h3>
                <div class="stats-bars">
                    ${this.renderStatBar('🇫🇷 → 🇩🇪', stats.byDirection['fr-de'])}
                    ${this.renderStatBar('🇩🇪 → 🇫🇷', stats.byDirection['de-fr'])}
                </div>
            </div>
        `;

        // History
        if (stats.history.length > 0) {
            html += `
                <div class="stats-section">
                    <h3>Historique récent</h3>
                    <div class="history-list">
                        ${stats.history.slice(0, 10).map(h => `
                            <div class="history-item">
                                <span class="history-date">${new Date(h.date).toLocaleDateString('fr-FR')}</span>
                                <span class="history-score">${h.score}/${h.total} (${h.percentage}%)</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        this.statsContent.innerHTML = html;
    }

    renderStatBar(label, data) {
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        return `
            <div class="stat-bar-container">
                <div class="stat-bar-label">${label}</div>
                <div class="stat-bar">
                    <div class="stat-bar-fill" style="width: ${pct}%"></div>
                </div>
                <div class="stat-bar-value">${pct}% (${data.correct}/${data.total})</div>
            </div>
        `;
    }

    confirmResetStats() {
        if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques ?')) {
            statsManager.resetStats();
            this.renderStats();
        }
    }

    goHome() {
        this.showScreen('home');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
