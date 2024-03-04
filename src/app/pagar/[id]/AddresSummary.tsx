
interface Direccion {
  id: number;
  nombre: string;
  apellidos: string;
  calle: string;
  numero: string;
  escalera: string | null;
  piso: string;
  puerta: string;
  poblacion: string;
  provincia: string;
  user_id: number;
  orden_id: number;
  telefono: string;
  poblacion_nombre: string;
  provincia_nombre: string;
}

interface Props {
  address: Direccion | undefined;
}

export const AddressSummary = ({ address }: Props) => {
  
  console.log(address);
  return (
    <div className="mt-3">
      <h1 className="text-xl font-bold text-center">Dirección</h1>
      <div className="p-4 border-2 rounded-lg shadow-lg mx-auto">
        <div className="grid grid-cols-2">
          <div className="text-md font-bold">Nombre :</div>
          <div>{address?.nombre}</div>
          <div className="text-md font-bold">Apellidos :</div>
          <div>{address?.apellidos}</div>
          <div className="text-md font-bold">Calle :</div>
          <div>{address?.calle}</div>
          <div className="text-md font-bold">Número :</div>
          <div>{address?.numero}</div>
          <div className="text-md font-bold">Escalera :</div>
          <div>{address?.escalera}</div>
          <div className="text-md font-bold">Piso :</div>
          <div>{address?.piso}</div>
          <div className="text-md font-bold">Puerta :</div>
          <div>{address?.puerta}</div>
          <div className="text-md font-bold">Población :</div>
          <div>{address?.poblacion_nombre}</div>
          <div className="text-md font-bold">Provincia :</div>
          <div>{address?.provincia_nombre}</div>
          <div className="text-md font-bold">Teléfono :</div>
          <div>{address?.telefono}</div>
        </div>
      </div>
    </div>
  );
};
