import { useContext } from "react";
import Devices from "../TaskBar/Devices";
import { DeviceContext } from "../../../store/devices-context";

export default function MainScreen() {
  const devicesCtx = useContext(DeviceContext);

  return (
    <div className="flex h-screen">
      <Devices />
      <div className="m-5">
        {devicesCtx.selectedDevice?.IPAddress ? (
          <div className="bg-white p-3 rounded-md w-[25rem]">
            <div className="flex justify-between gap-10 text-xs">
              <span>Product Name:</span>{" "}
              <span>{devicesCtx.selectedDevice.ProductName}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Serial Number:</span>
              <span>{devicesCtx.selectedDevice.SerialNumber}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Vendor ID:</span>
              <span>{devicesCtx.selectedDevice.VendorID}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Device ID:</span>
              <span>{devicesCtx.selectedDevice.DeviceID}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Device Type:</span>
              <span>{devicesCtx.selectedDevice.DeviceType}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Revision:</span>
              <span>{devicesCtx.selectedDevice.Revision}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Product Code:</span>
              <span>{devicesCtx.selectedDevice.ProductCode}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>Vendor:</span>
              <span>{devicesCtx.selectedDevice.Vendor}</span>
            </div>
            <div className="flex justify-between gap-10 text-xs">
              <span>IP Address:</span>
              <span>{devicesCtx.selectedDevice.IPAddress}</span>
            </div>
          </div>
        ) : (
          <h1>No Selected Device</h1>
        )}
      </div>
    </div>
  );
}

// Length: 49,
// EncapsulationVersion: 1,
// IPAddress: "100.64.0.1",
// VendorID: 77,
// Vendor: "Rockwell Software, Inc.",
// DeviceID: 12,
// DeviceType: "Communications Adapter",
// ProductCode: 115,
// Revision: "13.1",
// Status: 96,
// SerialNumber: "0x377208e9",
// ProductNameLength: 15,
// ProductName: "ENC-HT97M13-W10",
// State: 11,
