'use client'
import React, { useState, useEffect } from 'react';
import { Tipo, Pais, Color, Graduacion, PaisesData } from "@/interfaces/interfaces";
import { fetchTipos, fetchPaises, fetchColores, fetchGraduaciones } from "@/services/api";
import { useRouter,usePathname } from 'next/navigation'

const Filter: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [tipos, setTipos] = useState<Tipo[]>([]);
  const [paises, setPaises] = useState<PaisesData |undefined>();
  const [colores, setColores] = useState<Color[]>([]);
  const [graduaciones, setGraduaciones] = useState<Graduacion[]>([]);
  const [formData, setFormData] = useState({
    tipo: '',
    pais: '',
    color: '',
    graduacion: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tiposData = await fetchTipos();
        setTipos(tiposData.data);

        const paisesData = await fetchPaises();
        setPaises(paisesData);

        const coloresData = await fetchColores();
        setColores(coloresData);

        const graduacionesData = await fetchGraduaciones();
        setGraduaciones(graduacionesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes construir el query string con los valores de formData
    const queryString = `tipo_id=${formData.tipo}&pais_id=${formData.pais}&color_id=${formData.color}&graduacion_id=${formData.graduacion}`;
  
    router.push(`${pathname}?${queryString}`);
//
    
    
    // Puedes hacer algo con el queryString, como enviarlo a un servidor o realizar otras operaciones
  };


  return (
    <>
      <h1 className="text-2xl font-bold text-center">Filtro</h1>
      <form onSubmit={handleSubmit} >
        <div className="w-full p-2">
          <label htmlFor="tipo" className="block text-gray-700">
            Tipo:
          </label>
          <select
            name="tipo"
            id="tipo"
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
          >
            <option key="0" value="0">
              
            </option>

            {tipos.map((t) => (
              <option key={t.id} value={t.id} className='text-sm'>
                {t.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full p-2">
          <label htmlFor="pais" className="block text-gray-700">
            País:
          </label>
          <select
            name="pais"
            id="pais"
            onChange={handleOnChange}
            className="w-full p-2 border bg-gray-100 rounded"
          >
              <option key="0" value="0">
              
              </option>
  
            {paises && paises.data.map((p:Pais) => (
              <option key={p.id} value={p.id} className='text-sm'>
                {p.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full p-2">
          <label htmlFor="color" className="block text-gray-700">
            Color:
          </label>
          <select
            name="color"
            id="color"
            onChange={handleOnChange}
            className="w-full p-2 border bg-gray-100 rounded"
          >
              <option key="0" value="0">
              
              </option>
  
            {colores.map((c) => (
              <option key={c.id} value={c.id} className='text-sm'>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full  p-2">
          <label htmlFor="graduacion" className="block text-gray-700">
            Graduación:
          </label>
          <select
            name="graduacion"
            id="graduacion"
            onChange={handleOnChange}
            className="w-full p-2 border rounded bg-gray-100"
          >
              <option key="0" value="0">
              
              </option>
  
            {graduaciones.map((g) => (
              <option key={g.id} value={g.id} className='text-sm'>
                {g.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full p-2">
          <button
            type="submit"
            className="bg-yellow-400 text-dark font-bold px-4 py-2 rounded"
          >
            Filtrar
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
