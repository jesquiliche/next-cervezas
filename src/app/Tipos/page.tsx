
import { fetchTiposById } from "@/services/api";
import { Tipo } from "@/interfaces/interfaces";
interface EditProps {
  params: {
    id: string;
  };
}

const TipoHome: React.FC<EditProps> = async ({ params }) => {
  const id:string = params.id;
  const tipo: Tipo | undefined = await fetchTiposById(id);

 
  return (
    <>
        <h1 className="text-4-xl text-center">{tipo?.nombre}</h1>  
    </>
  );
};

export default TipoHome;

