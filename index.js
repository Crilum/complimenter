var finalTemplates = [
  function () { return "you have " + getAbstractProperty(); },
  function () { return "you are " + getDescriptor(); },
  function () { return "you're " + getDescriptor(); },
  function () { return "I am " + getDescriptor(); },
];

var templates = [
  function () { return "I've always thought " + getFinalTemplate() + "." },
  function () { return "9 out of 10 doctors say " + getFinalTemplate() + "." },
  function () { return "1 out of 10 doctors say " + getFinalTemplate() + ", but that's good enough, right?" },
  function () { return "all 10 of those doctors say " + getFinalTemplate() + "!" },
  function () { return "The Armpit Hair Fairy told me " + getFinalTemplate() + "..." },
  function () { return "people say " + getFinalTemplate() + "." },
  function () { return "I think " + getFinalTemplate() + "." },
  function () { return "you know, " + getFinalTemplate() + "." },
  function () { return "I hear " + getFinalTemplate() + "." },
  function () { return "a little birdie told me " + getFinalTemplate() + "." },
  function () { return "I've always wanted to tell you, " + getFinalTemplate() + "." },
  function () { return "did you know that " + getFinalTemplate() + "?" },
].concat(finalTemplates);

var abstractProperties = [
  function () { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function () { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];



var makeCompliment = module.exports = function makeCompliment() {
  return getTemplate();
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
  "words"
]
const tangibleMultipleProperties = [
  "accomplishments",
  "eyebrows",
  "eyes",
  "ideas",
  "knees",
  "knuckles",
  "skills",
  "thoughts",
  "thumbs",
  "typos",
  "ears"
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
  "danceable",
  "delectable",
  "dependable",
  "desirable",
  "durable",
  "enviable",
  "fashionable",
  "flammable",
  "flexible",
  "forgettable",
  "golden",
  "handsome",
  "hospitable",
  "illegible",
  "impaechable",
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
  "oppoasble",
  "peaceable",
  "perfect",
  "pleasing",
  "preferable",
  "pretty",
  "questionible",
  "radiant",
  "reasonable",
  "remarkable",
  "responible",
  "sizable",
  "sustainable",
  "tangible",
  "teachable",
  "tolerable",
  "unaccaptable",
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