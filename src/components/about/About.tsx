import { IBaseSection } from "../../data/IDataModel";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './About.css'
import LargeImageButton from "../largeImageButton/LargeImageButton";
import RandomImageRotatorContainer from "../randomImageRotator/RandomImageRotatorContainer";

const About: React.FC<{ about: IBaseSection }> = (props) => {
    // setTimeout(() => {
    //     parallax?.current?.scrollTo(1);
    // }, 500);
    return <>
        <Parallax y={[-130, 80]}>
            <RandomImageRotatorContainer width="400px" height="230px" count={10} urls={['/images/p1.png', '/images/p2.png', '/images/p3.png', '/images/p4.png' ] }/>
        </Parallax>
            <Parallax>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
                    <LargeImageButton index={1} title="Jakis Button" subtitle="First One" image="/images/p1.png" />
                    <LargeImageButton index={2} title="Jakis Button" image="/images/p2.png" />
                    <LargeImageButton index={3} title="Nowy button z dlugim tyulem" subtitle="i malym podtytulem" image="/images/p3.png" />
                    <LargeImageButton index={4} title="Jakis Button" image="/images/p4.png" />
                    <LargeImageButton index={5} title="Jakis Button" image="/images/p4.png" />
                    <LargeImageButton index={6} title="Jakis Button" image="/images/p1.png" />
                    <LargeImageButton index={7} title="Jakis Button" image="/images/p2.png" />
                    <LargeImageButton index={8} title="Jakis Button" image="/images/p3.png" />
                </div>
            </Parallax>
        <ParallaxBanner className="about-center-content" style={{ height: '100vh' }} layers={[
            {
                image: 'images/p2.png',
                amount: 0.8,

            },
        ]}>
            <div style={{ zIndex: 1000 }} className='about-large-header'>
                <p>About</p>
                <p style={{fontSize: '4em', fontWeight: 'bolder', margin: '0px'}}>{props.about.title}</p>
            </div>
        </ParallaxBanner>
        <Parallax className="about-center-content about-hi" y={[-120, 120]}>
            {props.about.desc}
        </Parallax>
    </>
}

export default About;