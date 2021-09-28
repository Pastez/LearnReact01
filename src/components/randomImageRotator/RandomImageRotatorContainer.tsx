import RandomImageRotator from './RandomImageRotator';
import './RandomImageRotator.css'
import { RandomImageRotatorProps } from './RandomImageRotatorProps';

interface RandomImageRotatorContainerProps extends RandomImageRotatorProps {
    count: number;
}

const RandomImageRotatorContainer: React.FC<RandomImageRotatorContainerProps> = (props) => {

    return <>
        <div className="rir-container">
            <div>
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
                <RandomImageRotator {...props} />
            </div>
        </div>
        </>
}

export default RandomImageRotatorContainer;