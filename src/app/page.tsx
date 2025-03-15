"use client";

import CreateInvoice from "@/_component/widgets/CreateInvoice";
import Head from "@/_component/Header/Head"



export default function Home() {

  return (
    <section>
      {/* Title */}
      <Head />

      <div className="flex justify-between ml-10 mr-10 lg:ml-32 lg:mr-32 border-b-2 border-blue-500 p-5">
        <span className="text-blue-600 font-bold text-3xl">ADD Invoice</span>
        <CreateInvoice />
      </div>
    </section>
  );
}

