import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('tu_clave_publica_de_stripe'); // Reemplaza 'tu_clave_publica_de_stripe' con tu propia clave pública de Stripe

async function obtenerDatosCervezasDesdeAPI() {
  try {
    const response = await fetch('http://localhost:8000/api/v1/cervezas');
    const jsonData = await response.json();
    return jsonData.data; // Devuelve solo los datos de las cervezas
  } catch (error) {
    console.error('Error al obtener los datos de cervezas desde la API:', error);
    throw error;
  }
}

async function crearProductosEnStripeDesdeDatosCervezas() {
  const datosCervezas = await obtenerDatosCervezasDesdeAPI();
  const stripe = await stripePromise;

  try {
    await Promise.all(datosCervezas.map(async (cerveza) => {
      const product = await stripe.products.create({
        name: cerveza.nombre,
        images: [cerveza.foto], // Agregar la URL de la imagen como arreglo de imágenes
      });

      console.log('Producto creado:', product);

      await stripe.prices.create({
        product: product.id,
        unit_amount: Math.round(parseFloat(cerveza.precio) * 100), // Convertir el precio a centavos
        currency: 'eur', // Establecer la moneda en euros
      });
    }));

    console.log('Productos creados en Stripe con éxito');
  } catch (error) {
    console.error('Error al crear productos en Stripe:', error);
    alert('Error al crear productos en Stripe');
  }
}

crearProductosEnStripeDesdeDatosCervezas();
