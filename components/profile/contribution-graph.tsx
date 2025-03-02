"use client"

export default function ContributionGraph() {
  // Generate random contribution data
  const generateData = () => {
    const weeks = 53;
    const days = 7;
    const data = [];
    
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const random = Math.random();
        let level = 0;
        if (random > 0.8) level = Math.floor(Math.random() * 4) + 1;
        
        // Add some recent activity patterns at the end
        if (week > 50) {
          if ((week === 51 && (day === 1 || day === 3 || day === 5)) ||
              (week === 52 && (day === 0 || day === 2))) {
            level = Math.floor(Math.random() * 2) + 3; // 3 or 4 (heavy activity)
          }
        }
        
        data.push({ week, day, level });
      }
    }
    
    return data;
  };
  
  const contributionData = generateData();
  
  // Get contribution color based on level
  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "#161b22"; // Empty cell
      case 1: return "#0e4429"; // Light
      case 2: return "#006d32"; // Medium
      case 3: return "#26a641"; // Heavy
      case 4: return "#39d353"; // Very heavy
      default: return "#161b22";
    }
  };
  
  // Month labels for the top
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Calculate month positions
  const monthPositions = [
    { month: "Jan", position: 0 },
    { month: "Feb", position: 4 },
    { month: "Mar", position: 8 },
    { month: "Apr", position: 13 },
    { month: "May", position: 17 },
    { month: "Jun", position: 21 },
    { month: "Jul", position: 26 },
    { month: "Aug", position: 30 },
    { month: "Sep", position: 34 },
    { month: "Oct", position: 39 },
    { month: "Nov", position: 43 },
    { month: "Dec", position: 47 }
  ];

  // Day labels
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-medium">29 contributions in the last year</h2>
        <button className="text-xs text-[#58a6ff]">Contribution settings ▼</button>
      </div>

      <div className="border border-[#30363d] rounded-md p-4 bg-[#161b22]">
        {/* Month labels */}
        <div className="flex mb-4">
          <div className="w-[30px]"></div>
          <div className="flex-1 relative" style={{ height: '15px' }}>
            {monthPositions.map((item, index) => (
              <div 
                key={`month-${index}`} 
                className="absolute text-xs text-[#8b949e]"
                style={{ left: `${(item.position * 100) / 53}%` }}
              >
                {item.month}
              </div>
            ))}
          </div>
        </div>

        {/* Contribution grid container */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col justify-between text-xs text-[#8b949e] mr-2 h-[119px]">
            {days.map((day, index) => (
              <div key={`day-label-${index}`}>{day}</div>
            ))}
          </div>

          {/* Contribution grid - flat implementation */}
          <div className="contribution-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(53, 1fr)',
            gridTemplateRows: 'repeat(7, 1fr)',
            gap: '2px',
            gridAutoFlow: 'column',
            width: '100%'
          }}>
            {contributionData.map((item) => (
              <div
                key={`day-${item.week}-${item.day}`}
                className="rounded-sm"
                style={{ 
                  backgroundColor: getContributionColor(item.level),
                  width: '10px',
                  height: '10px'
                }}
                title={`${item.level} contributions on ${days[item.day]}`}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center mt-4 text-xs text-[#8b949e]">
          <div>Learn how we count contributions</div>
          <div className="flex items-center">
            <span className="mr-1">Less</span>
            <div className="flex gap-[2px]">
              <div className="w-[10px] h-[10px] rounded-sm bg-[#161b22]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#0e4429]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#006d32]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#26a641]"></div>
              <div className="w-[10px] h-[10px] rounded-sm bg-[#39d353]"></div>
            </div>
            <span className="ml-1">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
