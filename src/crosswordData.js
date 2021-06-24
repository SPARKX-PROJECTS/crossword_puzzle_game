const data_1 = {
  across: {
    1: {
      clue: 'JANUARY',
      answer: 'DURUTHU',
      row: 0,
      col: 6,
    },
    3: {
      clue: 'MAY',
      answer: 'VESAK',
      row: 4,
      col: 7,
    },
    5: {
      clue: 'APRIL',
      answer: 'BAK',
      row: 6,
      col: 9,
    },
    6: {
      clue: 'OCTOBER',
      answer: 'VAP',
      row: 6,
      col: 5,
    },
    8: {
      clue: 'JUNE',
      answer: 'POSON',
      row: 4,
      col: 1,
    },
    9: {
      clue: 'SEPTEMBER',
      answer: 'BINARA',
      row: 7,
      col: 0,
    },
    11: {
      clue: 'MARCH',
      answer: 'MADIN',
      row: 8,
      col: 5,
    },
  },

  down: {
    2: {
      clue: 'DECEMBER',
      answer: 'UNDUVAP',
      row: 0,
      col: 7,
    },
    4: {
      clue: 'JULY',
      answer: 'ESALA',
      row: 2,
      col: 10,
    },
    7: {
      clue: 'FEBRUARY',
      answer: 'NAVAM',
      row: 4,
      col: 5,
    },
    10: {
      clue: 'AUGUST',
      answer: 'NIKINI',
      row: 7,
      col: 2,
    },
    12: {
      clue: 'NOVEMBER',
      answer: 'ILL',
      row: 8,
      col: 8,
    },
  },
};

const data_2 = {
  across: {
    1: {
      clue: 'Original name',
      answer: 'SIDDHARTHA',
      row: 4,
      col: 2,
    },
    5: {
      clue: 'Cast born to',
      answer: 'SHAKYA',
      row: 9,
      col: 6,
    },
    6: {
      clue: 'Name of personal horse',
      answer: 'KANTHAKA',
      row: 12,
      col: 0,
    },
    7: {
      clue: "Mother's Name",
      answer: 'MAHAMAYA',
      row: 7,
      col: 9,
    },
  },
  down: {
    2: {
      clue: 'Name of the Birth Place',
      answer: 'LUMBINI',
      row: 0,
      col: 3,
    },
    4: {
      clue: "Son's Name",
      answer: 'RAHULA',
      row: 2,
      col: 10,
    },
    3: {
      clue: 'Name of Wife',
      answer: 'YASHODHARA',
      row: 3,
      col: 7,
    },
    8: {
      clue: "Father's Name",
      answer: 'SUDDODHANA',
      row: 5,
      col: 1,
    },
  },
};

const data_3 = {
  across: {
    1: {
      clue: 'This was Brought to Sri Lanka by Sangamitta Theri',
      answer: 'SRIMAHABODHIYA',
      row: 4,
      col: 0,
    },
    4: {
      clue: 'This was a nine story building built by King Dutugemunu',
      answer: 'LOVAMAHAPAYA',
      row: 11,
      col: 1,
    },
    5: {
      clue: 'Second Highest Stupa in Sri Lanaka',
      answer: 'ABHAYAGIRIYA',
      row: 14,
      col: 1,
    },
    6: {
      clue: 'A stupa built by King Mahasena',
      answer: 'JETHAVANARAMAYA',
      row: 6,
      col: 3,
    },
    7: {
      clue: 'The stupa built by King Dutugemunu after defeating king Elara',
      answer: 'MIRISAVETIYA',
      row: 9,
      col: 3,
    },
    8: {
      clue: 'A stupa built by King Vattagamini Abaya',
      answer: 'LANKARAMAYA',
      row: 16,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'A stupa that is considered a marvel built by King Dutugemunu',
      answer: 'RUWANWELISAYA',
      row: 4,
      col: 1,
    },
    3: {
      clue: 'First stupa built in Anuradhapura',
      answer: 'THUPARAMAYA',
      row: 0,
      col: 13,
    },
  },
};

const data_4 = {
  across: {
    2: {
      clue: 'The inauguration of Buddhism in Sri lanka occured in this place',
      answer: 'MIHINTALE',
      row: 2,
      col: 2,
    },
    3: {
      clue: '______ King ruled Sri lanka, when buddhism was introduced',
      answer: 'DEVANAMPIYATISSA',
      row: 4,
      col: 0,
    },
  },
  down: {
    1: {
      clue: '_______ Maha Rahath Thero inaugurated Buddhism to Sri Lanka',
      answer: 'MIHINDU',
      row: 0,
      col: 4,
    },
    4: {
      clue: 'On this Poya day, buddhism inaugurated Buddhism to Sri Lanka',
      answer: 'POSON',
      row: 4,
      col: 7,
    },
    5: {
      clue: 'The Indian emperor who initiated the spread of Buddhism to Sri Lanka and South Asia',
      answer: 'ASHOKA',
      row: 4,
      col: 10,
    },
  },
};

let puzzleDataStore = [
  {
    key: 0,
    name: 'POYA DAYS',
    data: data_1,
    completed: false,
    time: '',
  },
  {
    key: 1,
    name: "LORD BUDDHA'S EARLY LIFE",
    data: data_2,
    completed: false,
    time: '',
  },
  {
    key: 2,
    name: 'SACRED PLACES IN SRI LANKA',
    data: data_3,
    completed: false,
    time: '',
  },
  {
    key: 3,
    name: 'INAUGURATION OF BUDDHISM IN SRI LANKA',
    data: data_4,
    completed: false,
    time: '',
  },
];

export { puzzleDataStore };
