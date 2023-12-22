import confetti from "https://esm.sh/canvas-confetti@1.6.0";
import { PARTICLE_COUNT } from "../utils/state.ts";

export function confetti_basic(){
  confetti({
    particleCount: PARTICLE_COUNT,
    spread: 70,
    origin: { y: 0.6 }
  });
}

export function confetti_stars(){
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle']
    });
  }  

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

export function confetti_snow(){
  const duration = 5000 + Math.random() * 15000;
  const animationEnd = Date.now() + duration;
  let skew = 1;
  
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  
  (function frame() {
    const timeLeft = animationEnd - Date.now();
    const ticks = Math.max(100, 400 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
  
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    });
  
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  }());
}

export function confetti_fener(){
  const end = Date.now() + (3000 + Math.random() * 8000);

  // const colors = ['#bb0000', '#ffffff'];
  const colors = ['#ffed00', '#002d72'];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}