"use client";
import { Poblacion, Provincia } from "@/interfaces/interfaces";
import { getPoblacionesPorProvincia, getProvincias } from "@/services/api";
/* eslint-disable */
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Direccion {
  calle: string;
  numero: string;
  escalera: string;
  piso: string;
  puerta: string;
  poblacion: string;
  provincia: string;
  user_id: string;
  telefono: string;
}

const FormularioDireccion: React.FC = () => {
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [poblaciones, setPoblaciones] = useState<Poblacion[]>([]);
  const [Direccion, setDireccion] = useState<Direccion>({
    calle: "",
    numero: "",
    escalera: "",
    piso: "",
    puerta: "",
    poblacion: "",
    provincia: "",
    user_id: "",
    telefono:"",
  });

  //  const [provincias, setProvincias] = useState<Provincia[]>([]);

  useEffect(() => {
    const getData = async () => {
      setProvincias(await getProvincias());
      // setPoblaciones(await getPoblacionesPorProvincia('08'));
    };
    getData();
  }, []);

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDireccion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name == "provincia") {
      setPoblaciones(await getPoblacionesPorProvincia(value));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log(Direccion);
  };

  return (
    <div className="w-1/2 mx-auto px-4 py-32 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Dirección de entrega
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="calle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Calle
            </label>
            <input
              type="text"
              name="calle"
              id="calle"
              value={Direccion.calle}
              onChange={handleChange}
              placeholder="Calle"
              className="form-control"
              maxLength={150}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="numero"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Número
            </label>
            <input
              type="text"
              name="numero"
              id="numero"
              value={Direccion.numero}
              onChange={handleChange}
              placeholder="Número"
              className="form-control"
              maxLength={5}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="escalera"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Escalera
            </label>
            <input
              type="text"
              name="escalera"
              id="escalera"
              value={Direccion.escalera}
              onChange={handleChange}
              placeholder="Escalera"
              className="form-control"
              maxLength={5}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="piso"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Piso
            </label>
            <input
              type="text"
              name="piso"
              id="piso"
              value={Direccion.piso}
              onChange={handleChange}
              placeholder="Piso"
              className="form-control"
              maxLength={20}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="puerta"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Puerta
            </label>
            <input
              type="text"
              name="puerta"
              id="puerta"
              value={Direccion.puerta}
              onChange={handleChange}
              placeholder="Puerta"
              maxLength={5}
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="puerta"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              value={Direccion.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              className="form-control"
              maxLength={15}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="provincia"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Provincia
            </label>
            <select
              name="provincia"
              id="provincia"
              value={Direccion.provincia}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Seleccionar Provincia</option>
              {provincias.map((p: Provincia) => {
                return (
                  <option
                    key={p.codigo}
                    value={p.codigo}
                    selected={p.codigo === Direccion.provincia}
                  >
                    {p.nombre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="poblacion"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Población (primero seleccionar Provincia)
            </label>
            <select
              name="poblacion"
              id="poblacion"
              value={Direccion.poblacion}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Seleccionar Población</option>
              {poblaciones &&
                poblaciones.map((p: Poblacion) => {
                  return <option value={p.codigo}>{p.nombre}</option>;
                })}
            </select>
          </div>
        </div>
        <div className="text-center mt-6 w-2/6 mx-auto">
          <button type="submit" className="btn-primary text-md">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDireccion;
