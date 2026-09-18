import confetti from 'canvas-confetti';

/**
 * Hiệu ứng "Tung bông tung hoa" hoành tráng chào mừng câu trả lời đúng
 */
export function triggerCelebrationFlowerBurst() {
  // Flower & celebratory colors: vibrant gold, magenta, rose, violet, emerald
  const colors = ['#FACC15', '#EC4899', '#A855F7', '#38BDF8', '#34D399', '#F43F5E'];

  // Left cannon
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 65,
    origin: { x: 0.1, y: 0.75 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Right cannon
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 65,
    origin: { x: 0.9, y: 0.75 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Center blossom burst
  confetti({
    particleCount: 40,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#FDE047', '#F472B6', '#C084FC', '#FFFFFF'],
    gravity: 0.8,
    ticks: 200,
    scalar: 1.2,
  });
}

/**
 * Hiệu ứng siêu hoành tráng khi hoàn thành bài thi với kết quả cao
 */
export function triggerGrandVictoryFireworks() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    confetti({
      particleCount,
      origin: { x: randomInRange(0.15, 0.4), y: Math.random() - 0.2 },
      colors: ['#FACC15', '#E879F9', '#818CF8', '#34D399'],
    });
    confetti({
      particleCount,
      origin: { x: randomInRange(0.6, 0.85), y: Math.random() - 0.2 },
      colors: ['#FBBF24', '#F43F5E', '#A855F7', '#38BDF8'],
    });
  }, 250);
}

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
