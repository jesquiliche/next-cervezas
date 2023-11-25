import { Cerveza, Pais, Tipo } from "@/interfaces/interfaces";

export async function fetchCervezas(): Promise<Cerveza[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(
      `${apiUrl}cervezas`,{ cache: 'no-store' }
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
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}paises`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);

    return [];
  }
}

export async function fetchTipos(): Promise<Tipo[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  console.log(`${apiUrl}tipos`);
  try {
    const response = await fetch(`${apiUrl}tipos`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}