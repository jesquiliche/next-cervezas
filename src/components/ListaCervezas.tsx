import { Cerveza } from "@/interfaces/interfaces";
import React from "react";
import CervezaComponent from "./Cerveza";
interface Props {
  cervezas: Cerveza[] | null;
}

const ListaCervezas = ({ cervezas }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {cervezas?.map((c: Cerveza) => (
          <div key={c.id}>
            <CervezaComponent cerveza={c} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaCervezas;
