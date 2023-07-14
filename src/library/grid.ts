type Word = {
  characters: string;
  index: number;
  line: number;
};

type WordList = {
  [index: string]: {
    [index: number | string]: Word;
  };
};

const wordList: WordList = {
  hours: {
    1: {
      characters: "ONE",
      index: 7,
      line: 3,
    },
    2: {
      characters: "TWO",
      index: 9,
      line: 3,
    },
    3: {
      characters: "THREE",
      index: 0,
      line: 4,
    },
    4: {
      characters: "FOUR",
      index: 5,
      line: 4,
    },
    5: {
      characters: "FIVE",
      index: 9,
      line: 4,
    },
    6: {
      characters: "SIX",
      index: 0,
      line: 5,
    },
    7: {
      characters: "SEVEN",
      index: 4,
      line: 5,
    },
    8: {
      characters: "EIGHT",
      index: 8,
      line: 5,
    },
    9: {
      characters: "NINE",
      index: 0,
      line: 6,
    },
    10: {
      characters: "TEN",
      index: 0,
      line: 6,
    },
    11: {
      characters: "ELEVEN",
      index: 0,
      line: 6,
    },
    12: {
      characters: "TWELVE",
      index: 0,
      line: 7,
    },
  },
  minutes: {
    5: {
      characters: "FIVE",
      index: 0,
      line: 2,
    },
    10: {
      characters: "TEN",
      index: 6,
      line: 0,
    },
    15: {
      characters: "QUARTER",
      index: 0,
      line: 1,
    },
    20: {
      characters: "TWENTY",
      index: 7,
      line: 1,
    },
    30: {
      characters: "HALF",
      index: 9,
      line: 0,
    },
  },
  words: {
    a: {
      characters: "A",
      index: 4,
      line: 0,
    },
    its: {
      characters: "ITS",
      index: 0,
      line: 0,
    },
    minutes: {
      characters: "MINUTES",
      index: 5,
      line: 2,
    },
    oclock: {
      characters: "OCLOCK",
      index: 7,
      line: 7,
    },
    past: {
      characters: "PAST",
      index: 0,
      line: 3,
    },
    to: {
      characters: "TO",
      index: 4,
      line: 3,
    },
  },
};

const getEmptyGrid = () =>
  Array<string>(8)
    .fill("")
    .map(() => Array<string>(13).fill(""));

const getRandomGrid = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chars: string[] = [];

  const random = () => {
    if (!chars.length) {
      chars = [...alphabet];
    }

    const index = Math.floor(Math.random() * chars.length);
    const char = chars[index];
    chars.splice(index, 1);

    return char;
  };

  return getEmptyGrid().map((row) => row.map(() => random()));
};

const getWords = () => {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();

  const words = [wordList.words["its"]];
  let minutesSet = false;

  if ((minute > 2 && minute <= 7) || (minute > 53 && minute < 58)) {
    words.push(wordList.minutes[5]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;
  } else if ((minute > 7 && minute <= 13) || (minute > 47 && minute <= 53)) {
    words.push(wordList.minutes[10]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;
  } else if ((minute > 13 && minute <= 17) || (minute > 42 && minute <= 47)) {
    words.push(wordList.minutes[15]);
    words.push(wordList.words["a"]);
    minutesSet = true;
  } else if ((minute > 17 && minute <= 25) || (minute > 35 && minute <= 42)) {
    words.push(wordList.minutes[20]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;
  } else if (minute > 25 && minute <= 35) {
    words.push(wordList.minutes[30]);
    words.push(wordList.words["a"]);
    minutesSet = true;
  }

  if (minutesSet) {
    if (minute <= 35) {
      words.push(wordList.words["past"]);
    } else {
      words.push(wordList.words["to"]);
      hour++;
    }
  } else {
    if (minute >= 30) {
      hour++;
    }
    words.push(wordList.words["oclock"]);
  }

  if (hour > 12) {
    hour = hour - 12;
  } else if (hour === 0) {
    hour = 12;
  }
  words.push(wordList.hours[hour]);

  return words;
};

const getWordGrid = () => {
  const grid = getEmptyGrid();
  const words = getWords();

  return populateGrid(grid, words);
};

const populateGrid = (grid: string[][], words: Word[]) => {
  words.forEach((word: Word) => {
    const row = grid[word.line];
    const characters = word.characters;
    const start = word.index;

    [...characters].forEach((rune, index) => {
      row[start + index] = rune;
    });
  });

  return grid;
};

export { getWordGrid, getRandomGrid };
