import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import featchJsonData from './data/FetchJsonData';
import IDataModel, { IBaseSection } from './data/IDataModel';
import Navigation from './components/navigation/Navigation';
import About from './components/about/About';
import React from 'react';
import { useTrail } from '@react-spring/core';
import { animated } from '@react-spring/web';
import ProjectIndex from './components/projects/ProjectsIndex';

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className={'trailsText'} style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

const BasePage: React.FC<IBaseSection> = (data) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Trail open={true}>
        <span>{data.title}</span>
        <span>{data.desc}</span>
        <span>{data.desc}</span>
        <span>{data.desc}</span>
      </Trail>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route>
          <AppMain />
        </Route>
      </Switch>
    </Router>
  );
}

function AppMain() {
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
    content =<>
      <div className="naviation-container"><Navigation /></div>
      <div className="content-container">
        <Switch>
          <Route path="/about" children={<About about={data.about} />}/>
          <Route path="/contact"><BasePage {...data.contact} /></Route>
          <Route path="/projects" render={(props) => {
            return <ProjectIndex {...props} projects={data.projects.projects} />
          }} />
          <Route>
            <h1>Error !</h1>
          </Route>
        </Switch>
      </div>
      </>
  } else {
    content = <span>loading data</span>
  }

  return <>{content}</>;
}

export default App;
