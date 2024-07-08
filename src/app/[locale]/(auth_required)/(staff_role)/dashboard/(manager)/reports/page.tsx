import { getCurrentMonthSales } from "@/actions/Dashboard/reports/getCurrentMonthSales";
import DashNav from "../../DashNav";
import SimpleTable from "./SimpleTable";
import { pricesStats } from "@/actions/Dashboard/reports/pricesStats";
import { neverOrdered } from "@/actions/Dashboard/reports/neverOrdered";
import { topThree } from "@/actions/Dashboard/reports/topThree";
import { totalRevenue } from "@/actions/Dashboard/reports/totalRevenue";
import { salesCount } from "@/actions/Dashboard/reports/salesCount";
import { usersWithMostSales } from "@/actions/Dashboard/reports/usersWithMostSales";
import { GraphSales } from "./GraphSales";
import { dailySales } from "@/actions/Dashboard/reports/dailySales";
import { hourlySales } from "@/actions/Dashboard/reports/hourlySales";

export default async function ReportsPage() {

  const t1 = await getCurrentMonthSales();
  const t2 = await pricesStats();
  const t3 = await neverOrdered();
  const t4 = await topThree();
  const t5 = await totalRevenue();
  const t6 = await salesCount();
  const t7 = await usersWithMostSales();

  const g1 = await dailySales();
  // const g2 = await hourlySales();

  return (
    <>
      <DashNav />
      <div className="container">
        <div className="mb-4 mt-10 flex justify-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Rapoarte
        </div>

        <div className="flex gap-2 justify-center ">
          <GraphSales data={g1} label={'Total Vânzări pe zi'} />
          {/* <GraphSales data={g2} label={'Total Vânzări pe oră'} /> */}
        </div>

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Numărul Total de Vânzări pentru fiecare produs
        </div>
        <SimpleTable data={t6} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Venitul Total pentru fiecare produs
        </div>
        <SimpleTable data={t5} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Toate Comenzile din luna curentă
        </div>
        <SimpleTable data={t1} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Prețul minim, maxim și mediu al produselor din meniu
        </div>
        <SimpleTable data={t2} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Produse care nu au fost comandate niciodată
        </div>
        <SimpleTable data={t3} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Top 3 cele mai vândute produse
        </div>
        <SimpleTable data={t4} />

        <div className="mb-4 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 ">
          Utilizatorii care au plasat cele mai multe comenzi
        </div>
        <SimpleTable data={t7} />

        <div className="h-24" />
      </div>
    </>
  );
}
