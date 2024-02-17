"use client";
import { Poblacion, Provincia } from "@/interfaces/interfaces";
import { getPoblacionesPorProvincia, getProvincias } from "@/services/api";
/* eslint-disable */
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface FormData {
  calle: string;
  numero: string;
  escalera: string;
  piso: string;
  puerta: string;
  poblacion: string;
  provincia: string;
  user_id: string;
}

const FormularioDireccion: React.FC = () => {
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [poblaciones, setPoblaciones] = useState<Poblacion[]>([]);
  const [formData, setFormData] = useState<FormData>({
    calle: "",
    numero: "",
    escalera: "",
    piso: "",
    puerta: "",
    poblacion: "",
    provincia: "",
    user_id: "",
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
    setFormData((prevState) => ({
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
    console.log(formData);
  };

  return (
    <div className="w-6/12 mx-auto px-4 py-32 bg-white">
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
              value={formData.calle}
              onChange={handleChange}
              placeholder="Calle"
              className="form-control"
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
              value={formData.numero}
              onChange={handleChange}
              placeholder="Número"
              className="form-control"
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
              value={formData.escalera}
              onChange={handleChange}
              placeholder="Escalera"
              className="form-control"
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
              value={formData.piso}
              onChange={handleChange}
              placeholder="Piso"
              className="form-control"
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
              value={formData.puerta}
              onChange={handleChange}
              placeholder="Puerta"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="provincia_id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Provincia
            </label>
            <select
              name="provincia"
              id="provincia"
              value={formData.provincia}
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
                    selected={p.codigo === formData.provincia}
                  >
                    {p.nombre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="poblacion_id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Población (primero seleccionar Provincia)
            </label>
            <select
              name="poblacion"
              id="poblacion"
              value={formData.poblacion}
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
        <div className="text-center mt-6">
          <button type="submit" className="btn-primary text-md">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDireccion;
