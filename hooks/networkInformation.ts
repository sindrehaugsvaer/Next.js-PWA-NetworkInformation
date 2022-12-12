//
// Description:
//
// This is the exact React-hook I'm
// using on flaming.codes to classify
// the current network state.
//
// Note that the 'Network Information API'
// doesn't provide a flag for offline
// scenarios, therefore I added one to
// the network state object.
//
// This hook also only uses a subset of all
// (possible) available information, please
// see the MDN-docs for more information:
// 👉 https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
//

import { useEffect, useState } from "react";

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
      // Directly taken from
      // 👉 https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType
      effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | "offline";
    }>({});
  
    useEffect(() => {
      const connection =
        // @ts-ignore
        navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;
  
      if (connection) {
        setState({
          isEnabled: true,
          type: connection.type,
          effectiveType: connection.effectiveType,
        });
      }
  
      function updateConnectionStatus() {
        setState({
          isEnabled: true,
          type: connection.type,
          effectiveType: navigator?.onLine ? connection.effectiveType : "offline",
        });
      }
  
      connection?.addEventListener("change", updateConnectionStatus);
      return () => {
        connection?.removeEventListener("change", updateConnectionStatus);
      };
  
      // Only run on mount explicitly.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return state;
  }
  