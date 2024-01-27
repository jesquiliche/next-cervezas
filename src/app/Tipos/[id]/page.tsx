import { fetchCervezasQuery, fetchTiposById } from "@/services/api";
import { Tipo, Cerveza } from "@/interfaces/interfaces";
import CervezaComponent from "@/components/Cerveza";
import TipoComponet from "./Tipo";

interface EditProps {
  params: {
    id: string;
  };
}

const TipoHome: React.FC<EditProps> = async ({ params }) => {
  const id: string = params.id;
  const tipo: Tipo | undefined = await fetchTiposById(id);
  const cervezas: any | undefined = await fetchCervezasQuery(
    `tipo_id=${tipo?.id}&per_page=${20}`
  );
  
  return (
    <div className="w-11/12 mx-auto py-20">
     <TipoComponet tipo={tipo} total={cervezas.total}/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {cervezas?.data.map((c: Cerveza) => (
          <div key={c.id}>
          <CervezaComponent cerveza={c}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipoHome;
