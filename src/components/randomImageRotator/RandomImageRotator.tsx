import { useEffect, useRef, useState } from 'react';
import './RandomImageRotator.css'
import { RandomImageRotatorProps } from './RandomImageRotatorProps';
import { useSpring, animated } from 'react-spring';

const RandomImageRotator: React.FC<RandomImageRotatorProps> = (props) => {

    const randomUrl = () => props.urls[Math.floor(Math.random() * props.urls.length)];

    const [aImgUrl, setAImgUrl] = useState(randomUrl());
    const [bImgUrl, setBImgUrl] = useState(randomUrl());

    const switchSpring = useSpring({
        from: {
            top: '-0%'
        },
        to: {
            top: '-100%'
        },
        config: {
            mass: 1,
            tension: 100
        },
        onResolve: () => {
            setAImgUrl(bImgUrl);
        }
    });

    const switchImage = () => {
        switchSpring.top.reset();
        switchSpring.top.start();
        setBImgUrl(randomUrl())
    }

    // useEffect(() => {
    //     switchImage();
    // })
    
    const [started, setStarted] = useState(false);
    if (!started) {
        setInterval(switchImage, 3000 + (Math.random() * 3000));
        setStarted(true);
    }
    

    return <>
        <div style={{ width: props.width, height: props.height }} className="rir-item">
            <animated.div className="rir-movable-container" style={{...switchSpring}}>
                <div id="A" style={{ backgroundImage: `url(${aImgUrl})`}}></div>
                <div id="B" style={{ backgroundImage: `url(${bImgUrl})` }}></div>
            </animated.div>
        </div>
    </>
}

export default RandomImageRotator;