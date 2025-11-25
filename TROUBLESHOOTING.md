# Rozwiązanie problemu - Przycisk nie działa

## AKTUALIZACJA: Problem z przyciskiem "Następne pytanie"

### Szybki test:
1. **Otwórz `test-button.html`** w przeglądarce
   - Ten plik testuje samą mechanikę bez Firebase/Vite
   - Jeśli tutaj działa = problem z główną aplikacją
   - Jeśli tutaj nie działa = problem z przeglądarką

2. **Sprawdź konsolę (F12)**
   - Otwórz aplikację
   - Wybierz odpowiedź
   - Kliknij "Następne pytanie"
   - **Szukaj:** `🔥 nextQuestion CLICKED!`
   - **Jeśli nie widzisz** = kliknięcie nie dociera do funkcji

3. **Sprawdź czy przycisk jest widoczny**
   - Po wyborze odpowiedzi powinien pojawić się zielony przycisk
   - Pod przyciskiem powinien być tekst: `[DEBUG] Przycisk widoczny`
   - Jeśli go nie ma = problem z `answerSelected`

### Możliwe przyczyny:

#### A) Firebase blokuje wykonanie
**Objawy:** Przycisk się klika, ale nic się nie dzieje
**Rozwiązanie:** Zmieniono na nieblokujące - już naprawione

#### B) Vue nie kompiluje się
**Objawy:** Strona pusta lub błędy w konsoli
**Rozwiązanie:**
```bash
npm install
npm run dev
```

#### C) Cache przeglądarki
**Objawy:** Stary kod się wykonuje
**Rozwiązanie:** Ctrl + Shift + R (hard refresh)

#### D) Event listener nie działa
**Objawy:** Kliknięcie nie wywołuje funkcji
**Rozwiązanie:** Już dodano `@click.stop` i `type="button"`

---

## Problem: Przycisk "Rozpocznij Przygodę" nie reaguje

### Możliwe przyczyny i rozwiązania:

## 1. Problem PowerShell (ExecutionPolicy)

Jeśli widzisz błąd:
```
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled
```

### Rozwiązanie A - Zmień politykę PowerShell:
```powershell
# Uruchom PowerShell jako Administrator
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Rozwiązanie B - Użyj CMD zamiast PowerShell:
```cmd
# Otwórz Command Prompt (CMD) i uruchom:
cd d:\Documents\RPG
npm run dev
```

### Rozwiązanie C - Użyj npx:
```bash
cd d:\Documents\RPG
npx vite
```

## 2. Test bez npm - Otwórz plik test.html

Stworzyłem prosty plik testowy:
```
d:\Documents\RPG\test.html
```

**Krok po kroku:**
1. Otwórz plik `test.html` w przeglądarce (dwukrotne kliknięcie)
2. Wpisz imię
3. Kliknij przycisk "Rozpocznij Przygodę"
4. Sprawdź konsolę (F12)

Jeśli ten test działa = problem jest z konfiguracją npm/Vite
Jeśli ten test nie działa = problem z przeglądarką

## 3. Instalacja zależności

Upewnij się że zainstalowałeś wszystkie pakiety:

```bash
cd d:\Documents\RPG
npm install
```

## 4. Sprawdź konsolę przeglądarki

1. Uruchom `npm run dev` (lub otwórz test.html)
2. Otwórz przeglądarkę na http://localhost:5173
3. Naciśnij F12 (DevTools)
4. Zakładka "Console"
5. Wpisz imię i kliknij przycisk
6. Sprawdź czy są błędy w konsoli

## 5. Debugowanie krok po kroku

Otwórz `src/views/StartScreen.vue` i sprawdź czy logi się wyświetlają:

```javascript
const startGame = () => {
  console.log('startGame called'); // Czy to się wyświetla?
  console.log('playerName:', playerName.value); // Jaka wartość?
  // ...
};
```

## 6. Problem z Firebase

Jeśli Firebase blokuje:
- Sprawdź konfigurację w `src/firebase.js`
- Upewnij się że Firestore jest włączony w Firebase Console
- Sprawdź reguły bezpieczeństwa

## 7. Szybki test bez Firebase

Tymczasowo możesz wyłączyć Firebase. Edytuj `src/views/StartScreen.vue`:

```javascript
const startGame = () => {
  if (!playerName.value.trim()) {
    errorMessage.value = 'Prosze wpisac imie!';
    return;
  }

  // Zapisz tylko lokalnie
  sessionStorage.setItem('playerName', playerName.value.trim());
  sessionStorage.setItem('currentStage', '0');
  sessionStorage.setItem('totalScore', '0');
  
  // Pomiń Firebase całkowicie
  router.push('/question');
};
```

## 8. Sprawdź wersję Node.js

```bash
node --version
npm --version
```

Wymagane: Node.js v16 lub nowszy

## 9. Pełna reinstalacja

Jeśli nic nie działa:

```bash
cd d:\Documents\RPG
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

## 10. Alternatywne uruchomienie

### Użyj Vite bezpośrednio:
```bash
cd d:\Documents\RPG
npx vite --host
```

### Użyj innego portu:
```bash
npx vite --port 3000
```

## Co sprawdzić w konsoli DevTools:

1. **Czy są błędy importu?**
   - `Failed to resolve module`
   - `Cannot find module`

2. **Czy Vue się załadował?**
   - Powinno być: `[vite] connected.`

3. **Czy kliknięcie wywołuje funkcję?**
   - Powinno być: `startGame called`

4. **Czy router działa?**
   - Powinno być: `Session storage set, navigating to /question`

## Kontakt z debugowaniem

Jeśli nadal nie działa, prześlij:
1. Wersję Node.js (`node --version`)
2. Błędy z konsoli przeglądarki (F12)
3. Błędy z terminala
4. Screenshot problemu

---

**Najszybszy test:** Otwórz `test.html` w przeglądarce!
