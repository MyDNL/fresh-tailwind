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
    <form method="post">
      <div class="flex flex-col p-4 justify-center">
        <div>
          <textarea 
            id="fmsg" 
            name="fmsg" 
            placeholder="New message to broadcast" 
            class="textarea textarea-bordered textarea-sm w-full max-w-xs" >
          </textarea>
        </div>
        <div my-4>
          <button type="submit" class="btn btn-outline">Submit</button>
        </div>
      </div>
    </form>
  );
}