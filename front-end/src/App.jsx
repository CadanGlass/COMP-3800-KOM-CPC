import axios from "axios";
import { useState, useEffect } from "react";

const url = "http://localhost:1337/api/programs";

function App() {
  const [programTitles, setProgramTitles] = useState(null); // Initialize state to null
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log("Data retrieved", response.data);
        setProgramTitles(
          response.data.data.map((item) => item.attributes.title)
        ); // Set titles
        setLoading(false); // Set loading to false
      } catch (error) {
        if (error.response) {
          console.error("Error response", error.response.data);
          setProgramTitles(null); // In case of error, clear titles
          setLoading(false); // Set loading to false
        } else {
          console.error("Error", error);
          setProgramTitles(null);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>; // Show loading while data is being fetched

  if (!programTitles) return <h1>Failed to fetch data</h1>; // Show error message if no data

  return (
    <>
      <h1>Program Titles</h1>
      <ul>
        {programTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
