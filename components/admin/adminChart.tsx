import * as React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const AdminChart = () => {
  let options = {
    labels: ['Income', 'Expense'], 
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "85%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#ffffff", // Change this to white
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "#ffffff", // Change this to white
              offsetY: 16,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: false,
              showAlways: false,
              label: "Total",
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#ffffff", // Change this to white
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
      stroke: {
        color: "transparent",
      },
    },
    colors: ["#00D3BD", "#ff0093"],
  };
  const pieState = {
    series: [44, 55],
  };

  return (
    <div id="chart" className="p-4 m-1 background-shadow">
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={options}
          series={pieState.series}
          type="pie"
          height={350}
        />
      )}
    </div>
  );
};
