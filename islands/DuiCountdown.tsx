import { useSignal } from "@preact/signals";
import { TimeLeft, getTimeRemaining } from "../utils/helpers.ts";
import confetti from "https://esm.sh/canvas-confetti@1.6.0";
import { confettiPopCount, PARTICLE_COUNT } from "../utils/state.ts";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.6.1/runtime.ts";


// const deadline = Date.now() + 5000;
const deadline = Date.parse('31 Dec 2023 23:59:59 GMT+3');
console.log(new Date().toTimeString());

export function DuiCountdown(){
  const timeLeft = useSignal({} as TimeLeft);
  const timerRunning = useSignal(false);
 

  if (!timerRunning.value) {
    timerRunning.value = true;
    const x = setInterval(async () => {
                  timeLeft.value = getTimeRemaining(deadline);
                 
                  if (timeLeft.value.seconds == 0) {
                    confettiPopCount.value += 1;
                    IS_BROWSER && confetti({
                        particleCount: PARTICLE_COUNT,
                        spread: 70,
                        origin: { y: 0.6 }
                      });

                    // const url = "/api/livemessage";
                    // const payload = {"message": "pop count:" + confettiPopCount.value.toString()};
                    // const response =  IS_BROWSER && await fetch(url, { method: "POST", credentials: "same-origin", body: JSON.stringify(payload) });
                  };

                  if (timeLeft.value.over) {
                    clearInterval(x);
                  }
                }    
              , 1000);
  }

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max py-6 md:py-2">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":timeLeft.value.days}}></span>
        </span>
        days
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":timeLeft.value.hours}}></span>
        </span>
        hours
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":timeLeft.value.minutes}}></span>
        </span>
        min
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":timeLeft.value.seconds}}></span>
        </span>
        sec
      </div>
    </div>
  )
}