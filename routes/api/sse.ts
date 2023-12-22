import { Handlers } from "$fresh/server.ts";
import { type MsgData, db, loadList } from "../../utils/db.ts";
// import { type ServerSentEventMessage, ServerSentEventStream } from "$std/http/server_sent_event_stream.ts";

export const handler: Handlers = {
  GET: async (req, ctx) => {
    const accept = req.headers.get("accept");
    // const url = new URL(req.url);
    const ch = "public";

    if (accept === "text/event-stream") {
      const kvStream = db.watch([["channel_updated", ch]]).getReader();
      const sseStream = new ReadableStream({
        async start(controller) {
          console.log(`Opened stream remote ${JSON.stringify(ctx.remoteAddr)}`);

          while (true) {
            try {
              if ((await kvStream.read()).done) {
                return;
              }

              const data = await loadList(ch);
              const chunk = `data: ${JSON.stringify(data)}\n\n`;
              controller.enqueue(new TextEncoder().encode(chunk));              
            } catch (e) {
              console.error(`Error gettig messages!!`, e);
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

