
import { Detalle } from "@/interfaces/interfaces";

interface Props {
  detalle: Detalle[] | undefined;
}
const CartComponent: React.FC<Props> = ({ detalle }: Props) => {
  

  return (
    <div className="py-32">
      {detalle && detalle.length > 0 && (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Foto</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Cantidad</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {detalle?.map((a, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center">
                  <img
                    src={a.foto}
                    alt={`Artículo ${index + 1}`}
                    width={150}
                    height={150}
                  />
                </td>

                <td className="px-4 py-2 font-bold">{a.nombre}</td>

                <td className="px-4 py-2">{a.cantidad}</td>
                <td className="px-4 py-2">{a.precio} €</td>
                <td className="px-4 py-2">
                  {(a.precio * a.cantidad).toFixed(2)} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartComponent;
