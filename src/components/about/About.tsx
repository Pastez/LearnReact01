import { RouteComponentProps } from "react-router";
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import IDataModel from "../../data/IDataModel";
import { useRef } from "react";

const About: React.FC<IDataModel & RouteComponentProps<{ name?: string }>> = (props) => {
    const parallax = useRef<IParallax>(null!)
    setTimeout(() => {
        parallax?.current?.scrollTo(1);
    }, 500);
    return <>
        <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '5em' }}>
                <div style={{ paddingBottom: '5em' }}><p>{props.about.title}</p></div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#000000' }} />

            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '10em'
                }}>
                <p>{props.about.desc}</p>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20em',
                    color: '#111111',
                    fontWeight: 'bolder'
                }}>
                <p>Hi!</p>
            </ParallaxLayer>
        </Parallax>
    </>
}

export default About;