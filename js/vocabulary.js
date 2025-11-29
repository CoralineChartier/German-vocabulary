// Vocabulary data structure
// Based on Kontext textbook chapter vocabulary (Kapitelwortschatz)
// Source: Klett International - Kontext B1+ / B2

const vocabulary = {
    chapters: [
        {
            id: 1,
            name: "Kapitel 1 - Einstieg (ES)",
            module: "ES",
            words: [
                { de: "aussehen", fr: "avoir l'air", hint: "sieht aus, sah aus, hat ausgesehen" },
                { de: "lachen", fr: "rire", hint: "verbe" },
                { de: "denken", fr: "penser", hint: "denkt, dachte, hat gedacht" },
                { de: "die Pantomime", fr: "la pantomime", hint: "die, -n" }
            ]
        },
        {
            id: 2,
            name: "Kapitel 1 - Modul 1 (M1)",
            module: "M1",
            words: [
                { de: "begrüßen", fr: "saluer", hint: "verbe" },
                { de: "beschäftigt", fr: "occupé", hint: "adjectif" },
                { de: "sich einleben", fr: "s'acclimater", hint: "verbe réfléchi" },
                { de: "erklären", fr: "expliquer", hint: "verbe" },
                { de: "der/die Fremde", fr: "l'étranger/ère", hint: "der/die, -n" },
                { de: "füttern", fr: "nourrir", hint: "verbe" },
                { de: "der/die Gleichgesinnte", fr: "la personne partageant les mêmes idées", hint: "der/die, -n" },
                { de: "herum", fr: "autour", hint: "adverbe" },
                { de: "hingehen", fr: "y aller", hint: "geht hin, ging hin, ist hingegangen" },
                { de: "hochmotiviert", fr: "très motivé", hint: "adjectif" },
                { de: "komisch", fr: "bizarre/drôle", hint: "adjectif" },
                { de: "kontaktieren", fr: "contacter", hint: "verbe" },
                { de: "kosten", fr: "coûter (des efforts)", hint: "Überwindung kosten" },
                { de: "der Neuankömmling", fr: "le nouveau venu", hint: "der, -e" },
                { de: "der Neuling", fr: "le novice", hint: "der, -e" },
                { de: "die Online-Gruppe", fr: "le groupe en ligne", hint: "die, -n" },
                { de: "der Stammgast", fr: "l'habitué", hint: "der, \"-e" },
                { de: "der Tee", fr: "le thé", hint: "der, -s" },
                { de: "die Überwindung", fr: "le fait de surmonter", hint: "die, -en" },
                { de: "vorkommen", fr: "sembler (komisch vorkommen)", hint: "kommt vor, kam vor, ist vorgekommen" },
                { de: "wiedererkennen", fr: "reconnaître", hint: "erkennt wieder, erkannte wieder, hat wiedererkannt" },
                { de: "bewerten", fr: "évaluer", hint: "verbe" },
                { de: "das Mittelfeld", fr: "le milieu de terrain", hint: "das, -er" },
                { de: "modal", fr: "modal", hint: "adjectif grammatical" },
                { de: "temporal", fr: "temporel", hint: "adjectif grammatical" },
                { de: "sich entschließen", fr: "se décider à", hint: "zu etw." },
                { de: "zerschneiden", fr: "découper", hint: "zerschneidet, zerschnitt, hat zerschnitten" },
                { de: "zusammensetzen", fr: "assembler", hint: "verbe séparable" }
            ]
        }
    ]
};

// Statistics management
const statsManager = {
    STORAGE_KEY: 'quiz_statistics',

    getStats() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            totalQuizzes: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            byChapter: {},
            byMode: { choice: { total: 0, correct: 0 }, write: { total: 0, correct: 0 } },
            byDirection: { 'fr-de': { total: 0, correct: 0 }, 'de-fr': { total: 0, correct: 0 } },
            history: []
        };
    },

    saveStats(stats) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stats));
    },

    recordQuiz(quizData) {
        const stats = this.getStats();
        
        stats.totalQuizzes++;
        stats.totalQuestions += quizData.totalQuestions;
        stats.totalCorrect += quizData.correctAnswers;

        // By chapter
        const chapterId = quizData.chapter;
        if (!stats.byChapter[chapterId]) {
            stats.byChapter[chapterId] = { total: 0, correct: 0 };
        }
        stats.byChapter[chapterId].total += quizData.totalQuestions;
        stats.byChapter[chapterId].correct += quizData.correctAnswers;

        // By mode
        stats.byMode[quizData.mode].total += quizData.totalQuestions;
        stats.byMode[quizData.mode].correct += quizData.correctAnswers;

        // By direction
        stats.byDirection[quizData.direction].total += quizData.totalQuestions;
        stats.byDirection[quizData.direction].correct += quizData.correctAnswers;

        // History (keep last 20)
        stats.history.unshift({
            date: new Date().toISOString(),
            chapter: quizData.chapter,
            mode: quizData.mode,
            direction: quizData.direction,
            score: quizData.correctAnswers,
            total: quizData.totalQuestions,
            percentage: Math.round((quizData.correctAnswers / quizData.totalQuestions) * 100)
        });
        if (stats.history.length > 20) {
            stats.history.pop();
        }

        this.saveStats(stats);
        return stats;
    },

    resetStats() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    getOverallPercentage() {
        const stats = this.getStats();
        if (stats.totalQuestions === 0) return 0;
        return Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
    }
};

// Export for use in quiz.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabulary, statsManager };
}
