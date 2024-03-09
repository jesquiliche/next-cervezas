import { Detalle } from "@/interfaces/interfaces";

interface Props {
  detalle: Detalle[] | undefined;
}

const CartComponent: React.FC<Props> = ({ detalle }: Props) => {
  return (
    <div className="mt-3">
      {detalle && detalle.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {detalle.map((a, index) => (
            <div key={index} className="border p-2">
              <div className="text-center">
                <img
                  src={a.foto}
                  alt={`Artículo ${index + 1}`}
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>

              <div className="font-bold text-center">{a.nombre}</div>

              <div className="text-center">Cantidad {a.cantidad}</div>
              <div className="text-center">Precio {a.precio} €</div>
              <div className="text-center">
                Subtotal {(a.precio * a.cantidad).toFixed(2)} €
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
