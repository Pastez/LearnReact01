import { useRef } from "react";
import { IProjectsItem } from "../../data/IDataModel";
import useOnScreen from "../../hooks/useOnScreenHook";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import './Projects.css'
import { NavLink } from "react-router-dom";

const ProjectItem: React.FC<{ data: IProjectsItem }> = (props) => {

    const headerRef = useRef<HTMLDivElement>(null);

    const headerOnScreen = useOnScreen(headerRef, '0px');

    const onScreenStyle = useSpring({
        opacity: headerOnScreen ? 1 : 0,
        transform: `perspective(600px) rotateX(${headerOnScreen ? 0 : 180}deg)`,
        width: `${headerOnScreen ? '100%' : '10%'}`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return <div className="pi-container">
        <NavLink to={`/projects/${props.data.id}`}>
            <animated.div className="pi-header"
                ref={headerRef}
                style={{ ...onScreenStyle, backgroundColor: `${props.data.color}ee`, color: 'white' }}
            >
                {props.data.title}
            </animated.div>
        </NavLink>
        <h2 className="pi-desc">{props.data.desc}</h2>
        {headerOnScreen ? <div>on screen</div> : <div>invisible</div>}
    </div>
}

export default ProjectItem;