import IProjectsItem from '../../data/IDataModel'

const ProjectItem: React.FC<IProjectsItem> = (props) => {
    return <div>
        <h1>{props.title}</h1>
        <h1>{props.desc}</h1>
    </div>
}

export default ProjectItem;