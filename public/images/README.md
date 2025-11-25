# 📸 Instrukcja dodawania obrazów tła

## ✅ Co zostało zrobione:

1. **Dodane pola w gameData.js:**
   - `startScreenBg` - tło dla ekranu powitalnego
   - `backgroundImage` - tło dla każdego z 30 etapów

2. **Zaktualizowane komponenty:**
   - `StartScreen.vue` - dynamiczne tło z obrazka lub gradient
   - `QuestionScreen.vue` - tło zmienia się dla każdego pytania

3. **Utworzony folder:**
   - `public/images/` - tu wrzucaj swoje obrazy

4. **Przygotowane prompty:**
   - `IMAGE_PROMPTS.md` - zawiera 31 promptów do generowania obrazów

---

## 🎨 Jak dodać obrazy:

### Krok 1: Wygeneruj obrazy
Użyj jednego z narzędzi:
- **ChatGPT** (DALL-E 3) - najłatwiejsze
- **Midjourney** - najlepsze jakościowo
- **Stable Diffusion** - darmowe, lokalnie

Prompty znajdziesz w pliku `IMAGE_PROMPTS.md`

### Krok 2: Zapisz pliki
Wygenerowane obrazy zapisz w folderze:
```
d:\Documents\RPG\public\images\
```

Z nazwami:
- `start-screen.jpg` - ekran powitalny
- `stage-01.jpg` - etap 1
- `stage-02.jpg` - etap 2
- ... (do `stage-30.jpg`)

### Krok 3: Odśwież stronę
Po dodaniu obrazów po prostu odśwież przeglądarkę (F5) - obrazy załadują się automatycznie!

---

## 📋 Lista plików do wygenerowania:

- [ ] start-screen.jpg
- [ ] stage-01.jpg (Przybycie do Ośrodka)
- [ ] stage-02.jpg (Analiza ruchu)
- [ ] stage-03.jpg (Wybór projektu)
- [ ] stage-04.jpg (Przygotowanie danych)
- [ ] stage-05.jpg (Testowanie)
- [ ] stage-06.jpg (Decyzje etyczne)
- [ ] stage-07.jpg (Komunikacja)
- [ ] stage-08.jpg (Testowanie w mieście)
- [ ] stage-09.jpg (Rozbudowa)
- [ ] stage-10.jpg (Feedback)
- [ ] stage-11.jpg (Anomalie)
- [ ] stage-12.jpg (Bias)
- [ ] stage-13.jpg (Cyberatak)
- [ ] stage-14.jpg (Serwerownia)
- [ ] stage-15.jpg (Prezentacja)
- [ ] stage-16.jpg (Przestępczość)
- [ ] stage-17.jpg (Awaria autobusu)
- [ ] stage-18.jpg (Bunt maszyn)
- [ ] stage-19.jpg (Prywatność)
- [ ] stage-20.jpg (Protesty)
- [ ] stage-21.jpg (Ekologia)
- [ ] stage-22.jpg (Black Box)
- [ ] stage-23.jpg (Współpraca miast)
- [ ] stage-24.jpg (Empatia AI)
- [ ] stage-25.jpg (Awaria prądu)
- [ ] stage-26.jpg (Ewolucja EVA)
- [ ] stage-27.jpg (Sabotaż)
- [ ] stage-28.jpg (Burza)
- [ ] stage-29.jpg (Most)
- [ ] stage-30.jpg (Finał)

---

## 💡 Wskazówki:

1. **Nie musisz robić wszystkich naraz** - dodaj kilka, przetestuj, dodaj kolejne
2. **Gradient jest zawsze aktywny** - nawet bez obrazka będzie ładnie
3. **Obrazy są opcjonalne** - gra działa bez nich (z samym gradientem)
4. **Zmień rozmiar jeśli trzeba** - optymalna wielkość to 1920x1080 lub 1280x720
5. **Format JPG** jest lżejszy niż PNG - lepszy do tła

---

## 🔧 Testowanie:

```bash
# Uruchom serwer
npm run dev

# Otwórz w przeglądarce
http://localhost:3000

# Dodaj obraz do public/images/
# Odśwież stronę (F5)
# Tło powinno się zmienić!
```

---

## ❓ Pytania?

- **Czy muszę mieć wszystkie 31 obrazów?** - Nie, dodawaj stopniowo
- **Co jeśli nie ma obrazka?** - Wyświetli się gradient (jak teraz)
- **Mogę zmienić nazwy plików?** - Tak, ale musisz też zmienić w gameData.js
- **Jaki format?** - JPG lub PNG, najlepiej JPG (mniejszy)
- **Jaki rozmiar?** - 1920x1080 idealnie, ale 1280x720 też OK

---

Powodzenia z generowaniem obrazów! 🚀
