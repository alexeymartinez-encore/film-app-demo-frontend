import { useEffect, useState } from "react";

export default function TagReader() {
  const [plcs, setPlcs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/plcs")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setPlcs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching PLCs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>PLCs:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {plcs.map((plc, index) => (
            <li key={index}>{JSON.stringify(plc)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
