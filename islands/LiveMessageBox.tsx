import { signal, useSignal, effect, useSignalEffect } from "@preact/signals";

export function LiveMessageBox() {
  const newMessage = useSignal("Happy new year.");

  useSignalEffect(() => {
    const es = new EventSource("/api/sse");

    es.addEventListener("message", (e) => {
      newMessage.value = JSON.parse(e.data);
      // newMessage.value = e.data;
    });

    es.addEventListener("error", async () => {
      es.close();
      // const backoff = 10000 + Math.random() * 5000;
      // await new Promise((resolve) => setTimeout(resolve, backoff));
      // es = new EventSource("/api/sse");
    }); 

  });

  return(
    <div class="pt-6">
      <p class="text-4xl font-black text-primary">
        {newMessage}
      </p>
    </div>
  )
}