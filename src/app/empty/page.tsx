import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-items-center justify-center py-60">
      <div>
        <h1 className="text-3xl font-bold">Carrito vació</h1>
        <Link href="/" className="btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default page;
