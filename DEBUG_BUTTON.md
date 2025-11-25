# Debug - Przycisk "Następne pytanie"

## Krok 1: Otwórz test-button.html
```bash
# Otwórz plik w przeglądarce:
d:\Documents\RPG\test-button.html
```

## Krok 2: Sprawdź czy działa:
- [ ] Kliknij odpowiedź → podświetla się
- [ ] Pojawia się zielony przycisk "Następne pytanie"
- [ ] Kliknij przycisk → przechodzi do pytania 2
- [ ] Logi pokazują "nextQuestion CLICKED!"

✅ **Jeśli to działa** = mechanika Vue jest OK, problem z integracją  
❌ **Jeśli to nie działa** = problem z przeglądarką

## Krok 3: Sprawdź główną aplikację

### W konsoli (F12) zobacz:
```
Po kliknięciu odpowiedzi:
✅ selectAnswer called: {...}
✅ Answer selected: {points: 150, ...}

Po kliknięciu "Następne pytanie":
✅ 🔥 nextQuestion CLICKED!
✅ ✅ Moved to next question: 1
✅ New question state: {...}
```

### Co może być źle:

**1. Nie widzisz `nextQuestion CLICKED!`**
- Kliknięcie nie dociera do funkcji
- Problem: event listener
- Sprawdź czy przycisk jest widoczny

**2. Widzisz `nextQuestion CLICKED!` ale nie przechodzi**
- Funkcja się wykonuje ale nie zmienia pytania
- Problem: logika w `nextQuestion()`
- Sprawdź wartość `currentStageIndex`

**3. Przycisk "Następne pytanie" nie jest widoczny**
- Problem: `answerSelected` nie zmienia się na true
- Sprawdź funkcję `selectAnswer()`
- Zobacz debug info pod pytaniem

## Krok 4: Debug info w UI

W aplikacji pod pytaniem widzisz:
```
Debug: Etap X, Odpowiedź: TAK/NIE, Odpowiedziane: 0, 1, 2
```

Po wyborze odpowiedzi:
- "Odpowiedź: TAK" ✅
- "Odpowiedziane: 0" ✅

Po kliknięciu "Następne pytanie":
- Etap zmienia się z 0 na 1 ✅
- "Odpowiedź: NIE" (reset dla nowego pytania) ✅

## Krok 5: sessionStorage

DevTools → Application → Session Storage:
```javascript
currentStage: "0"  // Powinno się zwiększać: 0, 1, 2...
totalScore: "150"  // Powinno się sumować
answerSelected: "false"  // NIE jest zapisywane (to stan lokalny)
```

## Krok 6: Jeśli nadal nie działa

### Test 1: Usuń Firebase całkowicie
W `QuestionScreen.vue` zakomentuj:
```javascript
// updatePlayerScore(playerName.value, totalScore.value)
//   .then(...)
//   .catch(...);
```

### Test 2: Uproszczona wersja nextQuestion
```javascript
const nextQuestion = () => {
  console.log('CLICKED!');
  alert('Przycisk działa!');
  currentStageIndex.value++;
};
```

### Test 3: Sprawdź czy Vue reactive działa
W konsoli wpisz:
```javascript
window.appData = app._instance.data
```
Potem możesz sprawdzać wartości

## Krok 7: Ostateczny test - Hard reset

```bash
# Wyczyść wszystko:
cd d:\Documents\RPG
rm -rf node_modules
rm package-lock.json

# Zainstaluj ponownie:
npm install

# Wyczyść cache przeglądarki:
Ctrl + Shift + Delete → Wyczyść wszystko

# Uruchom:
npm run dev
```

---

## Quick Fix - Możesz spróbować:

### 1. Dodaj inline onclick jako backup:
```vue
<button 
  @click="nextQuestion"
  onclick="console.log('Native click works!')"
>
```

### 2. Użyj v-on zamiast @:
```vue
<button v-on:click="nextQuestion">
```

### 3. Dodaj ref i wywołaj ręcznie:
```vue
<button ref="nextBtn" @click="nextQuestion">

// W script:
const nextBtn = ref(null);
// Możesz potem: nextBtn.value.click()
```

---

**Ostateczne rozwiązanie:** Zobacz `test-button.html` - tam wszystko działa poprawnie!
