// Inspo: flaming.codes:
// Note that the 'Network Information API'
// doesn't provide a flag for offline
// scenarios, therefore I added one to
// the network state object.
//
// This hook also only uses a subset of all
// (possible) available information, please
// see the MDN-docs for more information:
// 👉 https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
// 👉 https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType

import { useEffect, useState } from "react";
import internal from "stream";

/**
 * Read the current network classification
 * provided by the browser via the navigator.
 * 
 * @returns   The network state.
 */
export function useNetworkInformation() {
  const [state, setState] = useState<{
    isEnabled?: boolean;
    type?: string;
    effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | "offline";
    downlink?: number;
    rtt?: number;
  }>({});

  useEffect(() => {
    const connection =
      // @ts-ignore
      navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;

    function updateConnectionStatus() {
      setState({
        isEnabled: true,
        type: connection.type,
        effectiveType: navigator?.onLine ? connection.effectiveType : "offline",
        downlink: connection.downlink,
        rtt: connection.rtt,
      });
    }

    if (connection) {
      updateConnectionStatus();
    }

    connection?.addEventListener("change", updateConnectionStatus);
    return () => {
      connection?.removeEventListener("change", updateConnectionStatus);
    };

  }, []);
  return state;
}