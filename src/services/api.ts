import { Cerveza, Pais,Tipo } from "@/interfaces/interfaces";

export async function fetchCervezas(): Promise<Cerveza[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(
      `${apiUrl}cervezas/?populate=*&filters[novedad]=true`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchPaises(): Promise<Pais[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}paises?sort[Nombre]=asc`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchTipos(): Promise<Tipo[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}tipos?sort[nombre]=asc`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}


