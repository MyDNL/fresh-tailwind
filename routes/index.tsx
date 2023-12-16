import { useSignal } from "@preact/signals";
import TwSimpleList from "../components/TwSimpleList.tsx";
import { MyTabs } from "../islands/HuiTab.tsx";
import { DuiStat } from "../islands/DuiStat.tsx";
import { DuiCountdown } from "../islands/DuiCountdown.tsx";
import { DuiModal } from "../islands/DuiModal.tsx";
import { GradientTitle } from "../components/GradientTitle.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <div class="px-4 py-2 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <GradientTitle />
          <DuiCountdown />
          <DuiStat />        
        </div>
      </div>
      <div class="grid grid-cols-1 justify-center gap-6 pt-6">
        <DuiModal />
        <div>
          <p>These are daisyUI components</p>
          <p> - Import daisyUI from npm.</p>
        </div>  
        <div class="flex gap-4">
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
        <div>
          <p>This is an imported "Tab" component from HeadlessUI</p>
          <p> - It is a React component.</p>
          <p> - Preact/compat mode is needed to use it.</p>
        </div>
        <MyTabs />
        <div>
          <p>This is a "Simple StackedList" component from TailwindUI</p>
          <p> - Just copy-paste the html code.</p>
        </div>
        <TwSimpleList />
      </div>
    </>
  );
}
