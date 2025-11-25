# Naprawione błędy - 23.11.2025 (Update 2)

## AKTUALIZACJA: Naprawiono problem z przechodzeniem do następnego pytania

### Bug #5: ✅ Nie przechodzi do następnego pytania po kliknięciu przycisku
**Problem:** Po kliknięciu "Następne pytanie →" aplikacja nie przechodziła do kolejnego pytania.

**Przyczyna:** 
W funkcji `nextQuestion()` był błąd logiki:
```javascript
// BŁĄD - To blokowało nowe pytania!
if (answeredQuestions.value.has(currentStageIndex.value)) {
  answerSelected.value = true;  // <= To blokowało UI
}
```

**Rozwiązanie:**
- Usunięto sprawdzanie `answeredQuestions` w `nextQuestion()`
- ZAWSZE resetujemy `answerSelected = false` dla nowego pytania
- Ochrona przed wielokrotnym klikaniem pozostaje w `selectAnswer()`
- Usunięto niepotrzebne sprawdzanie w `onMounted()`

**Zmienione pliki:**
- `src/views/QuestionScreen.vue`

---

## Problemy, które zostały rozwiązane wcześniej:

### 1. ✅ Wielokrotne klikanie odpowiedzi
**Problem:** Gracz mógł klikać tę samą odpowiedź wielokrotnie i punkty się sumowały.

**Rozwiązanie:**
- Dodano `answeredQuestions` Set do śledzenia, które pytania już zostały odpowiedziane
- Zapis do sessionStorage: `answeredQuestions`
- Funkcja `selectAnswer()` sprawdza czy pytanie było już odpowiedziane
- Dodano logi debugowania

### 2. ✅ Brak przejścia do następnego pytania
**Problem:** Po wyborze odpowiedzi nie można było przejść dalej.

**Rozwiązanie:**
- Poprawiono logikę w `nextQuestion()`
- Reset `answerSelected` i `selectedAnswer` dla nowego pytania
- Sprawdzanie czy nowe pytanie było już odpowiedziane

### 3. ✅ Punkty sumują się po ponownym uruchomieniu
**Problem:** Przy ponownym uruchomieniu gry punkty z poprzedniej sesji się dodawały.

**Rozwiązanie:**
- `StartScreen`: Pełne wyczyszczenie sessionStorage (`sessionStorage.clear()`)
- Reset wszystkich wartości przed nową grą
- Dodano timestamp rozpoczęcia gry

### 4. ✅ Przycisk "Zagraj ponownie" nie resetował gry
**Problem:** Po kliknięciu "Zagraj ponownie" stan gry nie był czyszczony.

**Rozwiązanie:**
- `ResultScreen.playAgain()`: Czyszczenie sessionStorage
- Reset `answeredQuestions` do pustej tablicy
- Inicjalizacja Firebase z zerowymi punktami

## Zmienione pliki:

1. **src/views/StartScreen.vue**
   - Dodano `sessionStorage.clear()` na początku nowej gry
   - Dodano `gameStarted` timestamp

2. **src/views/QuestionScreen.vue**
   - Dodano `answeredQuestions` Set
   - Ochrona przed wielokrotnym klikaniem
   - Logi debugowania
   - Zapisywanie stanu do sessionStorage

3. **src/views/ResultScreen.vue**
   - Import `savePlayerScore`
   - Poprawiony `playAgain()` - pełny reset
   - Logi debugowania

## Jak przetestować:

1. **Otwórz konsolę** (F12)
2. **Rozpocznij grę** - wpisz imię i kliknij Start
3. **Wybierz odpowiedź** - powinna podświetlić się i pokazać punkty
4. **Spróbuj kliknąć ponownie** - nic się nie powinno stać
5. **Kliknij "Następne pytanie"** - powinno przejść do pytania 2
6. **Po ukończeniu kliknij "Zagraj ponownie"** - punkty powinny wyzerować się

## Logi w konsoli (Debug):

```
startGame called
playerName: [imię]
Session storage set, navigating to /question
QuestionScreen mounted: {playerName, stage: 0, score: 0, answeredQuestions: []}
selectAnswer called: {answer, answerSelected: false}
Answer selected: {points: 150, newTotal: 150, questionId: 0}
nextQuestion called: {currentStage: 0}
Firebase score updated: 150
Moved to next question: 1
```

## sessionStorage structure:

```javascript
{
  playerName: "Gracz1",
  currentStage: "0",
  totalScore: "0",
  answeredQuestions: "[0,1,2]", // JSON array
  gameStarted: "2025-11-23T..."
}
```

---

**Status:** ✅ Wszystkie błędy naprawione
**Data:** 23.11.2025
