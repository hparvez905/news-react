import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/news/News';
import { Row } from 'react-bootstrap';

function App() {
  const [news,setnews] = useState([]);

  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=b2664cd7a1bb49a6a4abb207d0e3b913')
    .then(res=>res.json())
    .then(data=>setnews(data.articles))
  },[])
  return (
    <div className="App">
    <Row xs={1} md={3} className="g-4">
  {
    news.map( nw => <News news={nw}></News>)
  }
</Row>
    </div>
  );
}

export default App;
