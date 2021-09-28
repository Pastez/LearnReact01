import { useEffect, useState } from 'react';
import './LargeImageButton.css'
import { useSpring, animated } from 'react-spring';

interface LargeImageButtonProps {
    title: string;
    subtitle?: string;
    image: string;
    index?: number;
}

const LargeImageButton: React.FC<LargeImageButtonProps> = (props) => {

    const index = props.index ?? 1;
    const [over, setOver] = useState(false);
    const [isIntro, setIsIntro] = useState(true);
    const styles = useSpring({ backgroundSize: over ? 'auto 110%' : 'auto 100%', filter: over ? 'brightness(100%)' : 'brightness(80%)' })

    const introBgSpring = useSpring({
        from: {
            filter: 'brightness(140%)',
            backgroundSize: 'auto 150%',
        },
        to: {
            filter: 'brightness(80%)',
            backgroundSize: 'auto 100%',
        },
        config: {
            mass: 1 * index,
        }
    });

    const introTextSpring = useSpring({
        from: {
            transform: 'translateX(-100%)',
            filter: 'brightness(140%)'
        },
        to: {
            transform: 'translateX(0)',
            filter: 'brightness(100%)'
        },
        onResolve: () => {
            setIsIntro(false);
        },
        config: {
            mass: 1*index,
        }
    });
    useEffect(() => {
        introTextSpring.transform.start();
    })

    return <>
        <animated.div className="lib-container" style={{ ...(isIntro ? introBgSpring : styles), backgroundImage: `url('${props.image}')` }}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
        >
            <animated.div className='lib-text-container' style={{...introTextSpring}}>
                <div className="lib-text-title">{props.title}</div>
                {props.subtitle ? <div className="lib-text-subtitle">{props.subtitle}</div> : ''}
            </animated.div>
        </animated.div>
        </>
}

export default LargeImageButton;