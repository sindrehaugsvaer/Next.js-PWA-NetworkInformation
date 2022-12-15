import { useEffect, useState } from "react";

/**
 * Fetches device memory from 
 * Navigator.deviceMemory in browser.
 * 
 * @returns floating point number; 0.25, 0.5, 1, 2, 4, 8..
 */
export function useDeviceMemory() {
    const [state, setState] = useState<{
        memory?: number,
    }>({});

    useEffect(() => {
        // @ts-ignore
        const memory = navigator?.deviceMemory;
        function updateMemoryState() {
            setState({
                memory: memory,
            });
        }
        updateMemoryState();
    }, [])
    return state.memory;
}