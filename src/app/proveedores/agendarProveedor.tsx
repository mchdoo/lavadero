"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";

function AgendarProveedor() {
  const [open, setOpen] = useState(true);

  return (
    <dialog
      className="absolute inset-0 w-full h-full z-10 bg-gray-800 bg-opacity-50"
      open
    >
      <div className="bg-white p-6 rounded  max-w-xl mx-auto">
        <h2 className="mb-2 text-xl font-semibold text-slate-800">
          Vas a agendar un nuevo proveedor
        </h2>

        <hr />

        <div className="mt-3">
          <label
            htmlFor="username"
            className="block font leading-6 text-slate-600"
          >
            Razón Social
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="mt-2 text-sm outline-none py-2 px-4 rounded bg-slate-100 w-full"
            placeholder="Brad Pitt"
          />
        </div>
      </div>
    </dialog>
  );
}

export default AgendarProveedor;
