import { confettiPopCount, particleCount } from "../utils/state.ts";

export function DuiStat(){

  const region = Deno.env.get("DENO_REGION") || "" ;
  const cloudProvider = (region.split("-").length - 1 == 1) ? "GCP" : "AWS";

  return (
    <div className="stats stats-vertical sm:stats-horizontal shadow">
    
      <div className="stat place-items-center">
        <div className="stat-title">Confetti</div>
        <div className="stat-value">{confettiPopCount.value}</div>
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