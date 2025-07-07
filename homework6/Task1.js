function localize(strings, ...keys){
    return keys.map((key, i) => {
        const translated = translations[language][key];
        return (strings[i] || '') + (translated ?? key);
      }).join('');
}


const translations = {
	en: {
	greet: "Hello",
	intro: "Welcome to our website"
},
	fr: {
		greet: "Bonjour",
		intro: "Bienvenue sur notre site web"
	},

    es: {
        greet: "Hola",
	    intro: "Bienvenido a nuestra pagina"
    }
};

const language = "en"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")