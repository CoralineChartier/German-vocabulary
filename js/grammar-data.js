// German Grammar Data - Declension Tables and Pronouns
// For practicing articles, adjectives, and pronouns by case and gender

const grammarData = {
    // Definite Articles (der/die/das)
    articles: {
        definite: {
            singular: {
                masculine: {
                    Nominativ: 'der',
                    Akkusativ: 'den',
                    Dativ: 'dem',
                    Genitiv: 'des'
                },
                feminine: {
                    Nominativ: 'die',
                    Akkusativ: 'die',
                    Dativ: 'der',
                    Genitiv: 'der'
                },
                neuter: {
                    Nominativ: 'das',
                    Akkusativ: 'das',
                    Dativ: 'dem',
                    Genitiv: 'des'
                }
            },
            plural: {
                all: {
                    Nominativ: 'die',
                    Akkusativ: 'die',
                    Dativ: 'den',
                    Genitiv: 'der'
                }
            }
        },
        indefinite: {
            singular: {
                masculine: {
                    Nominativ: 'ein',
                    Akkusativ: 'einen',
                    Dativ: 'einem',
                    Genitiv: 'eines'
                },
                feminine: {
                    Nominativ: 'eine',
                    Akkusativ: 'eine',
                    Dativ: 'einer',
                    Genitiv: 'einer'
                },
                neuter: {
                    Nominativ: 'ein',
                    Akkusativ: 'ein',
                    Dativ: 'einem',
                    Genitiv: 'eines'
                }
            }
        },
        negative: {
            singular: {
                masculine: {
                    Nominativ: 'kein',
                    Akkusativ: 'keinen',
                    Dativ: 'keinem',
                    Genitiv: 'keines'
                },
                feminine: {
                    Nominativ: 'keine',
                    Akkusativ: 'keine',
                    Dativ: 'keiner',
                    Genitiv: 'keiner'
                },
                neuter: {
                    Nominativ: 'kein',
                    Akkusativ: 'kein',
                    Dativ: 'keinem',
                    Genitiv: 'keines'
                }
            },
            plural: {
                all: {
                    Nominativ: 'keine',
                    Akkusativ: 'keine',
                    Dativ: 'keinen',
                    Genitiv: 'keiner'
                }
            }
        }
    },

    // Adjective endings with definite article
    adjectiveEndings: {
        withDefiniteArticle: {
            singular: {
                masculine: {
                    Nominativ: 'e',
                    Akkusativ: 'en',
                    Dativ: 'en',
                    Genitiv: 'en'
                },
                feminine: {
                    Nominativ: 'e',
                    Akkusativ: 'e',
                    Dativ: 'en',
                    Genitiv: 'en'
                },
                neuter: {
                    Nominativ: 'e',
                    Akkusativ: 'e',
                    Dativ: 'en',
                    Genitiv: 'en'
                }
            },
            plural: {
                all: {
                    Nominativ: 'en',
                    Akkusativ: 'en',
                    Dativ: 'en',
                    Genitiv: 'en'
                }
            }
        },
        withIndefiniteArticle: {
            singular: {
                masculine: {
                    Nominativ: 'er',
                    Akkusativ: 'en',
                    Dativ: 'en',
                    Genitiv: 'en'
                },
                feminine: {
                    Nominativ: 'e',
                    Akkusativ: 'e',
                    Dativ: 'en',
                    Genitiv: 'en'
                },
                neuter: {
                    Nominativ: 'es',
                    Akkusativ: 'es',
                    Dativ: 'en',
                    Genitiv: 'en'
                }
            }
        },
        withoutArticle: {
            singular: {
                masculine: {
                    Nominativ: 'er',
                    Akkusativ: 'en',
                    Dativ: 'em',
                    Genitiv: 'en'
                },
                feminine: {
                    Nominativ: 'e',
                    Akkusativ: 'e',
                    Dativ: 'er',
                    Genitiv: 'er'
                },
                neuter: {
                    Nominativ: 'es',
                    Akkusativ: 'es',
                    Dativ: 'em',
                    Genitiv: 'en'
                }
            },
            plural: {
                all: {
                    Nominativ: 'e',
                    Akkusativ: 'e',
                    Dativ: 'en',
                    Genitiv: 'er'
                }
            }
        }
    },

    // Personal pronouns by case
    personalPronouns: {
        ich: {
            Nominativ: 'ich',
            Akkusativ: 'mich',
            Dativ: 'mir',
            Genitiv: 'meiner'
        },
        du: {
            Nominativ: 'du',
            Akkusativ: 'dich',
            Dativ: 'dir',
            Genitiv: 'deiner'
        },
        er: {
            Nominativ: 'er',
            Akkusativ: 'ihn',
            Dativ: 'ihm',
            Genitiv: 'seiner'
        },
        sie_singular: {
            Nominativ: 'sie',
            Akkusativ: 'sie',
            Dativ: 'ihr',
            Genitiv: 'ihrer'
        },
        es: {
            Nominativ: 'es',
            Akkusativ: 'es',
            Dativ: 'ihm',
            Genitiv: 'seiner'
        },
        wir: {
            Nominativ: 'wir',
            Akkusativ: 'uns',
            Dativ: 'uns',
            Genitiv: 'unser'
        },
        ihr: {
            Nominativ: 'ihr',
            Akkusativ: 'euch',
            Dativ: 'euch',
            Genitiv: 'euer'
        },
        sie_plural: {
            Nominativ: 'sie',
            Akkusativ: 'sie',
            Dativ: 'ihnen',
            Genitiv: 'ihrer'
        },
        Sie: {
            Nominativ: 'Sie',
            Akkusativ: 'Sie',
            Dativ: 'Ihnen',
            Genitiv: 'Ihrer'
        }
    },

    // Possessive pronouns (mein, dein, sein, etc.)
    possessivePronouns: {
        mein: {
            singular: {
                masculine: {
                    Nominativ: 'mein',
                    Akkusativ: 'meinen',
                    Dativ: 'meinem',
                    Genitiv: 'meines'
                },
                feminine: {
                    Nominativ: 'meine',
                    Akkusativ: 'meine',
                    Dativ: 'meiner',
                    Genitiv: 'meiner'
                },
                neuter: {
                    Nominativ: 'mein',
                    Akkusativ: 'mein',
                    Dativ: 'meinem',
                    Genitiv: 'meines'
                }
            },
            plural: {
                all: {
                    Nominativ: 'meine',
                    Akkusativ: 'meine',
                    Dativ: 'meinen',
                    Genitiv: 'meiner'
                }
            }
        },
        dein: {
            singular: {
                masculine: {
                    Nominativ: 'dein',
                    Akkusativ: 'deinen',
                    Dativ: 'deinem',
                    Genitiv: 'deines'
                },
                feminine: {
                    Nominativ: 'deine',
                    Akkusativ: 'deine',
                    Dativ: 'deiner',
                    Genitiv: 'deiner'
                },
                neuter: {
                    Nominativ: 'dein',
                    Akkusativ: 'dein',
                    Dativ: 'deinem',
                    Genitiv: 'deines'
                }
            },
            plural: {
                all: {
                    Nominativ: 'deine',
                    Akkusativ: 'deine',
                    Dativ: 'deinen',
                    Genitiv: 'deiner'
                }
            }
        },
        sein: {
            singular: {
                masculine: {
                    Nominativ: 'sein',
                    Akkusativ: 'seinen',
                    Dativ: 'seinem',
                    Genitiv: 'seines'
                },
                feminine: {
                    Nominativ: 'seine',
                    Akkusativ: 'seine',
                    Dativ: 'seiner',
                    Genitiv: 'seiner'
                },
                neuter: {
                    Nominativ: 'sein',
                    Akkusativ: 'sein',
                    Dativ: 'seinem',
                    Genitiv: 'seines'
                }
            },
            plural: {
                all: {
                    Nominativ: 'seine',
                    Akkusativ: 'seine',
                    Dativ: 'seinen',
                    Genitiv: 'seiner'
                }
            }
        },
        ihr_possessive: {
            singular: {
                masculine: {
                    Nominativ: 'ihr',
                    Akkusativ: 'ihren',
                    Dativ: 'ihrem',
                    Genitiv: 'ihres'
                },
                feminine: {
                    Nominativ: 'ihre',
                    Akkusativ: 'ihre',
                    Dativ: 'ihrer',
                    Genitiv: 'ihrer'
                },
                neuter: {
                    Nominativ: 'ihr',
                    Akkusativ: 'ihr',
                    Dativ: 'ihrem',
                    Genitiv: 'ihres'
                }
            },
            plural: {
                all: {
                    Nominativ: 'ihre',
                    Akkusativ: 'ihre',
                    Dativ: 'ihren',
                    Genitiv: 'ihrer'
                }
            }
        },
        unser: {
            singular: {
                masculine: {
                    Nominativ: 'unser',
                    Akkusativ: 'unseren',
                    Dativ: 'unserem',
                    Genitiv: 'unseres'
                },
                feminine: {
                    Nominativ: 'unsere',
                    Akkusativ: 'unsere',
                    Dativ: 'unserer',
                    Genitiv: 'unserer'
                },
                neuter: {
                    Nominativ: 'unser',
                    Akkusativ: 'unser',
                    Dativ: 'unserem',
                    Genitiv: 'unseres'
                }
            },
            plural: {
                all: {
                    Nominativ: 'unsere',
                    Akkusativ: 'unsere',
                    Dativ: 'unseren',
                    Genitiv: 'unserer'
                }
            }
        },
        euer: {
            singular: {
                masculine: {
                    Nominativ: 'euer',
                    Akkusativ: 'euren',
                    Dativ: 'eurem',
                    Genitiv: 'eures'
                },
                feminine: {
                    Nominativ: 'eure',
                    Akkusativ: 'eure',
                    Dativ: 'eurer',
                    Genitiv: 'eurer'
                },
                neuter: {
                    Nominativ: 'euer',
                    Akkusativ: 'euer',
                    Dativ: 'eurem',
                    Genitiv: 'eures'
                }
            },
            plural: {
                all: {
                    Nominativ: 'eure',
                    Akkusativ: 'eure',
                    Dativ: 'euren',
                    Genitiv: 'eurer'
                }
            }
        }
    },

    // Demonstrative pronouns (dieser, jener, etc.)
    demonstrativePronouns: {
        dieser: {
            singular: {
                masculine: {
                    Nominativ: 'dieser',
                    Akkusativ: 'diesen',
                    Dativ: 'diesem',
                    Genitiv: 'dieses'
                },
                feminine: {
                    Nominativ: 'diese',
                    Akkusativ: 'diese',
                    Dativ: 'dieser',
                    Genitiv: 'dieser'
                },
                neuter: {
                    Nominativ: 'dieses',
                    Akkusativ: 'dieses',
                    Dativ: 'diesem',
                    Genitiv: 'dieses'
                }
            },
            plural: {
                all: {
                    Nominativ: 'diese',
                    Akkusativ: 'diese',
                    Dativ: 'diesen',
                    Genitiv: 'dieser'
                }
            }
        },
        jener: {
            singular: {
                masculine: {
                    Nominativ: 'jener',
                    Akkusativ: 'jenen',
                    Dativ: 'jenem',
                    Genitiv: 'jenes'
                },
                feminine: {
                    Nominativ: 'jene',
                    Akkusativ: 'jene',
                    Dativ: 'jener',
                    Genitiv: 'jener'
                },
                neuter: {
                    Nominativ: 'jenes',
                    Akkusativ: 'jenes',
                    Dativ: 'jenem',
                    Genitiv: 'jenes'
                }
            },
            plural: {
                all: {
                    Nominativ: 'jene',
                    Akkusativ: 'jene',
                    Dativ: 'jenen',
                    Genitiv: 'jener'
                }
            }
        }
    },

    // Sample nouns with gender for practice
    nouns: [
        { word: 'Mann', gender: 'masculine', fr: 'homme' },
        { word: 'Frau', gender: 'feminine', fr: 'femme' },
        { word: 'Kind', gender: 'neuter', fr: 'enfant' },
        { word: 'Tisch', gender: 'masculine', fr: 'table' },
        { word: 'Stadt', gender: 'feminine', fr: 'ville' },
        { word: 'Buch', gender: 'neuter', fr: 'livre' },
        { word: 'Lehrer', gender: 'masculine', fr: 'professeur (m)' },
        { word: 'Lehrerin', gender: 'feminine', fr: 'professeure' },
        { word: 'Auto', gender: 'neuter', fr: 'voiture' },
        { word: 'Hund', gender: 'masculine', fr: 'chien' },
        { word: 'Katze', gender: 'feminine', fr: 'chat' },
        { word: 'Haus', gender: 'neuter', fr: 'maison' },
        { word: 'Stuhl', gender: 'masculine', fr: 'chaise' },
        { word: 'Tür', gender: 'feminine', fr: 'porte' },
        { word: 'Fenster', gender: 'neuter', fr: 'fenêtre' },
        { word: 'Vater', gender: 'masculine', fr: 'père' },
        { word: 'Mutter', gender: 'feminine', fr: 'mère' },
        { word: 'Bruder', gender: 'masculine', fr: 'frère' },
        { word: 'Schwester', gender: 'feminine', fr: 'sœur' },
        { word: 'Zimmer', gender: 'neuter', fr: 'chambre' }
    ],

    // Sample adjectives
    adjectives: [
        { word: 'groß', fr: 'grand' },
        { word: 'klein', fr: 'petit' },
        { word: 'schön', fr: 'beau' },
        { word: 'alt', fr: 'vieux' },
        { word: 'neu', fr: 'nouveau' },
        { word: 'gut', fr: 'bon' },
        { word: 'schlecht', fr: 'mauvais' },
        { word: 'jung', fr: 'jeune' },
        { word: 'schnell', fr: 'rapide' },
        { word: 'langsam', fr: 'lent' }
    ],

    // French labels for UI
    labels: {
        cases: {
            Nominativ: 'Nominatif',
            Akkusativ: 'Accusatif',
            Dativ: 'Datif',
            Genitiv: 'Génitif'
        },
        genders: {
            masculine: 'Masculin',
            feminine: 'Féminin',
            neuter: 'Neutre',
            plural: 'Pluriel'
        },
        articleTypes: {
            definite: 'Article défini',
            indefinite: 'Article indéfini',
            negative: 'Article négatif'
        }
    }
};

// Quiz question generators for grammar mode
const grammarQuizGenerator = {
    // Generate article questions
    generateArticleQuestion() {
        const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
        const genders = ['masculine', 'feminine', 'neuter'];
        const articleTypes = ['definite', 'indefinite', 'negative'];
        
        const caseKey = cases[Math.floor(Math.random() * cases.length)];
        const gender = genders[Math.floor(Math.random() * genders.length)];
        const articleType = articleTypes[Math.floor(Math.random() * articleTypes.length)];
        const noun = grammarData.nouns.find(n => n.gender === gender) || grammarData.nouns[0];
        
        const correctArticle = grammarData.articles[articleType].singular[gender][caseKey];
        
        return {
            type: 'article',
            questionText: `${grammarData.labels.cases[caseKey]} - ${grammarData.labels.genders[gender]}`,
            contextText: `___ ${noun.word}`,
            correctAnswer: correctArticle,
            caseKey,
            gender,
            articleType,
            hint: `${articleType === 'definite' ? 'Article défini' : articleType === 'indefinite' ? 'Article indéfini' : 'Article négatif'}`
        };
    },

    // Generate adjective ending question
    generateAdjectiveQuestion() {
        const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
        const genders = ['masculine', 'feminine', 'neuter'];
        const articleTypes = ['withDefiniteArticle', 'withIndefiniteArticle', 'withoutArticle'];
        
        const caseKey = cases[Math.floor(Math.random() * cases.length)];
        const gender = genders[Math.floor(Math.random() * genders.length)];
        const articleType = articleTypes[Math.floor(Math.random() * articleTypes.length)];
        
        const noun = grammarData.nouns.find(n => n.gender === gender) || grammarData.nouns[0];
        const adjective = grammarData.adjectives[Math.floor(Math.random() * grammarData.adjectives.length)];
        
        const correctEnding = grammarData.adjectiveEndings[articleType].singular[gender][caseKey];
        
        let article = '';
        if (articleType === 'withDefiniteArticle') {
            article = grammarData.articles.definite.singular[gender][caseKey];
        } else if (articleType === 'withIndefiniteArticle') {
            article = grammarData.articles.indefinite.singular[gender][caseKey];
        }
        
        // Build correct answer: article + adjective with ending + noun
        const correctAnswer = article ? 
            `${article} ${adjective.word}${correctEnding} ${noun.word}` : 
            `${adjective.word}${correctEnding} ${noun.word}`;
        
        return {
            type: 'adjective',
            questionText: `${grammarData.labels.cases[caseKey]} - ${grammarData.labels.genders[gender]}`,
            contextText: `${adjective.word} ${noun.word}`,  // Only show adjective and noun (no article, no ending)
            correctAnswer: correctAnswer,  // Full answer with article
            caseKey,
            gender,
            adjective: adjective.word,
            hint: articleType === 'withDefiniteArticle' ? 'Avec article défini' : 
                  articleType === 'withIndefiniteArticle' ? 'Avec article indéfini' : 'Sans article'
        };
    },

    // Generate personal pronoun question
    generatePersonalPronounQuestion() {
        const cases = ['Nominativ', 'Akkusativ', 'Dativ'];
        const pronounKeys = ['ich', 'du', 'er', 'sie_singular', 'es', 'wir', 'ihr', 'sie_plural', 'Sie'];
        const pronounLabels = {
            ich: 'je',
            du: 'tu',
            er: 'il',
            sie_singular: 'elle',
            es: 'il/elle (neutre)',
            wir: 'nous',
            ihr: 'vous (informel)',
            sie_plural: 'ils/elles',
            Sie: 'vous (formel)'
        };
        
        const caseKey = cases[Math.floor(Math.random() * cases.length)];
        const pronounKey = pronounKeys[Math.floor(Math.random() * pronounKeys.length)];
        
        const correctPronoun = grammarData.personalPronouns[pronounKey][caseKey];
        
        return {
            type: 'personalPronoun',
            questionText: `${grammarData.labels.cases[caseKey]} - ${pronounLabels[pronounKey]}`,
            correctAnswer: correctPronoun,
            caseKey,
            pronounKey,
            hint: 'Pronom personnel'
        };
    },

    // Generate possessive pronoun question
    generatePossessivePronounQuestion() {
        const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
        const genders = ['masculine', 'feminine', 'neuter'];
        const possessiveKeys = ['mein', 'dein', 'sein', 'ihr_possessive', 'unser', 'euer'];
        const possessiveLabels = {
            mein: 'mon/ma',
            dein: 'ton/ta',
            sein: 'son/sa (à lui)',
            ihr_possessive: 'son/sa (à elle)',
            unser: 'notre',
            euer: 'votre'
        };
        
        const caseKey = cases[Math.floor(Math.random() * cases.length)];
        const gender = genders[Math.floor(Math.random() * genders.length)];
        const possessiveKey = possessiveKeys[Math.floor(Math.random() * possessiveKeys.length)];
        
        const noun = grammarData.nouns.find(n => n.gender === gender) || grammarData.nouns[0];
        const correctPronoun = grammarData.possessivePronouns[possessiveKey].singular[gender][caseKey];
        
        return {
            type: 'possessivePronoun',
            questionText: `${grammarData.labels.cases[caseKey]} - ${grammarData.labels.genders[gender]}`,
            contextText: `___ ${noun.word} (${possessiveLabels[possessiveKey]})`,
            correctAnswer: correctPronoun,
            caseKey,
            gender,
            possessiveKey,
            hint: 'Pronom possessif'
        };
    },

    // Generate demonstrative pronoun question
    generateDemonstrativePronounQuestion() {
        const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
        const genders = ['masculine', 'feminine', 'neuter'];
        const demonstrativeKeys = ['dieser', 'jener'];
        const demonstrativeLabels = {
            dieser: 'ce/cette (proche)',
            jener: 'ce/cette (éloigné)'
        };
        
        const caseKey = cases[Math.floor(Math.random() * cases.length)];
        const gender = genders[Math.floor(Math.random() * genders.length)];
        const demonstrativeKey = demonstrativeKeys[Math.floor(Math.random() * demonstrativeKeys.length)];
        
        const noun = grammarData.nouns.find(n => n.gender === gender) || grammarData.nouns[0];
        const correctPronoun = grammarData.demonstrativePronouns[demonstrativeKey].singular[gender][caseKey];
        
        return {
            type: 'demonstrativePronoun',
            questionText: `${grammarData.labels.cases[caseKey]} - ${grammarData.labels.genders[gender]}`,
            contextText: `___ ${noun.word} (${demonstrativeLabels[demonstrativeKey]})`,
            correctAnswer: correctPronoun,
            caseKey,
            gender,
            demonstrativeKey,
            hint: 'Pronom démonstratif'
        };
    },

    // Generate a random grammar question
    generateRandomQuestion() {
        const questionTypes = [
            'article',
            'adjective',
            'personalPronoun',
            'possessivePronoun',
            'demonstrativePronoun'
        ];
        
        const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        
        switch (randomType) {
            case 'article':
                return this.generateArticleQuestion();
            case 'adjective':
                return this.generateAdjectiveQuestion();
            case 'personalPronoun':
                return this.generatePersonalPronounQuestion();
            case 'possessivePronoun':
                return this.generatePossessivePronounQuestion();
            case 'demonstrativePronoun':
                return this.generateDemonstrativePronounQuestion();
            default:
                return this.generateArticleQuestion();
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { grammarData, grammarQuizGenerator };
}
