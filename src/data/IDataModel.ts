export interface IBaseSection {
    title: string;
    desc: string;
}

interface IProjectsItem extends IBaseSection {
    id: string;
}

interface IProjects extends IBaseSection {
    projects: [IProjectsItem]
}

interface IDataModel {
    about: IBaseSection
    projects: IProjects
    contact: IBaseSection
}

export default IDataModel;