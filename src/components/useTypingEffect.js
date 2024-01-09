import { useState, useEffect, useRef } from "react"

export function useTypingEffect(textToType, interKeyStrokeDurationInMills) {
    const [currentPosition, setCurrentStrokePosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentStrokePosition((value) => value + 1);
            currentPositionRef.current+= 1;
            if(currentPositionRef.current > textToType.length)
            {
                clearInterval(intervalId);
            }

        }, interKeyStrokeDurationInMills);
        return () => {
            clearInterval(intervalId);
            currentPositionRef.current= 0;
            setCurrentStrokePosition(0);

        }

    }, [interKeyStrokeDurationInMills,textToType]);
    return textToType.substring(0,currentPosition);
}