<template>
  <div 
    class="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 relative bg-cover bg-center"
    :style="backgroundStyle"
  >
    <!-- Nakładka gradientu dla lepszej czytelności -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40"></div>
    
    <div class="max-w-2xl w-full relative z-10">
      <!-- Logo i Tytul -->
      <div class="text-center mb-8 animate-pulse-slow">
        <!-- Napis prezentuje -->
        <p class="text-xl font-semibold text-white mb-3 tracking-wide">
          ARTUR RYMSZA prezentuje:
        </p>
        <!-- Główny tytuł z czcionką Orbitron -->
        <h1 class="text-6xl font-bold text-white mb-2 tracking-wider" style="font-family: 'Orbitron', sans-serif;">
          {{ gameTitle }}
        </h1>
        <p class="text-xl text-blue-300">{{ gameSubtitle }}</p>
        <div class="mt-4 text-sm text-blue-200">
          <p>🤖 30 etapów strategicznych decyzji AI</p>
          <p>🎯 Każda odpowiedź ma inną liczbę punktów</p>
          <p>🏆 Ranking graczy w czasie rzeczywistym</p>
        </div>
      </div>

      <!-- Formularz -->
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white border-opacity-20">
        <div class="space-y-6">
          <div>
            <label for="playerName" class="block text-white text-lg font-semibold mb-2">
              Wprowadź swoją klasę:
            </label>
            <input
              id="playerName"
              v-model="playerName"
              type="text"
              maxlength="20"
              placeholder="Twoja klasa..."
              class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-200 border-2 border-transparent focus:border-blue-400 focus:outline-none transition-all"
              @keyup.enter="startGame"
            />
            <p v-if="errorMessage" class="mt-2 text-red-300 text-sm">
              {{ errorMessage }}
            </p>
          </div>

          <button
            @click="startGame"
            :disabled="!playerName.trim()"
            class="w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            :class="playerName.trim() 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg' 
              : 'bg-gray-600 text-gray-300'"
          >
            🚀 Rozpocznij Przygode
          </button>

          <!-- Instrukcja -->
          <div class="mt-6 p-4 bg-black bg-opacity-30 rounded-lg">
            <h3 class="text-white font-semibold mb-2">📋 Zasady gry:</h3>
            <ul class="text-blue-100 text-sm space-y-1">
              <li>• Przejdziesz przez 30 etapów misji ANTARES 2045</li>
              <li>• Każde pytanie ma 4 odpowiedzi - wszystkie poprawne!</li>
              <li>• Każda odpowiedź daje inną liczbę punktów</li>
              <li>• Twój wynik zostanie zapisany w rankingu</li>
              <li>• Decyduj mądrze - miasto liczy na Ciebie!</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stopka -->
      <div class="text-center mt-6 text-blue-200 text-sm">
        <p>Powered by Vue.js + Firebase + TailwindCSS</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { savePlayerScore } from '../firebase';
import gameData from '../data/gameData';

const router = useRouter();
const playerName = ref('');
const errorMessage = ref('');
const gameTitle = gameData.title;
const gameSubtitle = gameData.subtitle;

// Tło dla ekranu startowego
const backgroundStyle = computed(() => {
  if (gameData.startScreenBg) {
    return {
      backgroundImage: `url(${gameData.startScreenBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }
  return {};
});

const startGame = () => {
  console.log('startGame called'); // Debug
  console.log('playerName:', playerName.value); // Debug
  
  if (!playerName.value.trim()) {
    errorMessage.value = 'Prosze wpisac imie!';
    return;
  }

  if (playerName.value.trim().length < 2) {
    errorMessage.value = 'Imie musi miec przynajmniej 2 znaki!';
    return;
  }

  try {
    // WYCZYSC caly session storage przed nowa gra
    sessionStorage.clear();
    
    // Zapisz nowe dane gracza
    sessionStorage.setItem('playerName', playerName.value.trim());
    sessionStorage.setItem('currentStage', '0');
    sessionStorage.setItem('totalScore', '0');
    sessionStorage.setItem('gameStarted', new Date().toISOString());
    
    console.log('Session storage set, navigating to /question'); // Debug
    
    // Inicjalizacja gracza w Firebase (nie blokujaca)
    savePlayerScore(playerName.value.trim(), 0).catch(err => {
      console.warn('Firebase save warning (non-blocking):', err);
    });
    
    // Przejdz do pierwszego pytania
    router.push('/question');
  } catch (error) {
    errorMessage.value = 'Blad uruchamiania gry. Sprobuj ponownie.';
    console.error('Error starting game:', error);
  }
};
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
