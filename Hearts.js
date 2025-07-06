const heartsBg = document.querySelector('.hearts-bg');
function spawnHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';

  // Random size, position, and animation duration
  const size = Math.random() * 18 + 24; // 24px - 42px
  const left = Math.random() * 97;
  const top = Math.random() * 94; // 0% - 94% from top
  const duration = Math.random() * 2 + 4.5; // 4.5s - 6.5s (slower)
  const delay = Math.random() * 1.4;

  heart.style.left = `${left}%`;
  heart.style.top = `${top}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.opacity = 0;
  heart.style.animationDelay = `${delay}s`;
  heart.style.setProperty('--duration', `${duration}s`);

  heartsBg.appendChild(heart);

  setTimeout(() => heart.remove(), (duration + delay) * 1000 + 100);
}

// Interval slower and more random
setInterval(spawnHeart, 950);

// Burst inicial
for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 350);
