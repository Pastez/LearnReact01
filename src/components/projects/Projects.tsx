import IDataModel from '../../data/IDataModel';
import React, { useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated, useSpring } from '@react-spring/web';
import IComponentInteractionProps from '../../data/IComponentInteractionProps';

const Projects: React.FC<IDataModel & IComponentInteractionProps & RouteComponentProps<{name?:string}>> = (props) => {
    const projects = props.projects;
    const projectName = props.match.params.name;
    const goBack = projectName ? <NavLink to="/projects">Back</NavLink> : <></>;

    const styles = useSpring({
        to: [
            { scale: `1.0`, },
        ],
        from: { scale: `0.8`, },
    })
    
    const parallax = useRef<IParallax>(null!)
    
    const paralaxProjectList = projects.projects
        .filter(item => !projectName || item.id === props.match.params.name)
        .map((item, index) => (
            <div key={item.id}>
                {/* <ParallaxLayer offset={index} speed={0} style={{ zIndex: index + 100, background: `linear-gradient(322deg, #ffffff00 0%, ${item.color} 100%)` }} /> */}
                <ParallaxLayer offset={index} speed={0} style={{zIndex: 100-index}}>
                    <animated.div style={{ ...styles, width: '100%', height:'100%', backgroundImage: `url('images/${item.image}')`, backgroundSize: 'cover' }}/>
                </ParallaxLayer>
                <ParallaxLayer
                offset={index}
                speed={1.5}
                style={{ zIndex:200, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13em', color: 'white', fontWeight:'bolder' }}>
                    <p>{item.title}</p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={index+0.1}
                    speed={2.5}
                    style={{ zIndex:300, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '5em', color: 'white' }}>
                    <p>{item.desc}</p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={index + 0.15}
                    speed={3.0}
                    style={{ zIndex: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a style={{ fontSize: '2em', color: 'white'}} onClick={() => { parallax.current.scrollTo(index + 1)}}>Next</a>
                </ParallaxLayer>
            </div>
        ));
    
    return <>
        <Parallax ref={parallax} pages={paralaxProjectList.length} style={{ top: '0', left: '0' }}>
        {paralaxProjectList}
    </Parallax>
        {goBack}
    </>
}

export default Projects;