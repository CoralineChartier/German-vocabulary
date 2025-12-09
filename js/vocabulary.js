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
        },
        {
            id: 3,
            name: "Kapitel 4 - Modul 1 (M1)",
            module: "M1",
            words: [
                { de: "die Konferenz", fr: "la conférence", hint: "die, -en" },
                { de: "die Besprechung", fr: "la réunion", hint: "die, -en" },
                { de: "starren", fr: "fixer du regard", hint: "verbe" },
                { de: "die Körpersprache", fr: "le langage corporel", hint: "die" },
                { de: "etwas einschätzen", fr: "estimer quelque chose", hint: "verbe séparable" },
                { de: "mühsam", fr: "pénible/laborieux", hint: "adjectif" },
                { de: "zu Wort kommen", fr: "prendre la parole", hint: "expression" },
                { de: "sich einloggen", fr: "se connecter", hint: "verbe réfléchi séparable" },
                { de: "der Blickkontakt", fr: "le contact visuel", hint: "der" },
                { de: "persönliche Beziehungen/Kontakt", fr: "relations personnelles/contact", hint: "" },
                { de: "das Spiegelbild", fr: "le reflet/l'image miroir", hint: "das, -er" },
                { de: "optisch", fr: "optique/visuel", hint: "adjectif" },
                { de: "die Wirkung", fr: "l'effet", hint: "die" }
            ]
        },
        {
            id: 4,
            name: "Kapitel 4 - Modul 2 (M2)",
            module: "M2",
            words: [
                { de: "die Fachsprache", fr: "le langage technique/spécialisé", hint: "die, -n" },
                { de: "die Gebärdensprache", fr: "la langue des signes", hint: "die, -n" },
                { de: "die Umgangssprache", fr: "le langage familier", hint: "die, -n" },
                { de: "die Standardsprache", fr: "la langue standard", hint: "die, -n" },
                { de: "die Leichte Sprache", fr: "le langage simplifié", hint: "die" },
                { de: "die Amtssprache", fr: "la langue officielle", hint: "die, -n" },
                { de: "die Jugendsprache", fr: "le langage des jeunes", hint: "die, -n" },
                { de: "teilhaben an (+Dat)", fr: "participer à", hint: "verbe séparable + datif" },
                { de: "zugänglich", fr: "accessible", hint: "adjectif" },
                { de: "etwas anerkennen", fr: "reconnaître quelque chose", hint: "verbe séparable" },
                { de: "gehörlos", fr: "sourd", hint: "adjectif" },
                { de: "einen rechtlichen Anspruch haben auf (+Akk)", fr: "avoir un droit légal à", hint: "expression + accusatif" },
                { de: "sich ausdrücken", fr: "s'exprimer", hint: "verbe réfléchi séparable" },
                { de: "das Bedürfnis", fr: "le besoin", hint: "das, -se" },
                { de: "barrierefrei", fr: "sans barrière/accessible", hint: "adjectif" },
                { de: "übersichtlich", fr: "clair/bien structuré", hint: "adjectif" }
            ]
        },
        {
            id: 5,
            name: "Kapitel 4 - Modul 3 (M3)",
            module: "M3",
            words: [
                { de: "sich etwas fragen", fr: "se demander quelque chose", hint: "verbe réfléchi" },
                { de: "das Kommando", fr: "le commandement", hint: "das, -s" },
                { de: "bestreiten", fr: "contester/nier", hint: "verbe" },
                { de: "vermutlich", fr: "probablement", hint: "adverbe" },
                { de: "tierisch", fr: "animal/bestial", hint: "adjectif" },
                { de: "basieren auf (+Akk)", fr: "se baser sur", hint: "verbe + accusatif" },
                { de: "verbal - nonverbal", fr: "verbal - non verbal", hint: "adjectif" },
                { de: "erstaunlich", fr: "étonnant", hint: "adjectif" },
                { de: "untereinander", fr: "entre eux/les uns avec les autres", hint: "adverbe" },
                { de: "etwas entschlüsseln", fr: "décrypter quelque chose", hint: "verbe" },
                { de: "elementar", fr: "élémentaire", hint: "adjectif" },
                { de: "Informationen weitergeben", fr: "transmettre des informations", hint: "verbe séparable" },
                { de: "etwas signalisieren", fr: "signaler quelque chose", hint: "verbe" },
                { de: "von jemandem/etwas droht Gefahr", fr: "quelqu'un/quelque chose représente un danger", hint: "expression" },
                { de: "sich nähern", fr: "s'approcher", hint: "verbe réfléchi" },
                { de: "etwas differenzieren", fr: "différencier quelque chose", hint: "verbe" },
                { de: "der Laut", fr: "le son/la sonorité", hint: "der, -e" },
                { de: "eine Auffassung vertreten", fr: "défendre une opinion", hint: "expression" },
                { de: "sich erkennen", fr: "se reconnaître", hint: "verbe réfléchi" },
                { de: "zuordnen", fr: "attribuer/classer", hint: "verbe séparable" }
            ]
        },
        {
            id: 6,
            name: "Kapitel 4 - Modul 4 (M4)",
            module: "M4",
            words: [
                { de: "schiefgehen", fr: "mal tourner/échouer", hint: "verbe séparable" },
                { de: "der Vorwurf", fr: "le reproche", hint: "der, -e" },
                { de: "motzen", fr: "râler/grogner", hint: "verbe familier" },
                { de: "etwas in Ordnung finden", fr: "trouver quelque chose correct", hint: "expression" },
                { de: "jemanden kritisieren", fr: "critiquer quelqu'un", hint: "verbe" },
                { de: "locker mit etwas umgehen", fr: "prendre quelque chose à la légère", hint: "expression" },
                { de: "das Resultat", fr: "le résultat", hint: "das, -e" },
                { de: "vorkommen", fr: "se produire/arriver", hint: "verbe séparable" },
                { de: "formulieren", fr: "formuler", hint: "verbe" },
                { de: "die Sachlichkeit", fr: "l'objectivité", hint: "die, Sg." },
                { de: "ein Signal geben", fr: "donner un signal", hint: "expression" },
                { de: "jemanden/etwas ausnutzen", fr: "exploiter quelqu'un/quelque chose", hint: "verbe séparable" },
                { de: "Verabredungen einhalten", fr: "respecter des rendez-vous", hint: "verbe séparable" },
                { de: "etwas nachvollziehen", fr: "comprendre/retracer quelque chose", hint: "verbe séparable" },
                { de: "ungerecht", fr: "injuste", hint: "adjectif" }
            ]
        },
        {
            id: 7,
            name: "Kapitel 4 - Modul 5 (M5)",
            module: "M5",
            words: [
                { de: "die Bräuche", fr: "les coutumes", hint: "die (pluriel)" },
                { de: "das Waisenhaus", fr: "l'orphelinat", hint: "das, \"-er" },
                { de: "der Adventkranz", fr: "la couronne de l'Avent", hint: "der, \"-e" },
                { de: "schnappen", fr: "attraper", hint: "verbe" },
                { de: "aufschnappen", fr: "saisir au vol/entendre par hasard", hint: "verbe séparable" },
                { de: "die Figur", fr: "la figure/le personnage", hint: "die, -en" },
                { de: "der Tratsch", fr: "les ragots/les commérages", hint: "der" },
                { de: "tratschen", fr: "bavarder/ragoter", hint: "verbe" },
                { de: "der Urlaub", fr: "les vacances", hint: "der, -e" },
                { de: "das Rezept", fr: "la recette", hint: "das, -e" },
                { de: "der Job", fr: "le boulot", hint: "der, -s" },
                { de: "die Arbeit", fr: "le travail", hint: "die, -en" },
                { de: "einkaufen", fr: "faire les courses", hint: "verbe séparable" },
                { de: "die Krankheit", fr: "la maladie", hint: "die, -en" },
                { de: "die Miete", fr: "le loyer", hint: "die, -n" },
                { de: "brauchbar", fr: "utilisable", hint: "adjectif" },
                { de: "unbrauchbar", fr: "inutilisable", hint: "adjectif" },
                { de: "die Übertragung", fr: "la transmission", hint: "die, -en" },
                { de: "der Empfänger", fr: "le récepteur/destinataire", hint: "der, -" },
                { de: "buchstabieren", fr: "épeler", hint: "verbe" }
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
