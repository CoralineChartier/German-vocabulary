// Grammar Quiz Application Logic

class GrammarQuizApp {
    constructor() {
        this.mode = 'identify'; // 'identify' or 'write'
        this.practiceType = 'all'; // 'all' or specific type
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.questionsPerQuiz = 10;
        this.selectedAnswers = { case: null, gender: null };

        this.initializeDOM();
        this.initializeEventListeners();
        this.updateStatsPreview();
    }

    initializeDOM() {
        // Screens
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.statsScreen = document.getElementById('stats-screen');
        this.tablesScreen = document.getElementById('tables-screen');

        // Home screen elements
        this.modeIdentifyBtn = document.getElementById('mode-identify');
        this.modeWriteBtn = document.getElementById('mode-write');
        this.practiceTypeSelect = document.getElementById('practice-type-select');
        this.startBtn = document.getElementById('start-quiz');
        this.tablesBtn = document.getElementById('tables-btn');
        this.statsBtn = document.getElementById('stats-btn');
        this.vocabBtn = document.getElementById('vocab-btn');
        this.statsPreview = document.getElementById('stats-preview');

        // Quiz screen elements
        this.backBtn = document.getElementById('back-btn');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score');
        this.questionText = document.getElementById('question-text');
        this.contextText = document.getElementById('context-text');
        this.wordHint = document.getElementById('word-hint');
        this.identifyContainer = document.getElementById('identify-container');
        this.writeContainer = document.getElementById('write-container');
        this.identifyBtns = document.querySelectorAll('.identify-btn');
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

        // Tables screen elements
        this.tablesBackBtn = document.getElementById('tables-back-btn');
    }

    initializeEventListeners() {
        // Mode selection
        this.modeIdentifyBtn.addEventListener('click', () => this.selectMode('identify'));
        this.modeWriteBtn.addEventListener('click', () => this.selectMode('write'));

        // Practice type selection
        this.practiceTypeSelect.addEventListener('change', (e) => {
            this.practiceType = e.target.value;
        });

        // Start quiz
        this.startBtn.addEventListener('click', () => this.startQuiz());

        // Tables button
        this.tablesBtn.addEventListener('click', () => this.showTables());

        // Stats button
        this.statsBtn.addEventListener('click', () => this.showStats());

        // Vocab button
        this.vocabBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        // Back buttons
        this.backBtn.addEventListener('click', () => this.goHome());
        this.tablesBackBtn.addEventListener('click', () => this.goHome());

        // Identify buttons
        this.identifyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleIdentifyAnswer(e));
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

    selectMode(mode) {
        this.mode = mode;
        this.modeIdentifyBtn.classList.toggle('active', mode === 'identify');
        this.modeWriteBtn.classList.toggle('active', mode === 'write');
    }

    generateQuestions() {
        this.questions = [];
        
        for (let i = 0; i < this.questionsPerQuiz; i++) {
            let question;
            
            if (this.practiceType === 'all') {
                question = grammarQuizGenerator.generateRandomQuestion();
            } else {
                // Generate specific type
                switch (this.practiceType) {
                    case 'article':
                        question = grammarQuizGenerator.generateArticleQuestion();
                        break;
                    case 'adjective':
                        question = grammarQuizGenerator.generateAdjectiveQuestion();
                        break;
                    case 'personalPronoun':
                        question = grammarQuizGenerator.generatePersonalPronounQuestion();
                        break;
                    case 'possessivePronoun':
                        question = grammarQuizGenerator.generatePossessivePronounQuestion();
                        break;
                    case 'demonstrativePronoun':
                        question = grammarQuizGenerator.generateDemonstrativePronounQuestion();
                        break;
                    default:
                        question = grammarQuizGenerator.generateRandomQuestion();
                }
            }
            
            this.questions.push(question);
        }
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
        this.tablesScreen.classList.remove('active');

        if (screen === 'home') {
            this.homeScreen.classList.add('active');
            this.updateStatsPreview();
        } else if (screen === 'quiz') {
            this.quizScreen.classList.add('active');
        } else if (screen === 'results') {
            this.resultsScreen.classList.add('active');
        } else if (screen === 'stats') {
            this.statsScreen.classList.add('active');
        } else if (screen === 'tables') {
            this.tablesScreen.classList.add('active');
        }
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update counter and score
        this.questionCounter.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        this.scoreDisplay.textContent = `Score: ${this.score}`;

        // Display the question
        this.questionText.textContent = question.questionText;
        this.contextText.textContent = question.contextText || '';
        this.contextText.style.display = question.contextText ? 'block' : 'none';
        this.wordHint.textContent = question.hint || '';

        // Reset feedback and next button
        this.feedback.classList.add('hidden');
        this.feedback.classList.remove('correct', 'incorrect');
        this.nextBtn.classList.add('hidden');
        this.selectedAnswers = { case: null, gender: null };

        // Show appropriate answer container
        if (this.mode === 'identify') {
            this.identifyContainer.classList.remove('hidden');
            this.writeContainer.classList.add('hidden');

            // Reset identify buttons
            this.identifyBtns.forEach(btn => {
                btn.classList.remove('correct', 'incorrect', 'disabled', 'selected');
                btn.disabled = false;
            });
        } else {
            this.identifyContainer.classList.add('hidden');
            this.writeContainer.classList.remove('hidden');

            // Clear and focus input
            this.answerInput.value = '';
            this.answerInput.classList.remove('correct', 'incorrect');
            this.answerInput.disabled = false;
            this.submitAnswerBtn.disabled = false;
            setTimeout(() => this.answerInput.focus(), 100);
        }
    }

    handleIdentifyAnswer(e) {
        const selectedBtn = e.target;
        const selectedAnswer = selectedBtn.dataset.answer;
        const question = this.questions[this.currentQuestionIndex];

        // Track which type of answer was selected (case or gender)
        const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
        const genders = ['masculine', 'feminine', 'neuter'];

        if (cases.includes(selectedAnswer)) {
            // Deselect other case buttons
            this.identifyBtns.forEach(btn => {
                if (cases.includes(btn.dataset.answer)) {
                    btn.classList.remove('selected');
                }
            });
            selectedBtn.classList.add('selected');
            this.selectedAnswers.case = selectedAnswer;
        } else if (genders.includes(selectedAnswer)) {
            // Deselect other gender buttons
            this.identifyBtns.forEach(btn => {
                if (genders.includes(btn.dataset.answer)) {
                    btn.classList.remove('selected');
                }
            });
            selectedBtn.classList.add('selected');
            this.selectedAnswers.gender = selectedAnswer;
        }

        // Check if both case and gender are selected (if both are needed)
        const needsCase = question.caseKey !== undefined;
        const needsGender = question.gender !== undefined;

        let canValidate = false;
        if (needsCase && needsGender) {
            canValidate = this.selectedAnswers.case && this.selectedAnswers.gender;
        } else if (needsCase && !needsGender) {
            canValidate = this.selectedAnswers.case;
        } else if (needsGender && !needsCase) {
            canValidate = this.selectedAnswers.gender;
        } else {
            canValidate = true; // For pronoun-only questions
        }

        if (canValidate) {
            this.validateIdentifyAnswer(question);
        }
    }

    validateIdentifyAnswer(question) {
        let isCorrect = true;
        
        // Check case if needed
        if (question.caseKey !== undefined) {
            const caseCorrect = this.selectedAnswers.case === question.caseKey;
            isCorrect = isCorrect && caseCorrect;
            
            // Highlight case buttons
            this.identifyBtns.forEach(btn => {
                const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
                if (cases.includes(btn.dataset.answer)) {
                    btn.disabled = true;
                    btn.classList.add('disabled');
                    if (btn.dataset.answer === question.caseKey) {
                        btn.classList.add('correct');
                    } else if (btn.dataset.answer === this.selectedAnswers.case && !caseCorrect) {
                        btn.classList.add('incorrect');
                    }
                }
            });
        }

        // Check gender if needed
        if (question.gender !== undefined) {
            const genderCorrect = this.selectedAnswers.gender === question.gender;
            isCorrect = isCorrect && genderCorrect;
            
            // Highlight gender buttons
            this.identifyBtns.forEach(btn => {
                const genders = ['masculine', 'feminine', 'neuter'];
                if (genders.includes(btn.dataset.answer)) {
                    btn.disabled = true;
                    btn.classList.add('disabled');
                    if (btn.dataset.answer === question.gender) {
                        btn.classList.add('correct');
                    } else if (btn.dataset.answer === this.selectedAnswers.gender && !genderCorrect) {
                        btn.classList.add('incorrect');
                    }
                }
            });
        }

        if (isCorrect) {
            this.score++;
        }

        const userAnswer = `${this.selectedAnswers.case || ''} ${this.selectedAnswers.gender || ''}`.trim();
        this.recordAnswer(question, userAnswer, isCorrect);
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
            contextText: question.contextText || '',
            correctAnswer: question.correctAnswer,
            userAnswer: userAnswer,
            isCorrect: isCorrect,
            type: question.type
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
        // Use grammar-specific storage key
        const STORAGE_KEY = 'grammar_quiz_statistics';
        let stats = this.getStats();
        
        stats.totalQuizzes++;
        stats.totalQuestions += this.questions.length;
        stats.totalCorrect += this.score;

        // By mode
        if (!stats.byMode[this.mode]) {
            stats.byMode[this.mode] = { total: 0, correct: 0 };
        }
        stats.byMode[this.mode].total += this.questions.length;
        stats.byMode[this.mode].correct += this.score;

        // By practice type
        if (!stats.byPracticeType) {
            stats.byPracticeType = {};
        }
        if (!stats.byPracticeType[this.practiceType]) {
            stats.byPracticeType[this.practiceType] = { total: 0, correct: 0 };
        }
        stats.byPracticeType[this.practiceType].total += this.questions.length;
        stats.byPracticeType[this.practiceType].correct += this.score;

        // History (keep last 20)
        stats.history.unshift({
            date: new Date().toISOString(),
            mode: this.mode,
            practiceType: this.practiceType,
            score: this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100)
        });
        if (stats.history.length > 20) {
            stats.history.pop();
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }

    getStats() {
        const STORAGE_KEY = 'grammar_quiz_statistics';
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            totalQuizzes: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            byMode: {},
            byPracticeType: {},
            history: []
        };
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
                <div>
                    <span class="result-word">${answer.questionText}</span>
                    ${answer.contextText ? `<br><small>${answer.contextText}</small>` : ''}
                </div>
                <span class="result-answer">${answer.isCorrect ? '✓' : answer.correctAnswer}</span>
            `;
            this.resultsDetails.appendChild(item);
        });
    }

    updateStatsPreview() {
        const stats = this.getStats();
        const pct = stats.totalQuestions > 0 
            ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
            : 0;
        
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
        const stats = this.getStats();
        const pct = stats.totalQuestions > 0 
            ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
            : 0;

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
        if (Object.keys(stats.byMode).length > 0) {
            html += `
                <div class="stats-section">
                    <h3>Par mode</h3>
                    <div class="stats-bars">
                        ${Object.entries(stats.byMode).map(([mode, data]) => 
                            this.renderStatBar(mode === 'identify' ? 'Identifier' : 'Écrire', data)
                        ).join('')}
                    </div>
                </div>
            `;
        }

        // Practice type stats
        if (stats.byPracticeType && Object.keys(stats.byPracticeType).length > 0) {
            const typeLabels = {
                all: 'Tout mélanger',
                article: 'Articles',
                adjective: 'Adjectifs',
                personalPronoun: 'Pronoms personnels',
                possessivePronoun: 'Pronoms possessifs',
                demonstrativePronoun: 'Pronoms démonstratifs'
            };
            
            html += `
                <div class="stats-section">
                    <h3>Par type</h3>
                    <div class="stats-bars">
                        ${Object.entries(stats.byPracticeType).map(([type, data]) => 
                            this.renderStatBar(typeLabels[type] || type, data)
                        ).join('')}
                    </div>
                </div>
            `;
        }

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
        if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques de grammaire ?')) {
            const STORAGE_KEY = 'grammar_quiz_statistics';
            localStorage.removeItem(STORAGE_KEY);
            this.renderStats();
            this.updateStatsPreview();
        }
    }

    showTables() {
        this.showScreen('tables');
    }

    goHome() {
        this.showScreen('home');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GrammarQuizApp();
});
