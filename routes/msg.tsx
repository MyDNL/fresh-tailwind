import { Handlers } from "$fresh/server.ts";
import { type MsgData, updateDb } from "../utils/db.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const fmsg = form.get("fmsg")?.toString() || "";
    const feff = form.get("feff")?.toString() || null;
    const msg: MsgData = {
      "message": fmsg,
      "effect": feff
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
      <div class="flex flex-col p-4 justify-center space-y-4">
        <div>
          <textarea 
            id="fmsg" 
            name="fmsg" 
            placeholder="New message to broadcast" 
            class="textarea textarea-bordered textarea-sm w-full max-w-xs" >
          </textarea>
        </div>
        <div>
          <select id="feff" name="feff" class="select select-bordered w-full max-w-xs">
            <option disabled selected>Select effect</option>
            <option>None</option>
            <option>Snow</option>
            <option>Stars</option>
            <option>Fener</option>
          </select>
        </div>
        <div my-4>
          <button type="submit" class="btn btn-outline">Submit</button>
        </div>
      </div>
    </form>
  );
}