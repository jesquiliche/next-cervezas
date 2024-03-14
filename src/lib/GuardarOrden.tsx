import { useCartStore } from "@/store/cartStore";
import { useAddressStore } from "@/store/address-store";
import { useSession } from "next-auth/react";

async function crearOrden(orden:any, token: string) {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
   
    const response = await fetch(`${apiUrl}ordenes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orden),
    });

    if (response.ok) {
      console.log("Datos enviados correctamente.");
      // Aquí puedes realizar acciones adicionales después de enviar los datos
    } else {
      console.log("Error al enviar la dirección");
    }
    return "ok";
  } catch (error:any) {
    return error.message;
  }
}
const GuardarOrden = async () => {
  const articulos = useCartStore((state) => state.cart);
  const address = useAddressStore((state) => state.address);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  
  // Mapear el array articulos y crear un nuevo array con objetos que solo contienen id y cantidad
  const articulosSimplificados = articulos.map((articulo) => ({
    id: articulo.id,
    cantidad: articulo.cantidad
  }));

  const orden = {
    address: { ...address },
    articulos: articulosSimplificados
  };

  

  const token=session?.authorization.token ?? '';

  const respuesta=await crearOrden(orden,token);
  
  
  
};

export default GuardarOrden;
