import { confettiPopCount, particleCount } from "../utils/state.ts";


// This part is runnng both on server and client
// But client does not know "Deno" keyword so raises an error
// 1- Either check IS_BROWSER
// 2- Or read values from Deno.env in index.tsx and pass here.
//
// const region = Deno.env.get("DENO_REGION") || "" ;
// const cloudProvider = (region.split("-").length - 1 == 1) ? "GCP" : "AWS";

interface StatProps {
  region: string;
  cloudProvider: string;
}

export function DuiStat({ region, cloudProvider }: StatProps){
  return (
    <div className="stats stats-vertical sm:stats-horizontal shadow">
    
      <div className="stat place-items-center">
        <div className="stat-title">Confetti</div>
        <div className="stat-value">{confettiPopCount}</div>
        <div className="stat-desc">confetties fired</div>
      </div>
      
      <div className="stat place-items-center">
        <div className="stat-title">Particles</div>
        <div className="stat-value text-secondary">{particleCount}</div>
        <div className="stat-desc text-secondary">↘︎ particles fade away</div>
      </div>
      
      <div className="stat place-items-center">
        <div className="stat-title">Region</div>
        <div className="stat-value">{cloudProvider}</div>
        <div className="stat-desc">{region}</div>
      </div>
    
    </div>
  )
}