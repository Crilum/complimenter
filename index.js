var finalTemplates = [
  function() { return "you have " + getAbstractProperty(); },
  function() { return "you are " + getDescriptor(); },
  //function() { return "this is " + getDescriptor(); },
  function() { return "I am " + getDescriptor(); },
];

var templates = [
  function() { return "I've always thought " + getFinalTemplate(); },
  function() { return "9 out of 10 doctors say " + getFinalTemplate(); },
  function() { return "People say " + getFinalTemplate(); },
  function() { return "I think " + getFinalTemplate(); },
  function() { return "You know, " + getFinalTemplate(); },
].concat(finalTemplates);

var abstractProperties = [
  function() { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function() { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];

var tangibleSingularProperties = [
  "beauty",
  "being",
  "demeanour",
  "face",
  "greatness",
  "heart",
  "interest",
  "lovelyness",
  "radiance",
  "smile",
  "soul",
  "talent",
  "voice",
  "way of thinking",
  "wonder",

];

var tangibleMultipleProperties = [
  "ears",
  "eyes",
  "ideas",
  "knees",
  "skills",
  "thoughts",
  "thoughts",
];

var adjectives = [
  "attractive",
  "beautiful",
  "incredible",
  "nice",
  "perfect",
  "pleasing",
  "pretty",
  "radiant",
  "useful",
  "wonderful",
];

var adverbs = [
  "absolutely",
  "actually",
  "almost",
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
  "highly",
  "incredibly",
  "intensely",
  "kind of",
  "legendary",
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
  "somewhat",
  "terribly",
  "thoroughly",
  "totally",
  "utterly",
  "very",
  "virtually",
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
