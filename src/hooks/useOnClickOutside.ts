import { useEffect, useRef, useState } from "react";

export function useOnClickOutside<T>(initialState: T) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<T | any>(initialState);

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) setVisible(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);
        return () => document.removeEventListener("click", handleOutsideClick, true);
    }, [ref]);

    return {
        visible,
        setVisible,
        ref,
    };
}

export default useOnClickOutside;
