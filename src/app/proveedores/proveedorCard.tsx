import { RxPencil2 } from "react-icons/rx";
import React from "react";

function ProveedorCard({ proveedor }) {
  return (
    <li className="flex justify-between items-center gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="h-10 w-10 bg-slate-500 rounded grid place-items-center text-slate-200">
          <span>{proveedor.razon_social.charAt(0)}</span>
        </div>
        <div className="min-w-0 flex-auto">
          <p className="text-lg font-medium leading-5 text-slate-900">
            {proveedor.razon_social}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-slate-500">
            {proveedor.email}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-4 text-gray-900">{proveedor.tipo}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {proveedor.activo ? "Activo" : "Inactivo"}
        </p>
      </div>
    </li>
  );
}

export default ProveedorCard;
