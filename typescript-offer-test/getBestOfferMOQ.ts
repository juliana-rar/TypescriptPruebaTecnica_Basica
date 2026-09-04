import { Oferta } from "./ofertas";
import { encontrarPrecioUnitario, seleccionarMejorOferta } from "././ofertaHelpers";
/**
 * Implementa esta función para calcular el coste de cada oferta y devolver la mejor oferta.
 */
function calcularCantidadEfectiva(
  cantidad: number,
  moq: number,
  embalaje: number
): number {
  const cantidadMinima = Math.max(cantidad, moq);
  if (embalaje <= 1) return cantidadMinima;
  return Math.ceil(cantidadMinima / embalaje) * embalaje;
}

export function getBestOfferMOQ(ofertas: Oferta[], cantidad: number): {
  costes: { ofertaId: string; coste: number }[];
  mejorOferta: Oferta | null;
  
} {
   const costes = ofertas.map((oferta) => {
    const cantidadEfectiva = calcularCantidadEfectiva(
      cantidad,
      oferta.MOQ,
      oferta.Embalaje
    );
    const precioUnitario = encontrarPrecioUnitario(oferta, cantidadEfectiva);
    return {
      ofertaId: oferta.Id,
      coste: precioUnitario !== null ? cantidadEfectiva * precioUnitario : NaN,
    };
  });
  // Tu código aquí
  return {
    costes: [],
    mejorOferta: null,
  };
}
