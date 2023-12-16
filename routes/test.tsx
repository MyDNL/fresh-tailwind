import TwSimpleList from "../components/TwSimpleList.tsx";
import { MyTabs } from "../islands/HuiTab.tsx";
import { DuiModal } from "../islands/DuiModal.tsx";

export default function Test() {
  return (
    <>
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
