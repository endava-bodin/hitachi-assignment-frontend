import { useEffect, useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import ResultList from './components/ResultList';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([]);
  const [updated, setUpdated] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/assets')
      .then((response) => {
        setResults(response.data);
        setUpdated(false);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, [updated]);
  
  return (
    <>
      <PostForm setUpdated={setUpdated}/>
      <ResultList results={results} updated={updated}/>
    </>
  );
}

export default App;
