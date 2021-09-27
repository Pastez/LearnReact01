import './Projects.css';
import { IProjectsItem } from '../../data/IDataModel';
import React, { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from '@react-spring/web';
import ProjectItem from './ProjectItem';

const Projects: React.FC<{ projects: IProjectsItem[]}> = (props) => {
    const projects = props.projects;

    const styles = useSpring({
        to: [
            { scale: `1.0`, },
        ],
        from: { scale: `0.8`, },
    })
    
    const parallax = useRef<IParallax>(null!)
    
    const paralaxProjectList = projects
        .map((item, index) => (
            <div key={item.id} style={{backgroundColor: 'black'}}>
                {/* <ParallaxLayer offset={index} speed={0} style={{ zIndex: index + 100, background: `linear-gradient(322deg, #ffffff00 0%, ${item.color} 100%)` }} /> */}
                <ParallaxLayer offset={index} speed={0} style={{ zIndex: 100 - index, overflow: 'hidden' }}>
                    <animated.div className="pl-background" style={{ ...styles, backgroundImage: `url('images/${item.image}')`, backgroundPositionX: '33.3333%' }} />
                </ParallaxLayer>
                <ParallaxLayer
                offset={index}
                speed={0.4}
                style={{ zIndex:200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ProjectItem data={item}/>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={index + 0.15}
                    speed={0.2}
                    style={{ zIndex: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a href={`#${item.id}`} style={{ fontSize: '2em', color: 'white'}} onClick={() => { parallax.current.scrollTo(index + 1)}}>Next</a>
                </ParallaxLayer>
            </div>
        ));
    
    return <>
        <Parallax ref={parallax} pages={paralaxProjectList.length} style={{ top: '0', left: '0' }}>
        {paralaxProjectList}
    </Parallax>
    </>
}

export default Projects;