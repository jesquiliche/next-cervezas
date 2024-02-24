"use client";
import { useSession } from "next-auth/react";
import { Poblacion, Provincia, Direccion } from "@/interfaces/interfaces";
import {
  fetchDeleteDireccion,
  getDireccionByUserId,
  getPoblacionesPorProvincia,
  getProvincias,
  postDireccion,
} from "@/services/api";
import { useAddressStore } from "@/store/address-store";
/* eslint-disable */
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

const FormularioDireccion: React.FC = () => {
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [poblaciones, setPoblaciones] = useState<Poblacion[]>([]);
  const [Direccion, setDireccion] = useState<Direccion>(
    useAddressStore((state) => state.address)
  );
  const setAddres = useAddressStore((state) => state.setAddress);
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    const getData = async () => {
      setProvincias(await getProvincias());
      if (Direccion.poblacion != "") {
        setPoblaciones(await getPoblacionesPorProvincia(Direccion.provincia));
      }

      const direccion = await getDireccionByUserId(String(session?.user.id));
      if (direccion) {
        setDireccion(direccion);
      }
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
      user_id: session?.user.id ?? 0,
    }));
    if (name == "provincia") {
      setPoblaciones(await getPoblacionesPorProvincia(value));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checkboxMarcado = (e.target as HTMLFormElement).miCheckbox.checked;
    setAddres(Direccion);
    if (checkboxMarcado) {
      await postDireccion(Direccion);
    } else {
      await fetchDeleteDireccion(String(session?.user.id));
    }
    router.push("/checkout");
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-32 bg-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Dirección de entrega
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={Direccion.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="form-control"
              maxLength={150}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellidos"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellidos
            </label>
            <input
              type="text"
              name="apellidos"
              id="qpellidos"
              value={Direccion.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
              className="form-control"
              maxLength={150}
              required
            />
          </div>
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
                  return (
                    <option
                      value={p.codigo}
                      selected={p.codigo == Direccion.poblacion}
                    >
                      {p.nombre}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="miCheckbox"
              name="miCheckbox"
              value="valor1"
              onChange={handleChange}
            />
            <label htmlFor="miCheckbox" className="ml-2">
              ¿Recordar Dirección?
            </label>
          </div>
        </div>
        <div className="text-center mt-6 w-2/6 mx-auto">
          <button type="submit" className="btn-primary text-md">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioDireccion;
