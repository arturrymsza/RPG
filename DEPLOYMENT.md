# Instrukcja wdrozenia na Firebase Hosting

## Krok 1: Instalacja Firebase CLI

```bash
npm install -g firebase-tools
```

## Krok 2: Logowanie do Firebase

```bash
firebase login
```

## Krok 3: Inicjalizacja projektu Firebase

W katalogu projektu (d:\Documents\RPG):

```bash
firebase init
```

Wybierz:
- [x] Hosting: Configure files for Firebase Hosting
- Wybierz istniejacy projekt lub utworz nowy
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds with GitHub: `No` (opcjonalnie)
- Overwrite index.html: `No`

## Krok 4: Build produkcyjny

```bash
npm run build
```

## Krok 5: Deploy na Firebase Hosting

```bash
firebase deploy
```

Twoja aplikacja bedzie dostepna pod adresem:
`https://twoj-projekt.web.app`

## Alternatywnie: Deploy na inne platformy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Dodatkowe konfiguracje Firebase

### Firestore Database
1. Firebase Console -> Firestore Database
2. Create Database -> Start in test mode
3. Rules -> Skopiuj z pliku `firestore.rules`

### Firebase Authentication (opcjonalnie)
1. Firebase Console -> Authentication
2. Get started -> Sign-in method
3. Wlacz Email/Password lub Google

## Monitoring i Analytics

### Firebase Analytics
```bash
firebase init analytics
```

### Performance Monitoring
```bash
firebase init performance
```

## Wskazowki bezpieczenstwa

1. **Nie commituj pliku .env do repozytorium!**
   - Dodaj `.env` do `.gitignore`

2. **Ustaw limity Firestore w konsoli Firebase:**
   - Billing & pricing -> Set up budgets & alerts

3. **Ogranicz dostep w Firestore Rules:**
   - Zobacz plik `firestore.rules` dla przykladow

4. **Monitoruj uzucie:**
   - Firebase Console -> Usage and billing

## Troubleshooting

**Problem: "Firebase command not found"**
```bash
npm install -g firebase-tools
```

**Problem: "Permission denied" podczas deploy**
```bash
firebase login --reauth
```

**Problem: Aplikacja nie dziala po deploy**
- Sprawdz czy `dist/` zawiera pliki
- Sprawdz Console w przegladarce (F12)
- Zweryfikuj konfiguracje Firebase w `firebase.js`

**Problem: Firestore permission denied**
- Sprawdz Rules w Firebase Console
- Upewnij sie ze Rules sa opublikowane

## Koszty

Firebase oferuje darmowy plan (Spark):
- **Firestore:** 50,000 odczytow/dzien
- **Hosting:** 10GB transferu/miesiac
- **Functions:** 125,000 wywolan/miesiac

Dla wiekszych projektow przejdz na plan Blaze (pay as you go).

---

**Powodzenia z wdrozeniem!** 🚀
