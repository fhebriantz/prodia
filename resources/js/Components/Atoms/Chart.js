import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";

export function Chart({
  option = {},
  style,
  settings,
  loading,
  theme,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    function resizeChart() {
      chart?.resize();
    }

    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(option, settings);
    }
  }, [option, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (loading === true) {
        chart.showLoading();
      } else {
        chart.hideLoading();
      }
    }
  }, [loading, theme]);

  return <div ref={chartRef}  style={style}  />;
}
