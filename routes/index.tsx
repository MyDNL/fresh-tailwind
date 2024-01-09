import { FreshContext, Handlers } from "$fresh/server.ts";
import { serverRegion } from "../utils/state.ts";
import { DuiStat } from "../islands/DuiStat.tsx";
import { DuiCountdown } from "../islands/DuiCountdown.tsx";
import { GradientTitle } from "../components/GradientTitle.tsx";
import { LiveMessageBox } from "../islands/LiveMessageBox.tsx";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: FreshContext) {
    serverRegion.value = "GCP";
    const resp = await _ctx.render();
    return resp;    
  },
};

export default function Home() {
  return (
    <div class="px-4 py-2 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <GradientTitle />
        <DuiCountdown />
        <DuiStat />
        <LiveMessageBox />
      </div>
    </div>
  );
}
