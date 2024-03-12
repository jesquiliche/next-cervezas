import {
  Cerveza,
  Color,
  Pais,
  Tipo,
  Graduacion,
  CervezaData,
  PaisesData,
  TiposData,
  Provincia,
  Poblacion,
  Direccion,
  Pedido,
  Orden,
} from "@/interfaces/interfaces";

/**
 * Obtiene la lista de cervezas desde la API.
 * @returns {Promise<CervezaData[]>} La lista de cervezas obtenida desde la API.
 */
export async function fetchCervezas() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}cervezas`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorPaises() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorPais`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorTipos() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorTipo`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorColores() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorColores`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorGraduaciones() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorGraduaciones`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchStockPorPais() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}stockPorPais`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchConsultaTablas2() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaTablas2`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`${apiUrl}consultaTablas`);
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchConsultaBD() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaBD`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasById(id: string): Promise<Cerveza> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  const response = await fetch(`${apiUrl}cervezas/${id}`, {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los datos de la API");
  }

  const data = await response.json();

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}

export async function getProvinciaByCodigo(codigo: string): Promise<Provincia> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:1337/api/";

  const response = await fetch(`${apiUrl}provincias/${codigo}`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los datos de la API");
  }

  const data = await response.json();

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}

export async function getPoblacionByCodigo(codigo: string): Promise<Poblacion> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/";

  console.log(`${apiUrl}poblaciones/${codigo}`);
  const response = await fetch(`${apiUrl}poblaciones/${codigo}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los datos de la API");
  }

  const data = await response.json();

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}

export async function getDireccionByUserId(
  user_id: string
): Promise<Direccion | null> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:1337/api/";

  const response = await fetch(`${apiUrl}direcciones/${user_id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    //throw new Error("No se pudieron obtener los datos de la API");
    return null;
  }

  const data = await response.json();

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}
export async function fetchCervezasQuery(query: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}cervezas?${query}`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasQuery2(query: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}cervezas?${query}`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}
export async function fetchTiposQuery(query: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}tipos?${query}`);

    if (!response.ok) {
      return false;
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}
export async function fetchPaises(): Promise<PaisesData> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}paises`);

    if (!response.ok) {
      console.log(response.status, response.statusText);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
    // Manejar el error aquí según sea necesario
    throw error; // Lanzar el error nuevamente para que el llamador lo maneje
  }
}

export async function getProvincias(): Promise<Provincia[]> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:6000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}provincias`);

    if (!response.ok) {
      console.log(response.status, response.statusText);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
    // Manejar el error aquí según sea necesario
    throw error; // Lanzar el error nuevamente para que el llamador lo maneje
  }
}

export async function getPoblaciones(): Promise<Poblacion[]> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:6000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}poblaciones`);
    console.log(`${apiUrl}poblaciones`);

    if (!response.ok) {
      console.log(response.status, response.statusText);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
    // Manejar el error aquí según sea necesario
    throw error; // Lanzar el error nuevamente para que el llamador lo maneje
  }
}

export async function getPoblacionesPorProvincia(
  provincia: string
): Promise<Poblacion[]> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(
      `${apiUrl}poblaciones?provincia=${provincia}`,
      { cache: "no-store" }
    );
    console.log(`${apiUrl}poblaciones?provincia=${provincia}`);

    if (!response.ok) {
      console.log(response.status, response.statusText);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
    // Manejar el error aquí según sea necesario
    throw error; // Lanzar el error nuevamente para que el llamador lo maneje
  }
}

export async function fetchColores(): Promise<Color[] | any> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}colores`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.colores;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

export async function fetchTipos(): Promise<TiposData> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}tipos`);

    if (!response.ok) {
      console.log(await response.json);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
    // Manejar el error aquí según sea necesario
    throw error; // Lanzar el error nuevamente para que el llamador lo maneje
  }
}

export async function fetchTiposById(id: string): Promise<Tipo | undefined> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}tipos/${id}`);
    console.log(`${apiUrl}tipos/${id}`);
    if (!response.ok) {
      console.log(await response.status);
      //throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.Tipo;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchPaisesById(id: string): Promise<Pais | undefined> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}paises/${id}`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data.Pais;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchGraduaciones(): Promise<Graduacion[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}graduaciones`);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.graduaciones;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);

    return [];
  }
}

export async function postRegister(
  url: string,
  datos: {
    name: string;
    password: string;
    email: string;
  }
): Promise<string> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (response.ok) {
      console.log("Datos enviados correctamente.");
      // Aquí puedes realizar acciones adicionales después de enviar los datos
    } else {
      switch (response.status) {
        case 409:
          throw new Error(
            "Ya existe un Usuario con este email: " + response.statusText
          );
          break;
        case 422:
          // const data=await response.json();
          throw new Error("Ya existe un Usuario con este email: ");

        default:
          throw new Error("Error al enviar los datos:" + response.statusText);
          break;
      }
    }
    return "ok";
  } catch (error: any) {
    return error.message;
  }
}

export async function postDireccion(datos: Direccion, token: string) {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";

    const response = await fetch(`${apiUrl}direcciones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    if (response.ok) {
      console.log("Datos enviados correctamente.");
      // Aquí puedes realizar acciones adicionales después de enviar los datos
    } else {
      console.log("Error al enviar la dirección");
    }
    return "ok";
  } catch (error: any) {
    return error.message;
  }
}

export async function fetchDeleteCervezasById(id: string, token: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}cervezas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return true;
      throw new Error(`Error al eliminar la cerveza con ID ${id}`);
    }
    return true;
    /*const data = await response.json();

    return data.data;*/
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDeleteTiposById(id: string, token: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}tipos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return false;
      throw new Error(`Error al eliminar el tipo con ID ${id}`);
    }

    return true;
    // Lógica adicional después de una eliminación exitosa, si es necesario
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDeletePaisesById(id: string, token: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}paises/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return false;
      throw new Error(`Error al eliminar el tipo con ID ${id}`);
    }

    return true;
    // Lógica adicional después de una eliminación exitosa, si es necesario
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDeleteDireccion(id: string, token: string) {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}direcciones/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return false;
      throw new Error(`Error al eliminar el tipo con ID ${id}`);
    }

    return true;
    // Lógica adicional después de una eliminación exitosa, si es necesario
  } catch (error) {
    console.error(error);
  }
}

export async function getPedido(id: string): Promise<Pedido> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:1337/api/";

  const response = await fetch(`${apiUrl}ordenes/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los datos de la API");
  }

  const data = await response.json();

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}

export async function pagarOrden(id: string, transactionId: string): Promise<string> {
  try {
    const apiUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
    console.log(`${apiUrl}pagarorden/${id}`);
    
    const response = await fetch(`${apiUrl}pagarorden/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transactionId }),
    });

    if (response.ok) {
      console.log("Datos enviados correctamente.");
      const orden = await response.json();
      // Realizar acciones adicionales si es necesario con la respuesta exitosa
    } else {
      const error = await response.json();
      console.error("Error al enviar los datos:", error);
      throw new Error("Error al enviar los datos"); // Lanzar un error para ser capturado en el bloque catch
    }
    return "ok";
  } catch (error: any) {
    console.error("Error en la función pagarOrden:", error.message);
    return error.message;
  }
}

export async function getPedidosPorUsuario(userId: string): Promise<Orden[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:1337/api/";

    const response = await fetch(`${apiUrl}ordenes?user_id=${userId}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    // Aquí puedes trabajar con los datos obtenidos de la API
    return data;
  } catch (error: any) {
    console.error("Error al obtener los pedidos del usuario:", error.message);
    throw new Error("Error al obtener los pedidos del usuario");
  }
}

