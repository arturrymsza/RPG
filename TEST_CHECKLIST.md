# TEST CHECKLIST - ANTARES 2045

## Jak przetestować czy wszystko działa poprawnie

### ✅ Test 1: Rozpoczęcie gry
- [ ] Otwórz aplikację
- [ ] Wpisz imię (min 2 znaki)
- [ ] Kliknij "Rozpocznij Przygodę"
- [ ] **Oczekiwany wynik:** Przejście do Etapu 1
- [ ] **W konsoli (F12):** `startGame called`, `Session storage set`

### ✅ Test 2: Wybór odpowiedzi
- [ ] Na Etapie 1, kliknij dowolną odpowiedź (np. B)
- [ ] **Oczekiwany wynik:** 
  - Odpowiedź podświetla się na zielono/niebiesko
  - Pokazują się punkty (np. +150 pkt)
  - Pojawia się przycisk "Następne pytanie →"
- [ ] **W konsoli:** `selectAnswer called`, `Answer selected: {points: 150, ...}`

### ✅ Test 3: Ochrona przed wielokrotnym klikaniem
- [ ] Spróbuj kliknąć tę samą odpowiedź ponownie
- [ ] **Oczekiwany wynik:** Nic się nie dzieje, punkty się nie zmieniają
- [ ] **W konsoli:** `Answer already selected for this question!`

### ✅ Test 4: Przejście do następnego pytania
- [ ] Kliknij przycisk "Następne pytanie →"
- [ ] **Oczekiwany wynik:**
  - Przejście do Etapu 2
  - Numer etapu się zmienia (2 / 30)
  - Pasek postępu się przesuwa
  - Wszystkie odpowiedzi są aktywne (nie podświetlone)
  - Wynik się NIE zmienia (pozostaje np. 150 pkt)
- [ ] **W konsoli:** `nextQuestion called`, `Moved to next question: 1`
- [ ] **Debug w UI:** "Odpowiedz: NIE"

### ✅ Test 5: Kontynuacja gry
- [ ] Wybierz odpowiedź na Etapie 2
- [ ] Kliknij "Następne pytanie →"
- [ ] **Oczekiwany wynik:** 
  - Przejście do Etapu 3
  - Wynik się zwiększył (np. 150 + 200 = 350)
- [ ] **Debug w UI:** "Odpowiedziane: 0, 1"

### ✅ Test 6: Reset gry przez "Zagraj ponownie"
- [ ] Przejdź przez kilka etapów (np. 5)
- [ ] Wciśnij F5 (refresh strony)
- [ ] **Oczekiwany wynik:**
  - Jesteś na tym samym etapie (np. 5)
  - Wynik jest zachowany
- [ ] Przejdź do końca gry (30 etapów)
- [ ] Kliknij "Zagraj ponownie"
- [ ] **Oczekiwany wynik:**
  - Przejście do Etapu 1
  - Wynik = 0 pkt
  - Wszystkie odpowiedzi odblokowane
- [ ] **Debug w UI:** "Odpowiedziane: brak"

### ✅ Test 7: Pełen reset przez ekran startowy
- [ ] W trakcie gry (np. Etap 10)
- [ ] Kliknij przycisk "Ekran startowy" (z ResultScreen) LUB wejdź na / w URL
- [ ] **Oczekiwany wynik:**
  - Wrócenie do ekranu startowego
  - Imię gracza wyczyszczone
  - Session storage całkowicie pusty
- [ ] Rozpocznij nową grę
- [ ] **Oczekiwany wynik:** Gra zaczyna się od 0 pkt

### ✅ Test 8: Ranking Firebase (opcjonalny)
- [ ] Zakończ grę (30 etapów)
- [ ] **Oczekiwany wynik:**
  - Widzisz ekran wyników
  - Twoja pozycja w rankingu
  - Inni gracze (jeśli są)
- [ ] **W konsoli:** `Firebase score updated: [Twój wynik]`

### ✅ Test 9: Działanie bez Firebase
- [ ] Wyłącz internet
- [ ] Rozpocznij grę
- [ ] **Oczekiwany wynik:**
  - Gra działa normalnie
  - Punkty się liczą
  - Brak błędów krytycznych
- [ ] **W konsoli:** Mogą być warningi Firebase (to normalne)

### ✅ Test 10: Sprawdzenie sessionStorage
- [ ] W trakcie gry (np. Etap 5 z 500 pkt)
- [ ] Otwórz DevTools (F12) → Application/Storage → Session Storage
- [ ] **Oczekiwane wartości:**
  ```
  playerName: "Twoje imię"
  currentStage: "4" (bo indeks od 0)
  totalScore: "500"
  answeredQuestions: "[0,1,2,3,4]"
  gameStarted: "2025-11-23T..."
  ```

---

## 🐛 Jeśli coś nie działa:

1. **Otwórz konsolę (F12)** i sprawdź błędy
2. **Sprawdź logi** - wszystkie funkcje mają `console.log`
3. **Sprawdź Debug w UI** - pod pytaniem jest linia debugowania
4. **Wyczyść cache** - Ctrl+Shift+R (hard refresh)
5. **Wyczyść sessionStorage** - Application → Session Storage → Clear

---

## ✅ Wszystko działa jeśli:

- [x] Gra przechodzi przez wszystkie 30 etapów
- [x] Punkty sumują się poprawnie
- [x] Nie można klikać odpowiedzi wielokrotnie
- [x] Przycisk "Następne pytanie" działa
- [x] Reset gry czyści wszystko
- [x] Ranking się aktualizuje (jeśli Firebase działa)

**Status: PASS ✅** | **Status: FAIL ❌**

---

**Ostatnia aktualizacja:** 23.11.2025
**Wersja:** 1.1 (po naprawie bug #5)
