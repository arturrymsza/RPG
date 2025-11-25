<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
    <div class="max-w-6xl mx-auto py-8">
      <!-- Header z wynikiem gracza -->
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold text-white mb-4 animate-pulse-slow">
          🎉 Gratulacje, {{ playerName }}! 🎉
        </h1>
        <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto mb-6">
          <p class="text-2xl font-semibold mb-2">Twoj koncowy wynik:</p>
          <p class="text-7xl font-bold">{{ totalScore }}</p>
          <p class="text-xl mt-2">punktow</p>
        </div>

        <!-- Ocena wyniku -->
        <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto mb-8">
          <h2 class="text-3xl font-bold text-white mb-2">{{ resultCategory.title }}</h2>
          <p class="text-xl text-blue-200">{{ resultCategory.description }}</p>
        </div>
      </div>

      <!-- Ranking -->
      <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white border-opacity-20">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-bold text-white">🏆 Ranking Graczy</h2>
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-blue-200 text-sm">Na zywo</span>
          </div>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p class="text-white mt-4">Ladowanie rankingu...</p>
        </div>

        <!-- Ranking List -->
        <div v-else-if="leaderboard.length > 0" class="space-y-3">
          <div
            v-for="(player, index) in leaderboard"
            :key="player.id"
            class="flex items-center justify-between p-4 rounded-xl transition-all"
            :class="getPlayerRowClass(player, index)"
          >
            <!-- Pozycja i medal -->
            <div class="flex items-center space-x-4 flex-1">
              <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl"
                   :class="getRankBadgeClass(index)">
                {{ index < 3 ? getMedal(index) : index + 1 }}
              </div>
              
              <!-- Nazwa gracza -->
              <div class="flex-1">
                <p class="font-bold text-lg" :class="player.name === playerName ? 'text-yellow-300' : 'text-white'">
                  {{ player.name }}
                  <span v-if="player.name === playerName" class="ml-2 text-sm">(Ty)</span>
                </p>
                <p class="text-xs text-blue-200">{{ formatTimestamp(player.timestamp) }}</p>
              </div>

              <!-- Wynik -->
              <div class="text-right">
                <p class="text-2xl font-bold" :class="player.name === playerName ? 'text-yellow-300' : 'text-white'">
                  {{ player.score }}
                </p>
                <p class="text-xs text-blue-200">punktow</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Brak graczy -->
        <div v-else class="text-center py-12">
          <p class="text-white text-xl">Brak graczy w rankingu</p>
        </div>
      </div>

      <!-- Przyciski akcji -->
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="playAgain"
          class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          🔄 Zagraj ponownie
        </button>
        <button
          @click="goToStart"
          class="px-8 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all border-2 border-white border-opacity-30"
        >
          🏠 Ekran startowy
        </button>
      </div>

      <!-- Statystyki -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-black bg-opacity-30 rounded-xl p-4 text-center">
          <p class="text-blue-200 text-sm mb-1">Ukonczone etapy</p>
          <p class="text-white text-3xl font-bold">30 / 30</p>
        </div>
        <div class="bg-black bg-opacity-30 rounded-xl p-4 text-center">
          <p class="text-blue-200 text-sm mb-1">Twoja pozycja</p>
          <p class="text-white text-3xl font-bold">{{ playerRank }}</p>
        </div>
        <div class="bg-black bg-opacity-30 rounded-xl p-4 text-center">
          <p class="text-blue-200 text-sm mb-1">Liczba graczy</p>
          <p class="text-white text-3xl font-bold">{{ leaderboard.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { subscribeToLeaderboard, savePlayerScore } from '../firebase';
import gameData from '../data/gameData';

const router = useRouter();
const playerName = ref('');
const totalScore = ref(0);
const leaderboard = ref([]);
const loading = ref(true);
let unsubscribe = null;

const resultCategory = computed(() => {
  const score = totalScore.value;
  return gameData.scoreRanges.find(range => score >= range.min && score <= range.max) 
    || gameData.scoreRanges[0];
});

const playerRank = computed(() => {
  const index = leaderboard.value.findIndex(p => p.name === playerName.value);
  return index !== -1 ? index + 1 : '-';
});

onMounted(() => {
  // Pobierz dane gracza
  playerName.value = sessionStorage.getItem('playerName') || 'Gracz';
  totalScore.value = parseInt(sessionStorage.getItem('totalScore') || '0');

  // Sprawdz czy gracz ukonczyl gre
  if (!sessionStorage.getItem('playerName')) {
    router.push('/');
    return;
  }

  // Subskrybuj ranking w czasie rzeczywistym
  unsubscribe = subscribeToLeaderboard((players) => {
    leaderboard.value = players;
    loading.value = false;
  });
});

onUnmounted(() => {
  // Anuluj subskrypcje
  if (unsubscribe) {
    unsubscribe();
  }
});

const getMedal = (index) => {
  const medals = ['🥇', '🥈', '🥉'];
  return medals[index] || '';
};

const getRankBadgeClass = (index) => {
  if (index === 0) return 'bg-yellow-500 text-white';
  if (index === 1) return 'bg-gray-400 text-white';
  if (index === 2) return 'bg-orange-600 text-white';
  return 'bg-blue-600 bg-opacity-50 text-white';
};

const getPlayerRowClass = (player, index) => {
  if (player.name === playerName.value) {
    return 'bg-yellow-500 bg-opacity-30 border-2 border-yellow-400 scale-105';
  }
  if (index < 3) {
    return 'bg-white bg-opacity-20';
  }
  return 'bg-white bg-opacity-10';
};

const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleString('pl-PL', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

const playAgain = () => {
  console.log('Play again - resetting game'); // Debug
  
  const currentPlayer = sessionStorage.getItem('playerName');
  
  // Wyczysc WSZYSTKIE dane sesji
  sessionStorage.clear();
  
  // Przywroc tylko imie gracza
  if (currentPlayer) {
    sessionStorage.setItem('playerName', currentPlayer);
  }
  
  // Ustaw nowa gre
  sessionStorage.setItem('currentStage', '0');
  sessionStorage.setItem('totalScore', '0');
  sessionStorage.setItem('answeredQuestions', '[]');
  sessionStorage.setItem('gameStarted', new Date().toISOString());
  
  // Zainicjuj Firebase z zerowymi punktami
  if (currentPlayer) {
    savePlayerScore(currentPlayer, 0).catch(err => {
      console.warn('Firebase reset warning:', err);
    });
  }
  
  // Przejdz do pierwszego pytania
  router.push('/question');
};

const goToStart = () => {
  console.log('Go to start - clearing all data'); // Debug
  
  // Wyczysc cala sesje
  sessionStorage.clear();
  
  // Przejdz do ekranu startowego
  router.push('/');
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
