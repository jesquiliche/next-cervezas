"use client";
import { useAddressStore } from "@/store/address-store";
import { useEffect, useState } from "react";
import { getProvinciaByCodigo, getPoblacionByCodigo } from "@/services/api";
import { Poblacion, Provincia } from "@/interfaces/interfaces";

interface Direccion {
  nombre: string;
  apellidos: string;
  calle: string;
  numero: string;
  escalera: string;
  piso: string;
  puerta: string;
  poblacion: string;
  provincia: string;
  user_id: number;
  telefono: string;
}

export const AddressSummary = () => {
  const [provincia, setProvincia] = useState<Provincia>();
  const [poblacion, setPoblacion] = useState<Poblacion>();

  const [address, setAddres] = useState<Direccion>(
    useAddressStore((state) => state.address)
  );

  useEffect(() => {
    const getData = async () => {
      setPoblacion(await getPoblacionByCodigo(address.poblacion));
      setProvincia(await getProvinciaByCodigo(address.provincia));
    };
    getData();
  }, []);

  return (
    <div className="mt-32">
      <h1 className="text-xl font-bold text-center">Dirección</h1>
      <div className="p-4 border-2 rounded-lg shadow-lg mx-auto">
        <div className="grid grid-cols-2">
          <div className="text-md font-bold">Nombre :</div>
          <div>{address.nombre}</div>
          <div className="text-md font-bold">Apellidos :</div>
          <div>{address.apellidos}</div>
          <div className="text-md font-bold">Calle :</div>
          <div>{address.calle}</div>
          <div className="text-md font-bold">Número :</div>
          <div>{address.numero}</div>
          <div className="text-md font-bold">Escalera :</div>
          <div>{address.escalera}</div>
          <div className="text-md font-bold">Piso :</div>
          <div>{address.piso}</div>
          <div className="text-md font-bold">Puerta :</div>
          <div>{address.puerta}</div>
          <div className="text-md font-bold">Población :</div>
          <div>{poblacion?.nombre}</div>
          <div className="text-md font-bold">Provincia :</div>
          <div>{provincia?.nombre}</div>
          <div className="text-md font-bold">Teléfono :</div>
          <div>{address.telefono}</div>
        </div>
      </div>
    </div>
  );
};
