import { Oferta } from "./ofertas";

/**
 * Implementa esta función para calcular el coste de cada oferta y devolver la mejor oferta.
 */
export function getBestOffer(ofertas: Oferta[], cantidad: number): {
  costes: { ofertaId: string; coste: number }[];
  mejorOferta: Oferta | null;
} {
  // Tu código aquí
  return {
    costes: [],
    mejorOferta: null,
  };
}
