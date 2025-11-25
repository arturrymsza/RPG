<template>
  <div 
    class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 relative bg-cover bg-center"
    :style="backgroundStyle"
  >
    <!-- Nakładka gradientu dla lepszej czytelności -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/40 to-indigo-900/40 animate-fade-in" :key="'overlay-' + currentStageIndex"></div>
    
    <div class="max-w-4xl mx-auto py-8 relative z-10">
      <!-- Header z postepem -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
          <div class="text-white">
            <p class="text-sm opacity-75">Gracz:</p>
            <p class="text-xl font-bold">{{ playerName }}</p>
          </div>
          <div class="text-right text-white">
            <p class="text-sm opacity-75">Aktualny wynik:</p>
            <p class="text-3xl font-bold text-yellow-400">{{ totalScore }} pkt</p>
          </div>
        </div>
        
        <!-- Progress Bar -->
        <div class="relative">
          <div class="flex justify-between text-xs text-blue-200 mb-1">
            <span>Etap {{ currentStageIndex + 1 }} / 30</span>
            <span>{{ Math.round(((currentStageIndex + 1) / 30) * 100) }}%</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 transition-all duration-500 ease-out"
              :style="{ width: `${((currentStageIndex + 1) / 30) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Pytanie -->
      <div 
        v-if="currentQuestion" 
        class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white border-opacity-20 mb-6 animate-fade-in"
        :key="currentStageIndex"
      >
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-white mb-4">
            {{ currentQuestion.title }}
          </h2>
          <p class="text-blue-100 leading-relaxed text-lg">
            {{ currentQuestion.description }}
          </p>
        </div>

        <!-- Odpowiedzi -->
        <div class="space-y-4">
          <button
            v-for="(answer, index) in currentQuestion.answers"
            :key="index"
            @click="selectAnswer(answer)"
            :disabled="answerSelected"
            class="w-full text-left p-5 rounded-xl transition-all transform hover:scale-102 disabled:cursor-not-allowed group relative overflow-hidden"
            :class="getAnswerClass(answer, index)"
          >
            <!-- Background gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            
            <!-- Content -->
            <div class="relative flex items-start">
              <span class="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 font-bold text-white">
                {{ String.fromCharCode(65 + index) }}
              </span>
              <span class="flex-1 text-white">
                {{ answer.text }}
              </span>
              
              <!-- Points reveal -->
              <span v-if="answerSelected && selectedAnswer === answer" class="ml-4 font-bold text-yellow-300 animate-bounce">
                {{ answer.points > 0 ? '+' : '' }}{{ answer.points }} pkt
              </span>
            </div>
          </button>
        </div>

        <!-- Przycisk Next -->
        <div v-if="answerSelected" class="mt-8 text-center">
          <button
            @click.stop="nextQuestion"
            type="button"
            class="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            {{ currentStageIndex < 29 ? 'Nastepne pytanie →' : 'Zobacz wyniki 🏆' }}
          </button>
          <!-- Debug: Czy przycisk jest widoczny -->
          <p class="text-xs text-gray-400 mt-2">
            [DEBUG] Przycisk widoczny | answerSelected: {{ answerSelected }} | Kliknij mnie!
          </p>
        </div>
      </div>

      <!-- Fun fact / Tip -->
      <div class="bg-black bg-opacity-30 rounded-xl p-4 text-center">
        <p class="text-blue-200 text-sm">
          💡 Wskazowka: Wszystkie odpowiedzi sa poprawne, ale niektore sa mądrzejsze niz inne!
        </p>
        <!-- Debug info (usun w produkcji) -->
        <p class="text-xs text-gray-400 mt-2">
          Debug: Etap {{ currentStageIndex }}, Odpowiedz: {{ answerSelected ? 'TAK' : 'NIE' }}, 
          Odpowiedziane: {{ Array.from(answeredQuestions).join(', ') || 'brak' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { updatePlayerScore } from '../firebase';
import gameData from '../data/gameData';

const router = useRouter();
const playerName = ref('');
const currentStageIndex = ref(0);
const totalScore = ref(0);
const answerSelected = ref(false);
const selectedAnswer = ref(null);
const answeredQuestions = ref(new Set()); // Śledź które pytania zostały już odpowiedziane

const currentQuestion = computed(() => {
  return gameData.stages[currentStageIndex.value];
});

// Tło dla aktualnego pytania
const backgroundStyle = computed(() => {
  const stage = gameData.stages[currentStageIndex.value];
  if (stage && stage.backgroundImage) {
    return {
      backgroundImage: `url(${stage.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }
  return {};
});

onMounted(() => {
  // Pobierz dane gracza z sessionStorage
  playerName.value = sessionStorage.getItem('playerName') || 'Gracz';
  currentStageIndex.value = parseInt(sessionStorage.getItem('currentStage') || '0');
  totalScore.value = parseInt(sessionStorage.getItem('totalScore') || '0');

  // Sprawdz czy gracz jest zalogowany
  if (!sessionStorage.getItem('playerName')) {
    router.push('/');
    return;
  }
  
  // Wczytaj które pytania zostały już odpowiedziane
  const answered = sessionStorage.getItem('answeredQuestions');
  if (answered) {
    answeredQuestions.value = new Set(JSON.parse(answered));
  }
  
  console.log('QuestionScreen mounted:', {
    playerName: playerName.value,
    stage: currentStageIndex.value,
    score: totalScore.value,
    answeredQuestions: Array.from(answeredQuestions.value),
    currentQuestionAnswered: answeredQuestions.value.has(currentStageIndex.value)
  });
});

const getAnswerClass = (answer, index) => {
  if (!answerSelected.value) {
    return 'bg-white bg-opacity-10 hover:bg-opacity-20 border-2 border-transparent hover:border-blue-400';
  }
  
  if (selectedAnswer.value === answer) {
    if (answer.points >= 150) {
      return 'bg-green-600 bg-opacity-80 border-2 border-green-400';
    } else if (answer.points >= 50) {
      return 'bg-blue-600 bg-opacity-80 border-2 border-blue-400';
    } else if (answer.points >= 0) {
      return 'bg-yellow-600 bg-opacity-80 border-2 border-yellow-400';
    } else {
      return 'bg-red-600 bg-opacity-80 border-2 border-red-400';
    }
  }
  
  return 'bg-white bg-opacity-5 border-2 border-transparent opacity-50';
};

const selectAnswer = (answer) => {
  console.log('selectAnswer called:', { answer, answerSelected: answerSelected.value }); // Debug
  
  if (answerSelected.value) {
    console.log('Answer already selected for this question!');
    return;
  }
  
  // Sprawdź czy to pytanie zostało już odpowiedziane
  if (answeredQuestions.value.has(currentStageIndex.value)) {
    console.log('Question already answered!');
    return;
  }
  
  answerSelected.value = true;
  selectedAnswer.value = answer;
  
  // Dodaj punkty
  totalScore.value += answer.points;
  
  // Oznacz pytanie jako odpowiedziane
  answeredQuestions.value.add(currentStageIndex.value);
  
  // Zapisz stan
  sessionStorage.setItem('totalScore', totalScore.value.toString());
  sessionStorage.setItem('answeredQuestions', JSON.stringify(Array.from(answeredQuestions.value)));
  
  console.log('Answer selected:', {
    points: answer.points,
    newTotal: totalScore.value,
    questionId: currentStageIndex.value
  });
};

const nextQuestion = () => {
  console.log('🔥 nextQuestion CLICKED!', { 
    currentStage: currentStageIndex.value,
    totalScore: totalScore.value,
    answerSelected: answerSelected.value
  });
  
  // Zaktualizuj wynik w Firebase (nieblokujące!)
  updatePlayerScore(playerName.value, totalScore.value)
    .then(() => console.log('✅ Firebase score updated:', totalScore.value))
    .catch(error => console.warn('⚠️ Firebase error (non-blocking):', error));
  
  if (currentStageIndex.value < 29) {
    // Przejdz do nastepnego pytania
    currentStageIndex.value++;
    sessionStorage.setItem('currentStage', currentStageIndex.value.toString());
    
    // ZAWSZE resetuj stan odpowiedzi dla nowego pytania
    answerSelected.value = false;
    selectedAnswer.value = null;
    
    console.log('✅ Moved to next question:', currentStageIndex.value);
    console.log('New question state:', {
      answerSelected: answerSelected.value,
      questionId: currentStageIndex.value,
      questionTitle: gameData.stages[currentStageIndex.value].title
    });
  } else {
    // Koniec gry - przejdz do wyniku
    console.log('🏆 Game finished, going to results');
    router.push('/result');
  }
};
</script>

<style scoped>
.hover\:scale-102:hover {
  transform: scale(1.02);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
