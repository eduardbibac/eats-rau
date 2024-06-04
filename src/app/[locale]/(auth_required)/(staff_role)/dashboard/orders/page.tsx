import DashNav from "../DashNav";
import Orders from "./Orders";

export default async function OrderPage() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] h-[100dvh] max-h-[100dvh]">
        <DashNav />

        <Orders />
      </div>
      {/* <Orders /> */}
    </>
  );
}
