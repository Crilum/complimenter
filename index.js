var finalTemplates = [
  function () { return "you have " + getAbstractProperty(); },
  function () { return "you are " + getDescriptor(); },
  function () { return "you're " + getDescriptor(); },
  function () { return "I am " + getDescriptor(); },
];

var templates = [
  function () { return "I've always thought " + getFinalTemplate() },
  function () { return "9 out of 10 doctors say " + getFinalTemplate() },
  function () { return "1 out of 10 doctors say " + getFinalTemplate() + ", but that's good enough, right" },
  function () { return "all 10 of those doctors say " + getFinalTemplate() },
  function () { return "The Armpit Hair Fairy told me " + getFinalTemplate() },
  function () { return "people say " + getFinalTemplate() },
  function () { return "I think " + getFinalTemplate() },
  function () { return "you know, " + getFinalTemplate() },
  function () { return "I hear " + getFinalTemplate() },
  function () { return "a little birdie told me " + getFinalTemplate() },
  function () { return "I've always wanted to tell you, " + getFinalTemplate() },
  function () { return "did you know that " + getFinalTemplate() },
].concat(finalTemplates);

var abstractProperties = [
  function () { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function () { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];

const colors = {
  yellow: "\x1b[33m",
  blue: "\x1b[36m",
  red: "\x1b[31m",
  grey: "\x1b[38;5;254m",
  green: "\x1b[38;5;47m",
  NC: "\x1b[0m"
}

function colorize(color, message) {
  if (color == "blue") {
    return `${colors.blue}${message}${colors.NC}`
  } else if (color == "yellow") {
    return `${colors.yellow}${message}${colors.NC}`
  } else if (color == "red") {
    return `${colors.red}${message}${colors.NC}`
  } else if (color == "grey") {
    return `${colors.grey}${message}${colors.NC}`
  } else if (color == "green") {
    return `${colors.green}${message}${colors.NC}`
  } else {
    console.log(`${colors.yellow}Warning: ${colors.red}Garbage color argument!${colors.NC}`)
    return `${message}`
  }
}

function current_date() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let date = `${month}-${day}-${year}`
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
  return `${time} ${date} ~ `
}

function log(message) {
  console.log(colorize("grey", current_date()), colorize("blue", message));
}

var makeCompliment = module.exports = function makeCompliment(isNice) {
  if (isNice == "nice") {
    let compliment = getTemplate() + getRandomPunctuation();
    let a = check_compliment_is_nice(compliment)
    while (a == 1) {
        log("Regenerating compliment...")
        compliment = getTemplate() + getRandomPunctuation();
        a = check_compliment_is_nice(compliment)
    }
    return compliment;
  } else if (isNice == "roast") {
    let compliment = getTemplate() + getRandomPunctuation();
    let a = check_compliment_is_nice(compliment)
    while (a == 0) {
        log("Regenerating compliment...")
        compliment = getTemplate() + getRandomPunctuation();
        a = check_compliment_is_nice(compliment)
    }
    return compliment;
  } else if (isNice == "random" || isNice == "" || isNice == undefined || isNice == null) {
    return getTemplate() + getRandomPunctuation();
  }
};

var getRandomPunctuation = module.exports.getRandomPunctuation = function getRandomPunctuation() {
  return chars[Math.floor((Math.random() * chars.length))]
};

var makeSingularForm = module.exports.makeSingularForm = function makeSingularForm(text) {
  if (text.match(/^[aeiou]/i)) {
    return "an " + text;
  } else {
    return "a " + text;
  }
}

var getTemplate = module.exports.getTemplate = function getTemplate() {
  return templates[Math.floor(Math.random() * templates.length)]();
}

var getFinalTemplate = module.exports.getFinalTemplate = function getFinalTemplate() {
  return finalTemplates[Math.floor(Math.random() * finalTemplates.length)]();
};

var getAbstractProperty = module.exports.getAbstractProperty = function getAbstractProperty() {
  return abstractProperties[Math.floor(Math.random() * abstractProperties.length)]();
}

var getTangibleSingularProperty = module.exports.getTangibleSingularProperty = function getTangibleSingularProperty() {
  return tangibleSingularProperties[Math.floor(Math.random() * tangibleSingularProperties.length)];
}

var getTangibleMultipleProperty = module.exports.getTangibleMultipleProperty = function getTangibleMultipleProperty() {
  return tangibleMultipleProperties[Math.floor(Math.random() * tangibleMultipleProperties.length)];
}

var getAdjective = module.exports.getAdjective = function getAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

var getAdverb = module.exports.getAdverb = function getAdverb() {
  return adverbs[Math.floor(Math.random() * adverbs.length)];
}

var getDescriptor = module.exports.getDescriptor = function getDescriptor() {
  return [getAdverb(), getAdjective()].join(" ");
}

var check_compliment_is_nice = module.exports.check_compliment_is_nice = function check_compliment_is_nice(compliment) {
  for (let i = 0; i < badWords.length; i++) {
    if (compliment.includes(badWords[i])) {
      log(`Includes bad phrase: ${badWords[i]}`)
      return 1
    }
  };
  for (let i = 0; i < badChars.length; i++) {
    if (compliment.includes(badChars[i])) {
      log(`Includes bad punctuation: ${badChars[i]}`)
      return 1
    }
  };
  return 0
}

const badWords = [
  "almost",
  "I am",
  "nearly",
  "kind of",
  "practically",
  "virtually",
  "somewhat",
  "terribly",
  "faintly",
  "fairly",
  "deftly",
  "1 out of 10",
  "nose",
  "Armpit Hair",
  "typos",
  "acceptable",
  "breakable",
  "combustible",
  "durable",
  "flammable",
  "flexible",
  "forgettable",
  "illegible",
  "impeachable",
  "implausible",
  "improbable",
  "laughable",
  "managable",
  "questionable",
  "tolerable",
  "unacceptable",
  "unamiable",
  "uncategorizable",
  "eatable",
  "uneatable",
  "unlovable",
  "unvaluable",
  "weird",
  "crappy",
]

const chars = [
  ".",
  "?",
  "!",
  "..",
  "...",
  "??",
  "!?!?!",
  "!!!",
  "?!",
  " 😉",
  " 🙃",
  " 👀",
  " 😎",
  " 😳",
  " 😼",
  " 🤗",
  " 🤭",
  " 💥",
  " 👌",
  " 🔥",
  " 😈",
]
const badChars = [
  "..",
  "...",
  " ?!",
  "!?!?!",
  "?",
  "??",
  "!!!",
  " 👀",
  " 😳",
  " 😼",
  " 💥",
  " 😈",
]

const tangibleSingularProperties = [
  "beauty",
  "being",
  "breath",
  "demeanor",
  "face",
  "face",
  "features",
  "greatness",
  "hair",
  "heart",
  "intelligence",
  "interest",
  "lovelyness",
  "nose",
  "posture",
  "radiance",
  "smile",
  "soul",
  "spirit",
  "style",
  "talent",
  "taste",
  "voice",
  "way of thinking",
  "wonder",
]
const tangibleMultipleProperties = [
  "accomplishments",
  "compliments",
  "eyebrows",
  "eyes",
  "ideas",
  "knees",
  "knuckles",
  "skills",
  "thoughts",
  "thumbs",
  "typos",
  "ears",
  "words"
]
const adjectives = [
  "acceptable",
  "attractive",
  "beautiful",
  "breakable",
  "collectible",
  "combustible",
  "considerable",
  "cool",
  "crappy",
  "danceable",
  "delectable",
  "dependable",
  "desirable",
  "durable",
  "edible",
  "enviable",
  "fashionable",
  "flammable",
  "flexible",
  "forgettable",
  "golden",
  "handsome",
  "hospitable",
  "illegible",
  "impeachable",
  "impeccable",
  "implausible",
  "improbable",
  "inalienable",
  "incomparable",
  "incredible",
  "indestrutctible",
  "infallible",
  "irrisistible",
  "laughable",
  "likable",
  "lovable",
  "managable",
  "measurable",
  "neat",
  "nice",
  "non-flamible",
  "non-recylable",
  "opposable",
  "peaceable",
  "perfect",
  "pleasing",
  "preferable",
  "pretty",
  "questionable",
  "radiant",
  "reasonable",
  "remarkable",
  "responible",
  "sizable",
  "sustainable",
  "tangible",
  "teachable",
  "tolerable",
  "unacceptable",
  "unamiable",
  "uncategorizable",
  "uncopyrightable",
  "uneatable",
  "unlovable",
  "unmeasurable",
  "unmistakable",
  "unthinkable",
  "unvaluable",
  "useful",
  "valuable",
  "weird",
  "wonderful"
]
const adverbs = [
  "absolutely",
  "actually",
  "almost",
  "astronomically",
  "audibly",
  "awfully",
  "cheerfully",
  "completely",
  "decidedly",
  "deeply",
  "deftly",
  "enormously",
  "entirely",
  "extremely",
  "faintly",
  "fairly",
  "gracefully",
  "greatly",
  "highly",
  "incredibly",
  "intensely",
  "kind of",
  "legendarily",
  "nearly",
  "perfectly",
  "positively",
  "powerfully",
  "practically",
  "pretty",
  "purely",
  "quite",
  "radiantly",
  "rather",
  "really",
  "royally",
  "simply",
  "so",
  "solely",
  "somewhat",
  "terribly",
  "thoroughly",
  "totally",
  "unbelievably",
  "utterly",
  "very",
  "virtually"
]