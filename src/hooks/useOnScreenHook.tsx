import { MutableRefObject, useEffect, useState } from "react";

const useOnScreen = (ref:MutableRefObject<any>, rootMargin = "0px") => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const curRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (curRef) {
            observer.observe(curRef);
        }
        return () => {
            observer.unobserve(curRef);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default useOnScreen;