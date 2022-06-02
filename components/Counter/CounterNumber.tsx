import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface ICounterNumberProps {
    from: number;
    to: number;
    inView: boolean;
}

export const CounterNumber: React.FC<ICounterNumberProps> = ({ from, to, inView }) => {
    const nodeRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const node = nodeRef.current;

        const controls = animate(from, to, {
            duration: 2,
            onUpdate(value) {
                if (node) node.textContent = value.toFixed(0);
            },
        });
        return () => controls.stop();
    }, [from, to, inView]);
    return <p ref={nodeRef} />;
};
