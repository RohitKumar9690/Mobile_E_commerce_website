import React from 'react'
import './Css/Animated.css'
const AnimatedText = () => {
    return (
        <div style={{ backgroundColor: "#fff", height: "10vh", position: "relative" }}>
        <svg viewBox="0 0 1320 300" className="deal-svg">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" className="deal-text">
            DEAL OF THE DAY
          </text>
        </svg>
      </div>    )
}

export default AnimatedText