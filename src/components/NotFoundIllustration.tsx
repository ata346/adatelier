const NotFoundIllustration = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full max-w-lg mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle
        cx="400"
        cy="300"
        r="200"
        fill="hsl(var(--brand-light-gray))"
        opacity="0.3"
        className="animate-pulse"
      />

      {/* Floating Elements */}
      <g className="animate-[float_3s_ease-in-out_infinite]">
        <circle
          cx="150"
          cy="150"
          r="20"
          fill="hsl(var(--brand-mid-blue))"
          opacity="0.6"
        />
      </g>
      <g className="animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: "0.5s" }}>
        <circle
          cx="650"
          cy="180"
          r="15"
          fill="hsl(var(--brand-electric-blue))"
          opacity="0.6"
        />
      </g>
      <g className="animate-[float_3.5s_ease-in-out_infinite]" style={{ animationDelay: "1s" }}>
        <circle
          cx="680"
          cy="450"
          r="18"
          fill="hsl(var(--brand-deep-blue))"
          opacity="0.6"
        />
      </g>

      {/* Main Character - Lost Robot/Person */}
      <g className="animate-[bounce_2s_ease-in-out_infinite]">
        {/* Body */}
        <rect
          x="350"
          y="320"
          width="100"
          height="120"
          rx="10"
          fill="hsl(var(--brand-deep-blue))"
        />
        
        {/* Head */}
        <rect
          x="360"
          y="260"
          width="80"
          height="80"
          rx="15"
          fill="hsl(var(--brand-mid-blue))"
        />
        
        {/* Antenna */}
        <line
          x1="400"
          y1="260"
          x2="400"
          y2="230"
          stroke="hsl(var(--brand-deep-blue))"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="400"
          cy="225"
          r="8"
          fill="hsl(var(--brand-electric-blue))"
          className="animate-pulse"
        />

        {/* Eyes - Confused look */}
        <g className="animate-[blink_4s_ease-in-out_infinite]">
          <circle cx="380" cy="285" r="8" fill="hsl(var(--brand-white))" />
          <circle cx="380" cy="285" r="4" fill="hsl(var(--brand-dark-navy))" />
          
          <circle cx="420" cy="285" r="8" fill="hsl(var(--brand-white))" />
          <circle cx="420" cy="285" r="4" fill="hsl(var(--brand-dark-navy))" />
        </g>

        {/* Mouth - Sad/Confused */}
        <path
          d="M 375 310 Q 400 305 425 310"
          stroke="hsl(var(--brand-dark-navy))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arms */}
        <rect
          x="320"
          y="340"
          width="30"
          height="60"
          rx="8"
          fill="hsl(var(--brand-mid-blue))"
          className="origin-[335px_345px] animate-[wave_1.5s_ease-in-out_infinite]"
        />
        <rect
          x="450"
          y="340"
          width="30"
          height="60"
          rx="8"
          fill="hsl(var(--brand-mid-blue))"
          className="origin-[465px_345px] animate-[wave_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: "0.75s" }}
        />

        {/* Legs */}
        <rect
          x="365"
          y="440"
          width="30"
          height="70"
          rx="8"
          fill="hsl(var(--brand-deep-blue))"
        />
        <rect
          x="405"
          y="440"
          width="30"
          height="70"
          rx="8"
          fill="hsl(var(--brand-deep-blue))"
        />
      </g>

      {/* Question Marks */}
      <g className="animate-[float_2.5s_ease-in-out_infinite]" opacity="0.7">
        <text
          x="280"
          y="250"
          fontSize="40"
          fontWeight="bold"
          fill="hsl(var(--brand-mid-blue))"
        >
          ?
        </text>
      </g>
      <g className="animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: "0.3s" }} opacity="0.7">
        <text
          x="520"
          y="280"
          fontSize="35"
          fontWeight="bold"
          fill="hsl(var(--brand-electric-blue))"
        >
          ?
        </text>
      </g>

      {/* Broken Path/Map Lines */}
      <path
        d="M 200 500 L 250 480 L 300 490"
        stroke="hsl(var(--brand-light-gray))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10,10"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 500 500 L 550 480 L 600 490"
        stroke="hsl(var(--brand-light-gray))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="10,10"
        fill="none"
        opacity="0.5"
      />

      {/* Broken link symbol */}
      <g transform="translate(250, 400)" opacity="0.6">
        <rect
          x="0"
          y="0"
          width="40"
          height="10"
          rx="5"
          fill="hsl(var(--brand-mid-blue))"
          transform="rotate(-45 20 5)"
        />
        <rect
          x="30"
          y="20"
          width="40"
          height="10"
          rx="5"
          fill="hsl(var(--brand-mid-blue))"
          transform="rotate(-45 50 25)"
        />
        <line
          x1="25"
          y1="15"
          x2="35"
          y2="25"
          stroke="hsl(var(--destructive))"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Page not found symbol */}
      <g transform="translate(510, 390)" opacity="0.6">
        <rect
          x="0"
          y="0"
          width="50"
          height="60"
          rx="5"
          fill="hsl(var(--brand-light-gray))"
          stroke="hsl(var(--brand-mid-blue))"
          strokeWidth="3"
        />
        <line x1="10" y1="15" x2="40" y2="15" stroke="hsl(var(--brand-mid-blue))" strokeWidth="2" />
        <line x1="10" y1="25" x2="40" y2="25" stroke="hsl(var(--brand-mid-blue))" strokeWidth="2" />
        <line x1="10" y1="35" x2="30" y2="35" stroke="hsl(var(--brand-mid-blue))" strokeWidth="2" />
        <line
          x1="10"
          y1="10"
          x2="40"
          y2="50"
          stroke="hsl(var(--destructive))"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="10"
          x2="10"
          y2="50"
          stroke="hsl(var(--destructive))"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Add custom keyframes in style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }
      `}</style>
    </svg>
  );
};

export default NotFoundIllustration;
