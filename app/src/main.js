

  

const trivia = [

  // 🌍 GEOGRAPHY
  { 
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    genre: "Geography",
    difficulty: "Easy",
    options: ["Paris", "Lyon", "Marseille", "Nice"],
    tags: ["Europe", "Cities"],
    explanation: "Paris has been France’s capital since the 10th century."
  },
  { 
    id: 4,
    question: "How many continents are there on Earth?",
    answer: "Seven",
    genre: "Geography",
    difficulty: "Easy",
    options: ["Six", "Seven", "Five", "Eight"],
    tags: ["Earth"],
    explanation: "The commonly accepted model uses 7 continents."
  },
  { 
    id: 19,
    question: "Which is the largest desert in the world?",
    answer: "Antarctic Desert",
    genre: "Geography",
    difficulty: "Hard",
    options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
    tags: ["Earth", "Climate"],
    explanation: "Deserts are defined by dryness, not heat."
  },
  { 
    id: 34,
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
    genre: "Geography",
    difficulty: "Medium",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
    tags: ["Mountains"],
    explanation: "Mount Everest is 29,032 feet tall."
  },
  {
    id: 35,
    question: "Which ocean is the largest?",
    answer: "Pacific Ocean",
    genre: "Geography",
    difficulty: "Easy",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    tags: ["Oceans"],
    explanation: "The Pacific Ocean covers over 63 million square miles."
  },

  // 🎨 ART
  { 
    id: 2,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    genre: "Art",
    difficulty: "Medium",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    tags: ["Renaissance"],
    explanation: "Leonardo painted the Mona Lisa between 1503 and 1506."
  },
  { 
    id: 36,
    question: "Which artist painted the ceiling of the Sistine Chapel?",
    answer: "Michelangelo",
    genre: "Art",
    difficulty: "Medium",
    options: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Donatello"],
    tags: ["Renaissance"],
    explanation: "Michelangelo completed the ceiling in 1512."
  },
  {
    id: 49,
    question: "What art movement is Pablo Picasso most associated with?",
    answer: "Cubism",
    genre: "Art",
    difficulty: "Medium",
    options: ["Cubism", "Impressionism", "Realism", "Surrealism"],
    tags: ["Art Movements"],
    explanation: "Picasso co-founded the Cubist movement in the early 20th century."
  },

  // 🔬 SCIENCE
  { 
    id: 3,
    question: "What planet is known as the Red Planet?",
    answer: "Mars",
    genre: "Science",
    difficulty: "Easy",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    tags: ["Space"],
    explanation: "Mars appears red due to iron oxide on its surface."
  },
  {
    id: 7,
    question: "What gas do plants absorb from the atmosphere?",
    answer: "Carbon dioxide",
    genre: "Science",
    difficulty: "Easy",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    tags: ["Plants", "Photosynthesis"],
    explanation: "Plants use CO₂ during photosynthesis to create glucose."
  },
  { 
    id: 9,
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
    genre: "Science",
    difficulty: "Easy",
    options: ["Diamond", "Quartz", "Graphite", "Topaz"],
    tags: ["Minerals"],
    explanation: "Diamond ranks highest on the Mohs hardness scale."
  },
  { 
    id: 13,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    genre: "Science",
    difficulty: "Medium",
    options: ["Ag", "Au", "Gd", "Go"],
    tags: ["Chemistry"],
    explanation: "The symbol Au comes from the Latin word 'aurum'."
  },
  { 
    id: 15,
    question: "How long does Earth take to orbit the Sun?",
    answer: "365.25 days",
    genre: "Science",
    difficulty: "Medium",
    options: ["364 days", "365 days", "365.25 days", "366 days"],
    tags: ["Space"],
    explanation: "The extra 0.25 days is why we have leap years."
  },
  { 
    id: 17,
    question: "Which element has the highest melting point?",
    answer: "Tungsten",
    genre: "Science",
    difficulty: "Hard",
    options: ["Iron", "Tungsten", "Carbon", "Platinum"],
    tags: ["Chemistry", "Elements"],
    explanation: "Tungsten melts at 3422°C."
  },
  { 
    id: 37,
    question: "What is the chemical symbol for water?",
    answer: "H₂O",
    genre: "Science",
    difficulty: "Easy",
    options: ["HO", "H₂O", "OH₂", "H₂"],
    tags: ["Chemistry"],
    explanation: "Two hydrogen atoms bonded to one oxygen atom make water."
  },
  {
    id: 38,
    question: "What force keeps planets in orbit around the Sun?",
    answer: "Gravity",
    genre: "Science",
    difficulty: "Medium",
    options: ["Magnetism", "Gravity", "Friction", "Inertia"],
    tags: ["Physics", "Space"],
    explanation: "Gravity from the Sun keeps planets in orbit."
  },
  {
    id: 39,
    question: "What part of the atom has a positive charge?",
    answer: "Proton",
    genre: "Science",
    difficulty: "Easy",
    options: ["Electron", "Neutron", "Proton", "Nucleus"],
    tags: ["Atomic Structure"],
    explanation: "Protons are positively charged particles found in the nucleus."
  },
  {
    id: 50,
    question: "What gas makes up most of Earth's atmosphere?",
    answer: "Nitrogen",
    genre: "Science",
    difficulty: "Easy",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    tags: ["Atmosphere"],
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },

  // 🧬 BIOLOGY
  { 
    id: 5,
    question: "What is the largest mammal on Earth?",
    answer: "Blue whale",
    genre: "Biology",
    difficulty: "Medium",
    options: ["Elephant", "Blue whale", "Hippopotamus", "Giraffe"],
    tags: ["Animals"],
    explanation: "The blue whale can reach lengths of up to 100 feet."
  },
  { 
    id: 10,
    question: "How many bones are in the human body?",
    answer: "206",
    genre: "Biology",
    difficulty: "Medium",
    options: ["201", "206", "212", "198"],
    tags: ["Anatomy"],
    explanation: "An average adult human has 206 bones."
  },
  { 
    id: 16,
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    genre: "Biology",
    difficulty: "Easy",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    tags: ["Cells"],
    explanation: "Mitochondria generate ATP energy for the cell."
  },
  {
    id: 40,
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    genre: "Biology",
    difficulty: "Easy",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    tags: ["Anatomy"],
    explanation: "The skin covers about 20 square feet on average."
  },
  {
    id: 41,
    question: "What do bees collect to make honey?",
    answer: "Nectar",
    genre: "Biology",
    difficulty: "Easy",
    options: ["Pollen", "Nectar", "Sap", "Seeds"],
    tags: ["Insects"],
    explanation: "Bees convert nectar into honey through enzymatic activity."
  },

  // 🏛 HISTORY
  { 
    id: 6,
    question: "In what year did the Titanic sink?",
    answer: "1912",
    genre: "History",
    difficulty: "Medium",
    options: ["1905", "1912", "1921", "1898"],
    tags: ["Maritime", "Disasters"],
    explanation: "The Titanic struck an iceberg on April 14, 1912."
  },
  { 
    id: 12,
    question: "Which ancient civilization built Machu Picchu?",
    answer: "The Inca Empire",
    genre: "History",
    difficulty: "Medium",
    options: ["Maya", "Aztec", "Inca", "Olmec"],
    tags: ["South America", "Architecture"],
    explanation: "Machu Picchu was built by the Inca in the 15th century."
  },
  { 
    id: 18,
    question: "What year did World War II end?",
    answer: "1945",
    genre: "History",
    difficulty: "Medium",
    options: ["1939", "1942", "1945", "1950"],
    tags: ["War"],
    explanation: "WWII ended with Japan's surrender in 1945."
  },
  {
    id: 42,
    question: "Who discovered America in 1492?",
    answer: "Christopher Columbus",
    genre: "History",
    difficulty: "Easy",
    options: ["Leif Erikson", "Christopher Columbus", "Marco Polo", "Amerigo Vespucci"],
    tags: ["Exploration"],
    explanation: "Columbus arrived in the Americas on October 12, 1492."
  },
  {
    id: 43,
    question: "Which ancient civilization built the pyramids?",
    answer: "The Egyptians",
    genre: "History",
    difficulty: "Easy",
    options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
    tags: ["Ancient"],
    explanation: "The pyramids were built as tombs for pharaohs."
  },

  // 📚 LITERATURE
  { 
    id: 8,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    genre: "Literature",
    difficulty: "Easy",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    tags: ["Plays", "Elizabethan"],
    explanation: "The play was written in the 1590s."
  },
  {
    id: 44,
    question: "Who wrote 'The Catcher in the Rye'?",
    answer: "J.D. Salinger",
    genre: "Literature",
    difficulty: "Medium",
    options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
    tags: ["Novels"],
    explanation: "Published in 1951, it became a classic of American literature."
  },

  // ➗ MATHEMATICS
  { 
    id: 11,
    question: "What is the smallest prime number?",
    answer: "2",
    genre: "Mathematics",
    difficulty: "Easy",
    options: ["1", "2", "3", "5"],
    tags: ["Numbers", "Prime"],
    explanation: "2 is the only even prime number."
  },
  {
    id: 45,
    question: "What is 12 × 12?",
    answer: "144",
    genre: "Mathematics",
    difficulty: "Easy",
    options: ["124", "144", "132", "154"],
    tags: ["Multiplication"],
    explanation: "12 multiplied by 12 equals 144."
  },
  {
    id: 46,
    question: "What is the square root of 81?",
    answer: "9",
    genre: "Mathematics",
    difficulty: "Easy",
    options: ["8", "9", "7", "6"],
    tags: ["Square Roots"],
    explanation: "9 × 9 = 81."
  },

  // 🌎 CULTURE
  { 
    id: 14,
    question: "Which language has the most native speakers worldwide?",
    answer: "Mandarin Chinese",
    genre: "Culture",
    difficulty: "Hard",
    options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
    tags: ["Languages"],
    explanation: "Mandarin has over 900 million native speakers."
  },
  {
    id: 47,
    question: "What is the most widely practiced religion in the world?",
    answer: "Christianity",
    genre: "Culture",
    difficulty: "Medium",
    options: ["Islam", "Christianity", "Hinduism", "Buddhism"],
    tags: ["Religion"],
    explanation: "Christianity has about 2.3 billion followers."
  },

  // 💻 TECHNOLOGY
  { 
    id: 20,
    question: "What was the first video game ever created?",
    answer: "Tennis for Two",
    genre: "Technology",
    difficulty: "Hard",
    options: ["Pong", "Tennis for Two", "Spacewar!", "Computer Chess"],
    tags: ["Gaming", "History"],
    explanation: "Created in 1958 by physicist William Higinbotham."
  },
  {
    id: 48,
    question: "What does CPU stand for?",
    answer: "Central Processing Unit",
    genre: "Technology",
    difficulty: "Easy",
    options: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Control Processing Unit"],
    tags: ["Computers"],
    explanation: "The CPU is the brain of a computer."
  }

];

const geographybtn = document.querySelector('.Geographybtn');
const artbtn = document.querySelector('.Artbtn');
const sciencebtn = document.querySelector('.Sciencebtn');
const biologybtn = document.querySelector('.Biologybtn');
const historybtn = document.querySelector('.Historybtn');
const literaturebtn = document.querySelector('.Literaturebtn');
const mathematicsbtn = document.querySelector('.Mathematicsbtn');
const culturebtn = document.querySelector('.Culturebtn');
const technologybtn = document.querySelector('.Technologybtn'); 


function displayQuestions(genre) {
  const filtered = trivia.filter(q => q.genre === genre);

  container.innerHTML = "";

  filtered.forEach(q => {
    container.insertAdjacentHTML(
     "beforeend",
    `
    <div class="card" data-question="${question.question}">
      <h3 class="card-price">$${question.question.toLocaleString()}</h3>
    `
  );
}
}


question.forEach ((question) => inject(question)); 


