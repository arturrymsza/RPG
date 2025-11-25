# ANTARES 2045 - Quiz RPG

Wieloosobowa gra quiz RPG z AI w czasie rzeczywistym zbudowana w Vue.js, Firebase i TailwindCSS.

## 🎮 Opis gry

ANTARES 2045 to interaktywna przygoda o zarządzaniu systemem AI w futurystycznym mieście. Gracze przechodzą przez 30 etapów podejmując decyzje etyczne i strategiczne. Każda odpowiedź daje różną liczbę punktów, a wyniki są zapisywane w rankingu w czasie rzeczywistym.

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js (v16 lub nowszy)
- Konto Firebase (https://console.firebase.google.com)

### Krok 1: Instalacja zależności
```bash
npm install
```

### Krok 2: Konfiguracja Firebase

1. Utwórz nowy projekt w Firebase Console
2. Włącz Firestore Database:
   - Przejdź do Firestore Database
   - Kliknij "Create Database"
   - Wybierz tryb testowy (możesz później zmienić na production)
   
3. Skopiuj dane konfiguracyjne Firebase:
   - Project Settings → General → Your apps
   - Wybierz "Web" i zarejestruj aplikację
   - Skopiuj obiekt `firebaseConfig`

4. Edytuj plik `src/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "TWOJ_API_KEY",
     authDomain: "TWOJ_PROJECT_ID.firebaseapp.com",
     projectId: "TWOJ_PROJECT_ID",
     storageBucket: "TWOJ_PROJECT_ID.appspot.com",
     messagingSenderId: "TWOJ_MESSAGING_SENDER_ID",
     appId: "TWOJ_APP_ID"
   };
   ```

### Krok 3: Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### Krok 4: Build produkcyjny
```bash
npm run build
```

Pliki produkcyjne znajdą się w folderze `dist/`

## 📁 Struktura projektu

```
RPG/
├── index.html              # Główny plik HTML
├── package.json            # Zależności projektu
├── vite.config.js          # Konfiguracja Vite
├── tailwind.config.js      # Konfiguracja TailwindCSS
├── postcss.config.js       # Konfiguracja PostCSS
└── src/
    ├── main.js             # Punkt wejścia aplikacji
    ├── App.vue             # Główny komponent
    ├── style.css           # Style globalne + Tailwind
    ├── firebase.js         # Konfiguracja Firebase i funkcje
    ├── data/
    │   └── gameData.js     # Dane gry (30 etapów)
    ├── router/
    │   └── index.js        # Konfiguracja Vue Router
    └── views/
        ├── StartScreen.vue    # Ekran startowy
        ├── QuestionScreen.vue # Ekran pytań
        └── ResultScreen.vue   # Ekran wyników i ranking
```

## 🎯 Funkcje

- ✅ 30 etapów z pytaniami i odpowiedziami
- ✅ System punktacji (każda odpowiedź daje różne punkty)
- ✅ Zapis wyników do Firebase Firestore
- ✅ Ranking graczy w czasie rzeczywistym
- ✅ Responsywny design (TailwindCSS)
- ✅ Routing (Vue Router)
- ✅ Animacje i efekty wizualne
- ✅ Pasek postępu gry

## 🎨 Technologie

- **Vue.js 3** - Framework JavaScript
- **Vue Router 4** - Routing
- **Firebase 10** - Backend (Firestore Database)
- **TailwindCSS 3** - Stylizacja
- **Vite 5** - Build tool

## 🔒 Bezpieczeństwo Firebase

Dla wersji produkcyjnej ustaw reguły Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /players/{playerId} {
      allow read: if true;
      allow write: if request.auth != null || true;
    }
  }
}
```

**Uwaga:** W wersji produkcyjnej zalecane jest dodanie autentykacji użytkowników!

## 📊 Struktura danych w Firestore

### Kolekcja: `players`
```javascript
{
  name: "Imię gracza",       // string
  score: 4500,               // number
  timestamp: "2025-11-23..."  // ISO string
}
```

## 🎮 Jak grać?

1. Wprowadź swoje imię na ekranie startowym
2. Przejdź przez 30 etapów podejmując decyzje
3. Każda odpowiedź A, B, C lub D daje różną liczbę punktów
4. Po zakończeniu zobacz swój wynik i ranking
5. Ranking aktualizuje się w czasie rzeczywistym!

## 🏆 Ocena wyniku

- **Poniżej 2000 pkt** - Projekt anulowany
- **2000-3499 pkt** - Dobry start
- **3500-4499 pkt** - Sukces
- **Powyżej 4500 pkt** - Wizjonerzy przyszłości!

## 🔧 Troubleshooting

**Problem: Błędy Firebase**
- Sprawdź czy poprawnie skonfigurowałeś `src/firebase.js`
- Upewnij się, że Firestore Database jest włączony w konsoli Firebase

**Problem: Nie ładuje się strona**
- Uruchom `npm install` ponownie
- Sprawdź czy port 3000 nie jest zajęty

**Problem: Błędy Tailwind**
- To normalne podczas developmentu
- Tailwind kompiluje się poprawnie przez PostCSS

## 📝 Licencja

MIT License - możesz swobodnie używać i modyfikować kod.

## 👨‍💻 Autor

Stworzono dla projektu edukacyjnego ANTARES 2045.

---

**Miłej zabawy!** 🚀🎮
