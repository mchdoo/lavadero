import { supabase } from "@/lib/client";
import React from "react";
import ProveedorCard from "./proveedorCard";
import { RxPlus as ContactIcon } from "react-icons/rx";
import AgendarProveedor from "./agendarProveedor";

async function getProveedores() {
  let { data, error } = await supabase
    .from("proveedor")
    .select("razon_social, telefono, email, domicilio, tipo, activo");

  return data;
}

async function ProveedoresPage() {
  const proveedores = await getProveedores();

  return (
    <div className="w-full">
      <h1 className="text-4xl text-slate-800 font-semibold leading-loose">
        Proveedores
      </h1>
      <div className="mb-3 text-slate-500 flex justify-between items-center">
        <p>Lista de proovedores agendados.</p>
        <button className="button icon">
          {" "}
          <span>
            <ContactIcon />{" "}
          </span>{" "}
          Agendar
        </button>
      </div>

      <ul role="list" className="">
        {proveedores.map((proveedor, index) => (
          <ProveedorCard proveedor={proveedor} />
        ))}
      </ul>
    </div>
  );
}

export default ProveedoresPage;
