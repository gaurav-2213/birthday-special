// 🎊 Confetti Animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiCount = 200;
const confetti = [];

function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }
}
createConfetti(confettiCount);

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.d;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);


// 🎈 Surprise Button
const surpriseBtns = document.querySelectorAll('.surpriseBtn');
const surpriseContents = document.querySelectorAll('.surpriseContent');
const birthdaySong = document.getElementById('birthdaySong');
const balloons = document.querySelectorAll('.balloon');

surpriseBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
   // surpriseMessages[index].classList.remove('hidden'); // Show the corresponding message
   const content = surpriseContents[index];
   content.classList.toggle('hidden');
   birthdaySong.play().catch(err =>console.log(err)); // Play music
 
  // Speed up balloons and randomize colors
  balloons.forEach(b => {
    b.style.animationDuration = `${Math.random() * 3 + 2}s`;
    b.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  });

  // Intensify confetti
  createConfetti(200);

  // Disable button
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = 0.6;
});
});