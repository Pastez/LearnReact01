import { IProjectsItem } from "../../data/IDataModel";

const ProjectDetails: React.FC<{ project: IProjectsItem }> = (props) => {
    const project = props.project;
    return <>
        <div className="pd-background" style={{ backgroundImage: `url(/images/${project.image})`}}/>
        <div className="pd-content" style={{color: project.color}}>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
        </div>
        </>
}

export default ProjectDetails;