import { Handlers } from "$fresh/server.ts";
import { type Settings, updateDb } from "../utils/db.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const fmsg = form.get("fmsg")?.toString() || "";
    const msg: Settings = {
      "message": fmsg
    };
    updateDb(msg);

    // Redirect to home page
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function NewMessage() {
  return (
    <>
      <form method="post">
        <label for="fmsg">New message to broadcast:</label>
        <input type="text" id="fmsg" name="fmsg" value="" />
        <button type="submit">Broadcast</button>
      </form>
    </>
  );
}