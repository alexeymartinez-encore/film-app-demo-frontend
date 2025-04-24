import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <main className="bg-gray-200">
        <Outlet></Outlet>
      </main>
    </>
  );
}
