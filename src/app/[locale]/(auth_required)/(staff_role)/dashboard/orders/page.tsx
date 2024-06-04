import DashNav from "../DashNav";
import Orders from "./Orders";

export default async function OrderPage() {
  return (
    <>
      <div className="grid h-[100dvh] max-h-[100dvh] grid-cols-1 grid-rows-[auto_1fr] bg-[#f1f1f1]">
        <DashNav />

        <Orders />
      </div>
      {/* <Orders /> */}
    </>
  );
}
