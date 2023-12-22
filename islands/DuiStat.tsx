import { confettiPopCount, particleCount } from "../utils/state.ts"

export function DuiStat(){
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
        <div className="stat-title">New Age</div>
        <div className="stat-value">+1</div>
        <div className="stat-desc">↗︎ up to 90</div>
      </div>
    
    </div>
  )
}