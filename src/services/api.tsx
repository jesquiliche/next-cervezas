import { promises } from "dns";
import { Cerveza } from "@/interfaces/interfaces";

export async function fetchCervezas(): Promise<Cerveza[]> {
  const apiUrl = process.env.API_URL ?? 'http://127.0.0.1:1337/api/';
  try {
    console.log(apiUrl);
    const response = await fetch(`${apiUrl}cervezas/?populate=*`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    console.log(data);
    return data.data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(`${apiUrl}cervezas/`);
    console.error("Ocurrió un error:", error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}
