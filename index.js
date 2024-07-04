const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const imageContainers = document.querySelectorAll('.container');
    
imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    const key = container.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (audio) {
      if (audio.paused) {
        audio.currentTime = 0; // Rewind to the start
        audio.play(); // Play the sound
      } else {
        audio.pause(); // Pause the sound
      }
    }
  });
});
