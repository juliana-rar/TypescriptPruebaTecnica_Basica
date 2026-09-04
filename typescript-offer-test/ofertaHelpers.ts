import { Oferta } from "./ofertas";

export type CosteOferta = { ofertaId: string; coste: number };

export function encontrarPrecioUnitario(
  oferta: Oferta,
  cantidad: number
): number | null {
  const intervalo = oferta.producto_oferta_intervalos.find(
    (i) => cantidad >= i.CantidadMinima && cantidad <= i.CantidadMaxima
  );
  return intervalo ? intervalo.PrecioUnitario : null;
}

// Reduce con acumulador null inicial: evita usar Infinity como "coste mínimo" de partida.
export function seleccionarMejorOferta(
  ofertas: Oferta[],
  costes: CosteOferta[]
): Oferta | null {
  const mejor = ofertas.reduce<{ oferta: Oferta; coste: number } | null>(
    (actual, oferta, idx) => {
      const { coste } = costes[idx];
      if (Number.isNaN(coste)) return actual;
      if (actual === null || coste < actual.coste) return { oferta, coste };
      return actual;
    },
    null
  );

  return mejor ? mejor.oferta : null;
}
