import IDataModel from './data/IDataModel';
import React from 'react';
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom';

export const Projects: React.FC<IDataModel & RouteComponentProps<{name?:string}>> = (props) => {
    const projects = props.projects;
    const projectName = props.match.params.name;
    const goBack = projectName ? <NavLink to="/projects">Back</NavLink> : <></>;
    const projectList = projects.projects
        .filter(item => !projectName || item.id === props.match.params.name)
        .map(item => (
        <div key={item.id}>
                <NavLink to={`${props.location.pathname}/${item.id}`}><h3>{item.title}</h3></NavLink>
            <p>{item.desc}</p>
            <hr/>
        </div>
    ));
    console.log(props);
    return <>
        <h1>{projects.title}</h1>
        {projectList}
        {goBack}
    </>
}

export default Projects;