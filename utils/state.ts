import { computed, signal } from "@preact/signals";

export const PARTICLE_COUNT = 120;

export const confettiPopCount = signal(0);

export const particleCount = computed(() => {
  return PARTICLE_COUNT * confettiPopCount.value;
});

// export const minutesLeft = computed(() => {

// })

