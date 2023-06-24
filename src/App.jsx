import React, { useState, useRef } from "react";
import BarChart from "./components/Bar";
import { CompanyData } from "./utils/data";
import LineChart from "./components/Line";
import PieChart from "./components/Pie";
import DoughnutChart from "./components/Doughnut";
import Navbar from "./components/Navbar";

function App() {
  const [userData, setUserData] = useState({
    labels: CompanyData.map((data) => data.label),
    datasets: [
      {
        label: "Expenses",
        data: CompanyData.map((data) => data.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    ],
  });

  const barRef = useRef(null);
  const lineRef = useRef(null);
  const pieRef = useRef(null);
  const doughnutRef = useRef(null);

  const scrollToSection = (ref) => {
    scroller.scrollTo(ref.current.props.id, {
      duration: 800,
      smooth: true,
      offset: -60,
    });
  };

  return (
    <div className="main">
      <Navbar
        onBarClick={() => scrollToSection(barRef)}
        onLineClick={() => scrollToSection(lineRef)}
        onPieClick={() => scrollToSection(pieRef)}
        onDoughnutClick={() => scrollToSection(doughnutRef)}
      />
      <div className="charts">
        <div id="barChart" ref={barRef} className="width">
          <BarChart chartData={userData} />
        </div>
        <div id="lineChart" ref={lineRef} className="width">
          <LineChart chartData={userData} />
        </div>
        <div id="pieChart" ref={pieRef} className="width">
          <PieChart chartData={userData} />
        </div>
        <div id="doughnutChart" ref={doughnutRef} className="width">
          <DoughnutChart chartData={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
