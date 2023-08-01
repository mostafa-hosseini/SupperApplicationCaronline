import React from "react";
import Chart from "react-apexcharts";

function CryptoChart({ coinName, color, priceList }) {
  return (
    <Chart
      options={{
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: coinName + "price in 7 day",
          align: "center",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0,
            stops: [0, 90, 100],
            color: "#fff",
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val.toFixed(0);
            },
          },
          title: {
            text: "Price",
          },
        },

        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          type: "numeric",
          enabled: false,
        },
        colors: [color],
      }}
      series={[
        {
          name: coinName + " price",
          data: priceList,
        },
      ]}
      type="area"
      height={350}
      width={"100%"}
    />
  );
}

export default CryptoChart;
