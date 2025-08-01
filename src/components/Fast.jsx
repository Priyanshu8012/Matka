import React, { useEffect, useState } from "react";
import axios from "axios";

const MatkaBookingPage = () => {
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "";


  const staticMarkets = [
    { label: "KALYAN", value: "123-45-678", time_range: "11:00 AM" },
    { label: "MUMBAI DAY", value: "234-56-789", time_range: "12:30 PM" },
    { label: "RAJDHANI DAY", value: "345-67-890", time_range: "2:00 PM" },
    { label: "KUBER MORNING", value: "456-78-901", time_range: "3:00 PM" },
    { label: "MUMBAI NIGHT", value: "567-89-012", time_range: "4:00 PM" },
    { label: "KALYAN NIGHT", value: "678-90-123", time_range: "5:00 PM" },
    { label: "RAJDHANI NIGHT", value: "789-01-234", time_range: "6:00 PM" },
    { label: "SUPREME DAY", value: "890-12-345", time_range: "7:00 PM" },
    { label: "SUPREME NIGHT", value: "901-23-456", time_range: "8:00 PM" },
    { label: "MAIN BAZAR", value: "012-34-567", time_range: "9:00 PM" },
    { label: "TIME BAZAR", value: "135-79-246", time_range: "10:00 PM" },
    { label: "MILAN NIGHT", value: "246-80-357", time_range: "11:00 PM" },
    { label: "SRIDEVI", value: "357-91-468", time_range: "11:30 PM" },
    { label: "MADHUR DAY", value: "468-02-579", time_range: "12:00 AM" },
    { label: "MADHUR NIGHT", value: "579-13-680", time_range: "12:30 AM" },
    { label: "KALYAN MORNING", value: "680-24-791", time_range: "1:00 AM" },
    { label: "MILAN MORNING", value: "791-35-802", time_range: "1:30 AM" },
    { label: "SUPREME MORNING", value: "802-46-913", time_range: "2:00 AM" },
    { label: "SUNDAY SPECIAL", value: "913-57-024", time_range: "2:30 AM" },
    { label: "MUMBAI SPECIAL", value: "024-68-135", time_range: "3:00 AM" },
    { label: "RAJDHANI SPECIAL", value: "135-79-246", time_range: "3:30 AM" },
    { label: "GALI", value: "246-80-357", time_range: "4:00 AM" },
    { label: "DELHI BAZAR", value: "357-91-468", time_range: "4:30 AM" },
    { label: "FARIDABAD", value: "468-02-579", time_range: "5:00 AM" },
    { label: "GAZIABAD", value: "579-13-680", time_range: "5:30 AM" },
    { label: "DISAWAR", value: "680-24-791", time_range: "6:00 AM" },
    { label: "PUNE BAZAR", value: "791-35-802", time_range: "6:30 AM" },
    { label: "KOLKATA EXPRESS", value: "802-46-913", time_range: "7:00 AM" },
    { label: "SHIVDAYAL", value: "913-57-024", time_range: "7:30 AM" },
    { label: "AGRA KING", value: "024-68-135", time_range: "8:00 AM" },
    { label: "LUCKNOW GOLD", value: "135-79-246", time_range: "8:30 AM" },
    { label: "NOIDA EXPRESS", value: "246-80-357", time_range: "9:00 AM" },
    { label: "DELHI MORNING", value: "357-91-468", time_range: "9:30 AM" },
    { label: "GHAZIABAD SPECIAL", value: "468-02-579", time_range: "10:00 AM" },
    { label: "FARIDABAD NIGHT", value: "579-13-680", time_range: "10:30 AM" },
    { label: "DELHI NIGHT", value: "680-24-791", time_range: "11:00 AM" },
    { label: "PUNE MORNING", value: "791-35-802", time_range: "11:30 AM" },
    { label: "LUCKNOW NIGHT", value: "802-46-913", time_range: "12:00 PM" },
    { label: "RAIPUR GOLD", value: "913-57-024", time_range: "12:30 PM" },
    { label: "PATNA EXPRESS", value: "024-68-135", time_range: "1:00 PM" },
    { label: "GUJARAT KING", value: "135-79-246", time_range: "1:30 PM" },
    { label: "GOA SPECIAL", value: "246-80-357", time_range: "2:00 PM" },
  ];

  const yellowishNames = [
    "Shubh Morning",
    "Shubh Day Open",
    "Shubh Night",
    "SUNDAY  DAY",
    "SUNDAY NIGHT"
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

  // Merge static and API results
  const combined = [];
  let apiIndex = 0;
  let staticIndex = 0;
  const chunkPattern = [4, 8, 10];
  let patternIndex = 0;

  while (staticIndex < staticMarkets.length || apiIndex < apiResults.length) {
    const staticChunkSize = chunkPattern[patternIndex % chunkPattern.length];

    for (let i = 0; i < staticChunkSize && staticIndex < staticMarkets.length; i++) {
      combined.push({ ...staticMarkets[staticIndex++], isApi: false });
    }

    if (apiIndex < apiResults.length) {
      const item = apiResults[apiIndex++];
      combined.push({
        label: item.label || "UNKNOWN",
        value: item.value || "---",
        time_range: item.time_range || "---",
        isApi: true,
      });
    }

    patternIndex++;
  }

  return (
    <div style={{ backgroundColor: "#FFEBCD", padding: "20px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        combined.map((result, index) => {
          const isYellow = result.isApi && yellowishNames.includes(result.label);
          return (
            <div
              key={index}
              style={{
                margin: "10px 0",
                padding: "20px",
                backgroundColor: isYellow
                  ? "#FFB74D"
                  : result.isApi
                  ? "#F0F4C3"
                  : "#B2DFDB",
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
