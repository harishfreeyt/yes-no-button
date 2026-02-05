// Simple behavior: toggle active class and print chosen value
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  if (!yesBtn || !noBtn) {
    console.error('Buttons not found in DOM. Check IDs in HTML.');
    return;
  }

  function clearActive() {
    yesBtn.classList.remove('active');
    noBtn.classList.remove('active');
  }

  yesBtn.addEventListener('click', () => {
    clearActive();
    yesBtn.classList.add('active');
    console.log('Chosen: YES');
  });

  noBtn.addEventListener('click', () => {
    clearActive();
    noBtn.classList.add('active');
    console.log('Chosen: NO');
  });
});
