import { DuiStat } from "../islands/DuiStat.tsx";
import { DuiCountdown } from "../islands/DuiCountdown.tsx";
import { GradientTitle } from "../components/GradientTitle.tsx";
import { LiveMessageBox } from "../islands/LiveMessageBox.tsx";

const region = Deno.env.get("DENO_REGION") || "" ;
const cloudProvider = (region.split("-").length - 1 == 1) ? "GCP" : "AWS";

export default function Home() {
  return (
    <div class="px-4 py-2 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <GradientTitle />
        <DuiCountdown />
        <DuiStat region={region} cloudProvider={cloudProvider}/>
        <LiveMessageBox />
      </div>
    </div>
  );
}
