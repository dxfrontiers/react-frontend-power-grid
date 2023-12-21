import './App.css';
import getCapacity from './services/api'
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCapacity();
        console.log('Daten vom Backend:', result);
        setData(result);
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Lädt...</p>;
  }

  return (
      <div>
        <h1>Daten vom Backend</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  );
}


export default App;
