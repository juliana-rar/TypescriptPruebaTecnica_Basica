import { ofertas } from "./ofertas";
import { getBestOffer } from "./getBestOffer";

describe("getBestOffer", () => {
  it("debe calcular correctamente el coste y la mejor oferta para 1000 unidades", () => {
    const resultado = getBestOffer(ofertas, 1000);
    expect(resultado.costes.length).toBe(ofertas.length);
    // Comprobamos que los costes sean correctos
    const costesEsperados = [22, 13.6, 12.1, 14.4];
    resultado.costes.forEach((c, idx) => {
      expect(c.coste).toBeCloseTo(costesEsperados[idx], 2);
    });
    // La mejor oferta debe ser la de coste más bajo
    expect(resultado.mejorOferta?.Id).toBe(ofertas[2].Id);
  });
});
