import { Handlers } from "$fresh/server.ts";
import { type Settings, db, message_key } from "../../utils/db.ts";
// import { type ServerSentEventMessage, ServerSentEventStream } from "$std/http/server_sent_event_stream.ts";

export const handler: Handlers = {
  GET: async (req, ctx) => {
    const accept = req.headers.get("accept");
    // const url = new URL(req.url);

    if (accept === "text/event-stream") {
      const kvStream = db.watch([message_key]).getReader();
      const sseStream = new ReadableStream({
        async start(controller) {
          console.log(`Opened stream remote ${JSON.stringify(ctx.remoteAddr)}`);

          while (true) {
            try {
              const data = await kvStream.read();

              if (data.done) {
                return;
              }

              const kvEntry = data.value[0];
              const newMsg = (kvEntry.value as Settings).message;
              const chunk = `data: ${JSON.stringify(newMsg)}\n\n`;
              controller.enqueue(new TextEncoder().encode(chunk));
            } catch (e) {
              console.error(`Error !!`, e);
            }
          }
        },
        cancel() {
          kvStream.cancel();
          console.log(`Closed stream remote ${JSON.stringify(ctx.remoteAddr)}`);
        },
      });

      return new Response(sseStream, {
        headers: {
          "content-type": "text/event-stream",
          "cache-control": "no-cache",
        },
      });
    };
    
    return new Response("not found", { status: 404 });
  },
};

