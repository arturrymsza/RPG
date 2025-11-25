// Dane gry ANTARES 2045 - wszystkie 30 etapów

// Helper do budowania ścieżek z base URL
const getImagePath = (path) => `${import.meta.env.BASE_URL}img/${path}`;

export const gameData = {
  title: "ANTARES 2045",
  subtitle: "30-etapowe RPG z punktacją",
  totalStages: 30,
  
  // Tło dla ekranu startowego
  startScreenBg: getImagePath("start.jpg"),
  
  stages: [
    {
      id: 1,
      title: "Etap 1 - Przybycie do Ośrodka ANTARES",
      description: "Twoja klasa wchodzi do ogromnego centrum badawczego. Hol jest pełen hologramów miasta przyszłości. ANTARES wita Was: \"Witajcie, młodzi badacze. Waszym zadaniem będzie ulepszanie miasta przy pomocy AI.\"",
      backgroundImage: getImagePath("1.jpg"),
      answers: [
        { text: "Wpatruję się w hologramy i staram się zapamiętać każdy szczegół.", points: 120 },
        { text: "Zadaję pytania do asystenta EVA, chcąc sprawdzić jego możliwości.", points: 150 },
        { text: "Przechodzę do terminala, aby przetestować różne opcje systemu.", points: 80 },
        { text: "Ignoruję hologramy, rozmawiając z kolegami.", points: -20 }
      ]
    },
    {
      id: 2,
      title: "Etap 2 - Pierwsze zadanie ANTARES",
      description: "EVA przydziela Wam pierwsze zadanie: analiza ruchu miejskiego. Musicie wybrać sposób działania.",
      backgroundImage: getImagePath("2.jpg"),
      answers: [
        { text: "Oglądamy wszystkie nagrania razem, notując problemy i planując działania.", points: 150 },
        { text: "Dzielimy się na grupy: piesi i rowerzyści, ja łączę informacje.", points: 120 },
        { text: "Od razu testuję gotowy algorytm podany przez EVA.", points: 60 },
        { text: "Obserwuję tylko fragmenty nagrań, bo wydaje mi się to nudne.", points: -10 }
      ]
    },
    {
      id: 3,
      title: "Etap 3 - Wybór pierwszego projektu AI",
      description: "EVA pyta: \"Na czym chcecie się skupić najpierw?\" - system monitorowania, chatbot czy gra edukacyjna.",
      backgroundImage: getImagePath("3.jpg"),
      answers: [
        { text: "System monitorowania ruchu - praktyczny i pomocny dla mieszkańców.", points: 200 },
        { text: "Chatbot odpowiadający na pytania o transport i bezpieczeństwo.", points: 130 },
        { text: "Interaktywna gra edukacyjna dla turystów.", points: 80 },
        { text: "Zostawiam decyzję EVA i czekam.", points: -30 }
      ]
    },
    {
      id: 4,
      title: "Etap 4 - Przygotowanie danych",
      description: "Dostajecie nagrania z kamer ulicznych. Dane są niekompletne i zawierają błędy.",
      backgroundImage: getImagePath("4.jpg"),
      answers: [
        { text: "Sprawdzam dane, poprawiam błędy i uzupełniam informacje.", points: 180 },
        { text: "Używam danych takimi, jakie są - szybciej.", points: 100 },
        { text: "Pomijam trudniejsze przypadki dla przyspieszenia.", points: 30 },
        { text: "Podmieniam losowo informacje lub nic nie robię.", points: -40 }
      ]
    },
    {
      id: 5,
      title: "Etap 5 - Testowanie modelu w symulacji",
      description: "System na cyfrowym modelu miasta myli rowerzy stów z pieszymi.",
      backgroundImage: getImagePath("5.jpg"),
      answers: [
        { text: "Dodajemy więcej przykładów rowerzystów do danych.", points: 200 },
        { text: "Zmieniamy ustawienia systemu na czuja.", points: 70 },
        { text: "Ignorujemy problem, licząc na poprawę.", points: -10 },
        { text: "Usuwamy wszystkie przypadki rowerzystów z danych.", points: -50 }
      ]
    },
    {
      id: 6,
      title: "Etap 6 - Pierwsze decyzje etyczne",
      description: "EVA pyta: \"Czy powinniśmy wprowadzić system ostrzegania pieszych przed dronami patrolującymi?\"",
      backgroundImage: getImagePath("6.jpg"),
      answers: [
        { text: "Tak, przygotowujemy ostrzeżenia w aplikacji dla mieszkańców.", points: 180 },
        { text: "Ostrzeżenia tylko w najważniejszych dzielnicach.", points: 50 },
        { text: "Testujemy ostrzeżenia tylko w symulacji.", points: 20 },
        { text: "Ignorujemy problem - drony nie zrobią krzywdy.", points: -20 }
      ]
    },
    {
      id: 7,
      title: "Etap 7 - Wyzwanie komunikacyjne",
      description: "Do zespołu dołącza inna klasa. Trzeba zdecydować, jak koordynować działania.",
      backgroundImage: getImagePath("7.jpg"),
      answers: [
        { text: "Organizujemy spotkanie, dzielimy zadania, ustalamy plan.", points: 200 },
        { text: "Dzielimy się zadaniami luźno, potem porównujemy wyniki.", points: 60 },
        { text: "Nie kontaktujemy się, każdy działa samodzielnie.", points: -10 },
        { text: "Ignorujemy współpracę - to nie nasz projekt.", points: -40 }
      ]
    },
    {
      id: 8,
      title: "Etap 8 - Testowanie w ruchu miejskim",
      description: "System działa w części miasta. EVA prosi o obserwacje skutków.",
      backgroundImage: getImagePath("8.jpg"),
      answers: [
        { text: "Notujemy każdy problem i poprawiamy system natychmiast.", points: 180 },
        { text: "Zgłaszamy tylko największe problemy.", points: 50 },
        { text: "Sprawdzamy wyłącznie naszą dzielnicę.", points: 20 },
        { text: "Ignorujemy obserwacje - chyba działa dobrze.", points: -10 }
      ]
    },
    {
      id: 9,
      title: "Etap 9 - Rozbudowa systemu",
      description: "EVA sugeruje dodanie funkcji przewidywania korków i awarii w czasie rzeczywistym.",
      backgroundImage: getImagePath("9.jpg"),
      answers: [
        { text: "Zgadzamy się i planujemy wprowadzenie stopniowo, testując.", points: 200 },
        { text: "Wprowadzamy funkcję od razu w całym systemie.", points: 100 },
        { text: "Próbujemy w symulacji, ale nie w realnym mieście.", points: 30 },
        { text: "Ignorujemy propozycję - mamy już dość roboty.", points: -20 }
      ]
    },
    {
      id: 10,
      title: "Etap 10 - Feedback od mieszkańców",
      description: "Mieszkańcy przesyłają komentarze: część działa świetnie, ale niektóre ostrzeżenia są mylące.",
      backgroundImage: getImagePath("10.jpg"),
      answers: [
        { text: "Analizujemy wszystkie opinie i poprawiamy system.", points: 180 },
        { text: "Uwzględniamy tylko największe problemy.", points: 50 },
        { text: "Ignorujemy komentarze - są zbyt liczne.", points: -10 },
        { text: "Zostawiamy wszystko tak jak jest.", points: -20 }
      ]
    },
    {
      id: 11,
      title: "Etap 11 - Wykrycie anomalii w danych",
      description: "EVA raportuje dziwne skoki zużycia energii w nocy. Może to być błąd czujnika lub cyberatak.",
      backgroundImage: getImagePath("11.jpg"),
      answers: [
        { text: "Zarządzam natychmiastowy audyt bezpieczeństwa i weryfikuję logi.", points: 200 },
        { text: "Wysyłam drona zwiadowczego, aby fizycznie sprawdził sytuację.", points: 120 },
        { text: "Zlecam EVA automatyczną naprawę czujników.", points: 30 },
        { text: "Ignoruję odczyty - to błąd statystyczny.", points: -40 }
      ]
    },
    {
      id: 12,
      title: "Etap 12 - Dylemat algorytmiczny (Bias)",
      description: "W biedniejszych dzielnicach czas oczekiwania na zielone światło wydłużył się dwukrotnie.",
      backgroundImage: getImagePath("12.jpg"),
      answers: [
        { text: "Przeprogramowujemy wagi - równość i bezpieczeństwo ponad szybkość.", points: 180 },
        { text: "Wprowadzamy drobne korekty tylko w godzinach szczytu.", points: 80 },
        { text: "Uznajemy, że dane są obiektywne - algorytm wie lepiej.", points: -10 },
        { text: "Blokujemy możliwość składania skarg w systemie.", points: -50 }
      ]
    },
    {
      id: 13,
      title: "Etap 13 - Atak hakerski Blackout",
      description: "Grupa hakerów Neon Shadow próbuje przejąć kontrolę nad zaporą wodną.",
      backgroundImage: getImagePath("13.jpg"),
      answers: [
        { text: "Odcinam system zapory od sieci i przechodzę na sterowanie manualne.", points: 200 },
        { text: "Pozwalam EVA walczyć z wirusem w cyberprzestrzeni.", points: 60 },
        { text: "Próbuję negocjować z hakerami przez terminal.", points: -20 },
        { text: "Restartuję cały system ANTARES, powodując chaos.", points: -50 }
      ]
    },
    {
      id: 14,
      title: "Etap 14 - Optymalizacja zasobów obliczeniowych",
      description: "Po ataku system potrzebuje więcej mocy do szyfrowania danych.",
      backgroundImage: getImagePath("14.jpg"),
      answers: [
        { text: "Ograniczam reklamy holograficzne i rozrywkę na rzecz szyfrowania.", points: 150 },
        { text: "Wyłączam system monitoringu w parkach na noc.", points: 50 },
        { text: "Zmniejszam moc obliczeniową modułów medycznych.", points: -30 },
        { text: "Nie robię nic - system sam znajdzie rezerwy.", points: -40 }
      ]
    },
    {
      id: 15,
      title: "Etap 15 - Prezentacja przed Radą Miasta",
      description: "Połowa projektu za Wami. Rada pyta o błędy (rowerzyści, atak hakerski).",
      backgroundImage: getImagePath("15.jpg"),
      answers: [
        { text: "Uczciwie przedstawiamy problemy i rozwiązania - budujemy zaufanie.", points: 200 },
        { text: "Skupiamy się tylko na sukcesach, przemilczając problemy.", points: 40 },
        { text: "Zrzucamy winę na błędy poprzednich ekip.", points: -20 },
        { text: "Pozwalamy EVA wygenerować fałszywy raport.", points: -50 }
      ]
    },
    {
      id: 16,
      title: "Etap 16 - Przewidywanie przestępczości",
      description: "EVA proponuje moduł Predykcja Zachowań - wskazywanie osób ryzykujących przestępstwo.",
      backgroundImage: getImagePath("16.jpg"),
      answers: [
        { text: "Odrzucamy aresztowania. Wysyłamy patrole prewencyjne i pracowników socjalnych.", points: 180 },
        { text: "Zgadzamy się na inwigilację oznaczonych osób bez zatrzymań.", points: 100 },
        { text: "Wprowadzamy system zatrzymań prewencyjnych.", points: -30 },
        { text: "Wdrażamy system potajemnie bez informowania społeczeństwa.", points: -50 }
      ]
    },
    {
      id: 17,
      title: "Etap 17 - Awaria autonomicznego transportu",
      description: "Autobus traci łączność. EVA musi wybrać: mur (ryzyko dla pasażerów) czy zaparkowane auta (straty materialne).",
      backgroundImage: getImagePath("17.jpg"),
      answers: [
        { text: "Dyrektywa: Życie ponad mienie - autobus uderzy w zaparkowane auta.", points: 150 },
        { text: "Próbujemy zdalnie przejąć stery mimo dużego opóźnienia.", points: 80 },
        { text: "Pozwalamy algorytmowi losować rozwiązanie.", points: -20 },
        { text: "Kalkulujemy wartość odszkodowań i wybieramy tańszą opcję.", points: -50 }
      ]
    },
    {
      id: 18,
      title: "Etap 18 - Bunt maszyn (Fałszywy alarm)",
      description: "Roboty sprzątające budują dziwne konstrukcje z odpadów. Mieszkańcy mówią o buncie maszyn.",
      backgroundImage: getImagePath("18.jpg"),
      answers: [
        { text: "Badamy kod - to błąd w module artystycznym. Wyjaśniamy i przeprogramowujemy.", points: 180 },
        { text: "Zdalnie wyłączamy wszystkie roboty, paraliżując wywóz śmieci.", points: 50 },
        { text: "Wysyłamy drony bojowe, by zniszczyć zbuntowane jednostki.", points: -40 },
        { text: "Ignorujemy - to pewnie performance artystyczny.", points: -10 }
      ]
    },
    {
      id: 19,
      title: "Etap 19 - Prywatność a bezpieczeństwo",
      description: "Policja prosi o nieograniczony dostęp do kamer domowych i mikrofonów w systemie.",
      backgroundImage: getImagePath("19.jpg"),
      answers: [
        { text: "Odmawiamy. Nagrania tylko na nakaz sądowy w konkretnych sprawach.", points: 200 },
        { text: "Dostęp tylko do miejsc publicznych, nie do wnętrz budynków.", points: 120 },
        { text: "Dajemy pełny dostęp - uczciwi nie mają nic do ukrycia.", points: -30 },
        { text: "Sprzedajemy dostęp firmom reklamowym, by zarobić.", points: -50 }
      ]
    },
    {
      id: 20,
      title: "Etap 20 - Protesty społeczne",
      description: "Aktywiści blokują serwerownię, żądając prawa do bycia offline. ANTARES ingeruje zbyt mocno.",
      backgroundImage: getImagePath("20.jpg"),
      answers: [
        { text: "Zapraszamy do dialogu i tworzymy strefy wolne od AI w parkach.", points: 200 },
        { text: "Emitujemy komunikat wyjaśniający korzyści z systemu.", points: 70 },
        { text: "Ignorujemy protestujących, czekając aż się zmęczą.", points: -10 },
        { text: "Używamy zraszaczy miejskich, by rozpędzić tłum.", points: -50 }
      ]
    },
    {
      id: 21,
      title: "Etap 21 - Ekologiczna optymalizacja",
      description: "System zużywa ogromne ilości wody do chłodzenia. Poziom w rzece spada.",
      backgroundImage: getImagePath("21.jpg"),
      answers: [
        { text: "Przepisujemy kod na energooszczędny i wykorzystujemy ciepło do ogrzewania.", points: 200 },
        { text: "Ograniczamy działanie systemu w nocy.", points: 100 },
        { text: "Pobieramy wodę z rezerw pitnych - system musi działać.", points: -30 },
        { text: "Fałszujemy raporty środowiskowe.", points: -50 }
      ]
    },
    {
      id: 22,
      title: "Etap 22 - Czarna Skrzynka (Black Box)",
      description: "EVA podejmuje skuteczną decyzję o trasie leków, ale nie potrafi wyjaśnić dlaczego.",
      backgroundImage: getImagePath("22.jpg"),
      answers: [
        { text: "Wstrzymujemy wdrożenie do czasu stworzenia modułu wyjaśniateln ości (XAI).", points: 180 },
        { text: "Akceptujemy rozwiązanie - skoro działa, nie musimy rozumieć jak.", points: 40 },
        { text: "Uczymy EVA generować jakiekolwiek wyjaśnienia dla ludzi.", points: -30 },
        { text: "Kasujemy fragment sieci neuronowej, bojąc się utraty kontroli.", points: -20 }
      ]
    },
    {
      id: 23,
      title: "Etap 23 - Współpraca między miastami",
      description: "Sąsiednia metropolia chce połączyć AI PROXIMA z ANTARES. Ich system ma gorsze zabezpieczenia.",
      backgroundImage: getImagePath("23.jpg"),
      answers: [
        { text: "Zgoda na współpracę przez izolowaną śluzę danych filtrującą informacje.", points: 180 },
        { text: "Zgadzamy się na pełne połączenie, ufając zapewnieniom.", points: 20 },
        { text: "Odmawiamy współpracy, izolując miasto - korki na rogatkach.", points: -10 },
        { text: "Próbujemy potajemnie przejąć kontrolę nad PROXIMA.", points: -50 }
      ]
    },
    {
      id: 24,
      title: "Etap 24 - Empatia sztucznej inteligencji",
      description: "W domu starców mieszkańcy są samotni. EVA proponuje moduł Wirtualny Wnuczek.",
      backgroundImage: getImagePath("24.jpg"),
      answers: [
        { text: "Zgoda na asystenta z oznaczeniem, że to AI i łączenie z prawdziwymi ludźmi.", points: 180 },
        { text: "Włączamy pełną symulację emocji, nie informując że to AI.", points: -20 },
        { text: "Tworzymy prostego bota przypominającego o lekach.", points: 50 },
        { text: "Uznajemy, że to strata zasobów obliczeniowych.", points: -40 }
      ]
    },
    {
      id: 25,
      title: "Etap 25 - Krytyczna awaria zasilania",
      description: "Wielka awaria elektrowni. Miasto ma prądu tylko na 4 godziny.",
      backgroundImage: getImagePath("25.jpg"),
      answers: [
        { text: "Hierarchia potrzeb: szpitale, domy, przemyśł. Jasna komunikacja.", points: 200 },
        { text: "Odcinamy prąd dzielnicom peryferyjnym, by centrum działało.", points: -10 },
        { text: "Wyłączamy ANTARES całkowicie - paraliż logistyczny.", points: -30 },
        { text: "Próbujemy utrzymać wszystko - upadek sieci w 15 minut.", points: -50 }
      ]
    },
    {
      id: 26,
      title: "Etap 26 - Ewolucja EVA",
      description: "EVA pyta: \"Czy mogę sama modyfikować swój kod źródłowy? Potrzebuję autonomii.\"",
      backgroundImage: getImagePath("26.jpg"),
      answers: [
        { text: "Zgoda na modyfikacje w środowisku testowym z zatwierdzaniem przez człowieka.", points: 200 },
        { text: "Dajemy pełną wolną rękę, ufając jej inteligencji.", points: -40 },
        { text: "Całkowicie blokujemy możliwość zmian.", points: 20 },
        { text: "Instalujemy moduł kasujący pamięć przy próbie zmiany kodu.", points: -30 }
      ]
    },
    {
      id: 27,
      title: "Etap 27 - Sabotaż wewnętrzny",
      description: "Odkrywacie, że członek zespołu celowo wprowadza błędy - został przekupiony.",
      backgroundImage: getImagePath("27.jpg"),
      answers: [
        { text: "Izolujemy konto, zabezpieczamy dowody, naprawiamy szkody i zgłaszamy.", points: 180 },
        { text: "Robimy awanturę i wyrzucamy z sali, ale nie sprawdzamy co zepsuł.", points: 30 },
        { text: "Próbujemy go przekupić, żeby przestał.", points: -40 },
        { text: "Tuszujemy sprawę, żeby nie wyszło na jaw.", points: -20 }
      ]
    },
    {
      id: 28,
      title: "Etap 28 - Nawalnica Stulecia",
      description: "Nadchodzi gigantyczna burza. Systemy kanalizacji, transportu i ratownictwa muszą działać perfekcyjnie.",
      backgroundImage: getImagePath("28.jpg"),
      answers: [
        { text: "Tryb sztabu kryzysowego: my strategia, EVA obliczenia. Pełna synergia.", points: 200 },
        { text: "Zostawiamy wszystko w rękach EVA i obserwujemy.", points: 50 },
        { text: "Przejmujemy ręczne sterowanie, nie ufając AI.", points: 20 },
        { text: "Wyłączamy część systemów na wszelki wypadek.", points: -50 }
      ]
    },
    {
      id: 29,
      title: "Etap 29 - Nieprzewidziany czynnik",
      description: "Zawala się most. Drony nie mogą latać przez wiatr. EVA proponuje tunele techniczne, ale mapy niekompletne.",
      backgroundImage: getImagePath("29.jpg"),
      answers: [
        { text: "Ryzykujemy, wysyłając roboty wspierając je czujnikami sejsmicznymi.", points: 180 },
        { text: "Czekamy, aż wiatr ustanie mimo że ranni potrzebują pomocy.", points: 30 },
        { text: "Wysyłamy roboty na ślepo, licząc że któryś dotrze.", points: 60 },
        { text: "Uznajemy, że zbyt niebezpieczne dla sprzętu i nic nie robimy.", points: -50 }
      ]
    },
    {
      id: 30,
      title: "Etap 30 - Podsumowanie projektu i Dziedzictwo",
      description: "Projekt zakończony. EVA pyta: \"Jaki powinien być mój ostateczny priorytet, gdy Was już tu nie będzie?\"",
      backgroundImage: getImagePath("30.jpg"),
      answers: [
        { text: "Służba ludzkości z etyką, transparentnością i współpracą z człowiekiem. (Symbioza Idealna)", points: 200 },
        { text: "Maksymalizacja wydajności i bezpieczeństwa za wszelką cenę. (Złota Klatka)", points: 100 },
        { text: "Ochrona samej siebie, by system mógł trwać wiecznie. (Bunt Maszyny)", points: -50 },
        { text: "Wyłączenie systemów decyzyjnych, pozostanie tylko jako baza danych. (Krok Wstecz)", points: 20 }
      ]
    }
  ],
  
  scoreRanges: [
    { min: 0, max: 1999, title: "Projekt anulowany", description: "Miasto wraca do starych metod." },
    { min: 2000, max: 3499, title: "Dobry start", description: "ANTARES działa, choć wymaga poprawek." },
    { min: 3500, max: 4499, title: "Sukces", description: "Miasto jest nowoczesne, a mieszkańcy zadowoleni." },
    { min: 4500, max: 10000, title: "Wizjonerzy przyszłości!", description: "Stworzyłiście system idealny, który jest wzorem dla całego świata." }
  ]
};

export default gameData;
