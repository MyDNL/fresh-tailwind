// import { IS_BROWSER } from "https://deno.land/x/fresh@1.6.1/runtime.ts";

export interface TimeLeft {
  total: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number
  over: boolean
};

export function getTimeRemaining(deadline: number): TimeLeft {
  const t = deadline - Date.now();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const tl = {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    over: t > 0 ? false : true
  };

  // if (IS_BROWSER) {
  // console.log(`browser: ${tl.seconds}`);
  // } else {
  //   console.log(`server: ${t}`);
  // } 

  return tl;
}