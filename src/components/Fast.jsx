import React, { useEffect, useState } from "react";
import axios from "axios";

const MatkaBookingPage = () => {
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "";

  const yellowishNames = [
      "Shubh Morning",
    "Shubh Day Open", 
    "Shubh Night",
    "SUNDAY  DAY",
    "SUNDAY NIGHT",
    "MUMBAI DAY",
    "MUMBAI NIGHT",
    "KALYAN DAY",
    "KALYAN NIGHT", 
    "RAJDHANI DAY",
    "RAJDHANI NIGHT",
    "MILAN DAY",
    "MILAN NIGHT",
    "SRIDEVI DAY",
    "SRIDEVI NIGHT",
    "TIME BAZAR DAY",
    "TIME BAZAR NIGHT",
    "MAIN BAZAR DAY", 
    "MAIN BAZAR NIGHT"

  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/shubhtimes`);
        setApiResults(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#FFEBCD", padding: "20px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        apiResults.map((result, index) => {
          const isYellow = yellowishNames.includes(result.label);
          return (
            <div
              key={index}
              style={{
                margin: "10px 0",
                padding: "20px",
                backgroundColor: isYellow ? "#FFB74D" : "#F0F4C3",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <span
                style={{
                  backgroundColor: "#9C27B0",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: "14px",
                }}
              >
                Jodi
              </span>

              <div style={{ textAlign: "center", flex: 1 }}>
                <h2>{result.label}</h2>
                <p style={{ fontSize: "18px", margin: "5px 0" }}>{result.value}</p>
                <p style={{ fontSize: "14px", margin: "0" }}>{result.time_range}</p>
              </div>

              <span
                style={{
                  backgroundColor: "#9C27B0",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: "14px",
                }}
              >
                Panel
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MatkaBookingPage;