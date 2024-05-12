import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CircleChart = ({ currentAmount, targetAmount }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const completionPercentage = Math.round(
      (currentAmount / targetAmount) * 100
    );

    const data = {
      labels: ["Completed", "Remaining"],
      datasets: [
        {
          data: [completionPercentage, 100 - completionPercentage],
          backgroundColor: ["#36a2eb", "#FF6384"],
          hoverBackgroundColor: ["#36a2eb", "#FF6384"],
        },
      ],
    };

    const centerTextPlugin = {
      id: "doughnutCenterText",
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        const percentText = `${completionPercentage}%`;
        const amountText = `${currentAmount.toLocaleString()} VND / ${targetAmount.toLocaleString()} VND`;
        const { width, height } = chart;
        const percentFontSize = (height / 114).toFixed(2);
        const amountFontSize = (height / 300).toFixed(2); // Increased denominator to reduce the font size

        ctx.restore();
        ctx.font = `${percentFontSize}em sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        const textX = width / 2;
        const textY = height / 2;

        ctx.fillText(percentText, textX, textY);

        ctx.font = `${amountFontSize}em sans-serif`;
        ctx.fillText(amountText, textX, textY + 30); // Adjust the Y-coordinate as needed

        ctx.save();
      },
    };

    const chartConfig = {
      type: "doughnut",
      data: data,
      options: {
        cutout: "80%",
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      },
      plugins: [centerTextPlugin],
    };

    const chart = new Chart(chartRef.current, chartConfig);

    return () => {
      chart.destroy();
    };
  }, [currentAmount, targetAmount]);

  return <canvas ref={chartRef} />;
};

export default CircleChart;
