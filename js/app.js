class Language{

    constructor(languageName, nativeSpeakers = -1, secondLanguageSpeakers = -1, languageTree = -1, relatedLanguages = [], url ="404"){
        this.languageName = languageName;
        this.nativeSpeakers = nativeSpeakers;
        this.secondLanguageSpeakers = secondLanguageSpeakers;
        this.languageTree = languageTree;
        this.relatedLanguages = relatedLanguages;
        this.url = url;
        
    }

}

let swedish;
let norwegian;
let danish;

swedish = new Language("Swedish", 1, 1, null);
norwegian = new Language("Norwegian",101, 1, null);
danish = new Language("Danish", 1000, 1, null);

swedish.relatedLanguages = [norwegian,danish];
norwegian.relatedLanguages = [swedish,danish];
danish.relatedLanguages = [swedish, norwegian];

console.log(swedish.relatedLanguages);