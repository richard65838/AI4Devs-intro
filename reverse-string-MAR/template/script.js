document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("textInput");
  const secondInputElement = document.getElementById("secondInput");
  const languages = [
    "¡HOLA!",
    "你好!",
    "こんにちは!",
    "안녕하세요!",
    "Здравствуйте!",
    "مرحبا!",
    "Bonjour!",
    "Hallo!",
    "Ciao!",
    "Olá!",
    "नमस्ते!",
    "Hola!",
    "Salam!",
    "Hej!",
    "Merhaba!",
    "Sawubona!",
    "Xin chào!",
    "Bună!",
    "Szia!",
    "Sveiki!",
  ];

  const reverseText = (text) => text.split("").reverse().join("");

  const setRandomLanguage = () => {
    const randomIndex = Math.floor(Math.random() * languages.length);
    inputElement.value = languages[randomIndex];
    secondInputElement.value = reverseText(inputElement.value);
  };

  const syncInputs = (source, target) => {
    target.value = reverseText(source.value);
  };

  setRandomLanguage();

  inputElement.addEventListener("input", () =>
    syncInputs(inputElement, secondInputElement)
  );
  secondInputElement.addEventListener("input", () =>
    syncInputs(secondInputElement, inputElement)
  );

  document.querySelector("h1").addEventListener("click", setRandomLanguage);
});
