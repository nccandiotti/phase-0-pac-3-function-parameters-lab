function introduction(name){
    return (`Hi, my name is ${name}.`);
}
introduction (`Josh`);

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
introductionWithLanguage (`Josh`, `Ember.js`);

function introductionWithLanguageOptional (name, language = "Javascript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional ("Gracie");


function introductionWithLanguageOptional (name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional ("Gracie", "Python");

