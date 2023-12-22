import { useSignal, useSignalEffect } from "@preact/signals";
import { MsgData } from "../utils/db.ts";
import { confetti_stars, confetti_snow, confetti_fener } from "../utils/client_effects.ts";

export function LiveMessageBox() {
  const msgList = useSignal<MsgData[]>([]);
  const maxRetries = 3;
  let retryCount = 0;  

  useSignalEffect(() => {
    let es = new EventSource("/api/sse");

    const handleMessage = (e: MessageEvent) => {
      const newData: MsgData[] = JSON.parse(e.data);
      msgList.value = [...newData];
      if (newData[0].effect === "Stars") {confetti_stars()};
      if (newData[0].effect === "Snow") {confetti_snow()};
      if (newData[0].effect === "Fener") {confetti_fener()};
    };

    const handleConnectionError = async () => {
      if (retryCount < maxRetries) {
        retryCount += 1;
        
        es.close();
        const backoff = 5000 + Math.random() * 5000;
        await new Promise((resolve) => setTimeout(resolve, backoff));

        es = new EventSource("/api/sse");
        es.addEventListener("message", handleMessage);
        es.addEventListener("error", handleConnectionError);
      } else {
        console.error('Exceeded max retry attempts. Stopping retries.');
      }
    };

    es.addEventListener("message", handleMessage);
    es.addEventListener("error", handleConnectionError);    

    // Cleanup function
    return () => {
      es.close();
    };
  });

  return(
    <div class="pt-6">
      <ul>
        {msgList.value.map(msg => (
          <li class="text-xl text-center text-base-content">
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  )
}