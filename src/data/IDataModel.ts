export interface IBaseSection {
    title: string;
    desc: string;
}

export interface IProjectsItem extends IBaseSection {
    id: string;
    color: string;
    image: string;
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