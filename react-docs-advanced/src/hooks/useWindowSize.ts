import { useEffect, useState } from 'react';

interface IWindowSize {
    width: number;
    height: number;
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<IWindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
