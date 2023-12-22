import { useSignal, useSignalEffect } from "@preact/signals";
// import { useEffect } from "preact/hooks";

export function LiveMessageBox() {
  const newMessage = useSignal("");

  useSignalEffect(() => {
    let es = new EventSource("/api/sse");

    const handleMessage = (e) => {
      newMessage.value = JSON.parse(e.data);
    };

    const handleConnectionError = async () => {
      es.close();
      const backoff = 5000 + Math.random() * 5000;
      await new Promise((resolve) => setTimeout(resolve, backoff));

      es = new EventSource("/api/sse");
      es.addEventListener("message", handleMessage);
      es.addEventListener("error", handleConnectionError);
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
      <p class="text-4xl font-black text-primary">
        {newMessage}
      </p>
    </div>
  )
}