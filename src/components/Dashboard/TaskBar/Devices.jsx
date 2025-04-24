import { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../../../store/devices-context";

export default function Devices() {
  const devicesCtx = useContext(DeviceContext);
  const [selectedDevice, setSelectedDevice] = useState({});

  //   useEffect(() => {
  //     fetch("http://localhost:8000/plcs")
  //       .then((response) => {
  //         if (!response.ok) throw new Error("Network response was not ok");
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setPlcs(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching PLCs:", error);
  //         setLoading(false);
  //       });
  //   }, []);
  //   function handleSelectDevice(SerialNumber) {
  //     const device = devicesCtx.devices.find(
  //       (item) => SerialNumber === item.SerialNumber
  //     );
  //     setSelectedDevice(device);
  //   }

  console.log(devicesCtx.selectedDevice);

  return (
    <div className="bg-white w-[30%] overflow-y-scroll py-5">
      <h1 className="text-start ml-5 text-2xl py-2 text-indigo-600">
        Devices:
      </h1>
      {devicesCtx.loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col gap-2 overflow-y-scroll">
          {devicesCtx.devices.map((plc, index) => (
            <li
              className="flex gap-2 justify-between px-2 bg-gray-300 py-1 mx-5 rounded-sm text-xs"
              key={index}
            >
              <span>{plc.ProductName}</span>
              <button
                onClick={() => devicesCtx.selectDevice(plc.IPAddress)}
                type="button"
                className="text-indigo-600 hover:cursor-pointer"
              >
                {plc.IPAddress}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
