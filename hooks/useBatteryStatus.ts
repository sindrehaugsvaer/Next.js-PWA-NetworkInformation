import { useEffect, useState } from "react";
/**
 * Custom hook. Fetches battery status
 * through the Battery Status API.
 * 
 * @returns Object with charging status and battery level.
 */
export function useBatteryStatus() {
    const [state, setState] = useState<{
        charging?: string,
        level?: string,
    }>({});

    useEffect(() => {
        let callback = () => { };
        // @ts-ignore
        console.log("useEffekt heiheihei", navigator);
        // @ts-ignore
        navigator?.getBattery().then(battery => {
            console.log(battery);
            function updateBatteryStatus() {
                setState({
                    charging: battery.charging ? "Yes" : "No",
                    level: (battery.level * 100) + '%',
                });
            }
            updateBatteryStatus();
            battery?.addEventListener("chargingchange", updateBatteryStatus);
            battery?.addEventListener("levelchange", updateBatteryStatus);

            callback = () => {
                battery?.removeEventListener("chargingchange", updateBatteryStatus);
                battery?.removeEventListener("levelchange", updateBatteryStatus);
            }
        });
        return callback;
    }, [])
    return state;
}