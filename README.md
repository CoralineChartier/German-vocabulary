# German-vocabulary
Quiz de vocabulaire et grammaire allemande - German vocabulary & grammar quiz app

## Description
Application web progressive (PWA) pour apprendre le vocabulaire et la grammaire allemande. Conçue pour fonctionner sur iPhone 14 et tout autre appareil.

## Fonctionnalités

### 📖 Quiz de vocabulaire
#### Modes de quiz
- **Choix multiple** : Trouver la bonne traduction parmi 4 propositions
- **Écriture** : Écrire la traduction du mot

#### Direction
- **Français → Allemand** : Traduire du français vers l'allemand
- **Allemand → Français** : Traduire de l'allemand vers le français

#### Chapitres
Vocabulaire basé sur le manuel Kontext (Klett International), organisé par chapitres :
1. Ankommen (Arriver)
2. Arbeit und Beruf (Travail et profession)
3. Bildung und Lernen (Éducation et apprentissage)
4. Gesellschaft und Politik (Société et politique)
5. Umwelt und Nachhaltigkeit (Environnement et durabilité)
6. Medien und Kommunikation (Médias et communication)
7. Gesundheit und Wohlbefinden (Santé et bien-être)
8. Kultur und Freizeit (Culture et loisirs)
9. Reisen und Tourismus (Voyages et tourisme)
10. Wirtschaft und Konsum (Économie et consommation)
11. Technologie und Innovation (Technologie et innovation)
12. Beziehungen und Gefühle (Relations et sentiments)

### 📚 Quiz de grammaire
Application dédiée pour pratiquer les déclinaisons et les pronoms allemands.

#### Modes de pratique
- **Mode Identifier** : Identifier le cas (Nominatif, Accusatif, Datif, Génitif) et le genre (Masculin, Féminin, Neutre)
- **Mode Écrire** : Écrire la forme correcte (article, terminaison d'adjectif, ou pronom)

#### Types de pratique
- **Articles définis** : der/die/das et leurs déclinaisons
- **Articles indéfinis** : ein/eine/ein et leurs déclinaisons
- **Terminaisons d'adjectifs** : Selon l'article et le cas
- **Pronoms personnels** : ich/du/er/sie/es/wir/ihr/sie/Sie par cas
- **Pronoms possessifs** : mein/dein/sein/ihr/unser/euer et leurs déclinaisons
- **Pronoms démonstratifs** : dieser/jener et leurs déclinaisons
- **Tout mélanger** : Pratique variée de tous les types

#### Tableaux de référence
- Tableaux complets de déclinaisons pour consultation rapide
- Articles définis, indéfinis et négatifs
- Terminaisons d'adjectifs avec et sans article
- Pronoms personnels, possessifs et démonstratifs

### 📊 Statistiques
- Suivi des performances par mode et par type d'exercice
- Historique des quiz récents
- Pourcentage de réussite global
- Statistiques séparées pour vocabulaire et grammaire

## Installation sur iPhone

1. Ouvrir Safari et accéder à l'URL de l'application
2. Appuyer sur le bouton "Partager" (icône carré avec flèche)
3. Sélectionner "Sur l'écran d'accueil"
4. Confirmer l'ajout

L'application sera alors disponible comme une app native sur votre écran d'accueil.

## Utilisation locale

Pour tester l'application localement :

```bash
# Avec Python 3
python -m http.server 8000

# Ou avec Node.js (npx)
npx serve
```

Puis ouvrir `http://localhost:8000` dans votre navigateur.

## Technologies utilisées
- HTML5
- CSS3 (design responsive, variables CSS)
- JavaScript ES6+
- Progressive Web App (PWA) avec manifest
