import * as React from "react";
// import Chart from 'react-apexcharts'
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const GrowthChart = () => {
  let options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    title: {
      text: "Grouped Labels on the X-axis",
    },
  };

  const growthState = {
    series: [
      {
        name: "Artist",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: "#ff0093",
      },
      {
        name: "Investor",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: "#00D3BD",
      },
      {
        name: "Business",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        color: "#000000",
      },
    ],
  };

  return (
    <div id="chart" className="p-1">
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={options}
          series={growthState.series}
          type="bar"
        />
      )}
    </div>
  );
};
