import { IProjectsItem } from "../../data/IDataModel";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import { useLocation } from "react-router";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectIndex: React.FC<{ projects: [IProjectsItem] }> = (projectProps) => {
    let location = useLocation();
    console.log(location);
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="pl-fade"
                timeout={300}
            >
                <Switch location={location}>
                    <Route exact path="/projects" children={<Projects projects={projectProps.projects} />} />
                    <Route path="/projects/:id" render={(props) => {
                        const project = projectProps.projects.find(project => project.id === props.match.params.id);
                        if (project) {
                            return <ProjectDetails {...props} project={project} />
                        } else {
                            return <h1>PROJECT NOT FOUND</h1>
                        }
                    }} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>)
}

export default ProjectIndex;