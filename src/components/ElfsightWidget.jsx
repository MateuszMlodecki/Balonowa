import React, { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-5083c53d-4299-44e4-8da3-1ffa296df30d"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
