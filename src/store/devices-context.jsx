import { createContext, useState } from "react";
import { DEVICES } from "../lib/devices_schema";

// Create the context
export const DeviceContext = createContext({
  selectedDevice: {},
  selectDevice: (id) => {},
  devices: [],
  updated: false,
  successOrFailMessage: null,
  loading: false,
});

export default function DeviceContextProvider({ children }) {
  const [scannedDevices, setScannedDevices] = useState(DEVICES);
  const [selectedDevice, setSelectedDevice] = useState({});
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [successOrFailMessage, setSuccessOrFailMessage] = useState({
    successStatus: "",
    message: "",
  });

  //   useEffect(() => {
  //     fetch("http://localhost:8000/plcs")
  //       .then((response) => {
  //         if (!response.ok) throw new Error("Network response was not ok");
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setDevices(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching PLCs:", error);
  //         setLoading(false);
  //       });
  //   }, []);

  function selectDevice(IPAddress) {
    const device = scannedDevices.find((item) => IPAddress === item.IPAddress);
    setSelectedDevice(device);
  }

  function triggerUpdate() {
    console.log("TRIGGER UPDATE FROM CONTEXT");
    setUpdated(true);
  }

  function triggerSucessOrFailMessage(status, message) {
    console.log("STATUS: " + status);
    console.log("MESSAGE: " + message);
    setSuccessOrFailMessage({
      successStatus: status, // needs to be "success" or "fail"
      message: message,
    });

    // Set a timeout to reset the state after 3 seconds (3000 ms)
    setTimeout(() => {
      setSuccessOrFailMessage({
        successStatus: "",
        message: "",
      });
    }, 5000);
  }

  const contextValue = {
    selectedDevice: selectedDevice,
    devices: scannedDevices,
    updated: updated,
    successOrFailMessage: successOrFailMessage,
    loading: loading,
    selectDevice: selectDevice,
  };

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  );
}
