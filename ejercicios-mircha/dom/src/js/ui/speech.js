export const speechReader = () => {
  const $speechSelect = document.getElementById("speech-selector");
  const $speechTextarea = document.getElementById("speech-textarea");
  const $speechBtn = document.getElementById("speech-btn");
  const $speechStopBtn = document.getElementById("speech-stop-btn");

  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  const getVoices = () => {
    voices = window.speechSynthesis.getVoices();

    voices.forEach((voice) => {
      const $option = document.createElement("option");
      $option.value = voice.name;
      $option.textContent = `${voice.name} - ${voice.lang}`;
      $speechSelect.appendChild($option);
    });
  };

  document.addEventListener("DOMContentLoaded", getVoices);

  document.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      const selectedVoice = voices.find(
        (voice) => voice.name === $speechSelect.value
      );
      speechMessage.voice = selectedVoice;
      window.speechSynthesis.speak(speechMessage);
    }

    if (e.target === $speechStopBtn) {
      speechSynthesis.cancel();
    }
  });
};
