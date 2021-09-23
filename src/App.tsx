import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import featchJsonData from './data/FetchJsonData';
import Projects from './Projects';
import IDataModel, { IBaseSection } from './data/IDataModel';
import { useEffect, useState } from 'react';
import Navigation from './components/navigation/Navigation';

const BasePage: React.FC<IBaseSection> = (data) => {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
    </>
  )
}

function App() {

  const [data, setData] = useState<IDataModel>();
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const getData = () => featchJsonData('/data.json')
    .then(response => {
      console.log(response)
      return response.json();
    }).then(jsonData => {
      setData(jsonData)
      setDataLoaded(true);
    });

  useEffect(() => {
    if (!dataLoaded) {
      getData()
    }
  }, [dataLoaded]);

  let content;
  if (dataLoaded && data) {
    content = <Router>
      <Navigation />
      <Route path="/" exact>
        <Redirect to="/about" />
      </Route>
      <Route path="/about"><BasePage {...data.about} /></Route>
      <Route path="/projects/:name?" render={(props) => {
        return <Projects {...props} {...data} />
      }}>
      </Route>
      <Route path="/contact"><BasePage {...data.contact} /></Route>
    </Router>
  } else {
    content = <span>loading data</span>
  }

  return (<>
    <div>
      <h1>Cheerapp</h1>
      {content}
    </div>
  </>);
}

export default App;
