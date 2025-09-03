import { ofertas } from "./ofertas";
import { getBestOffer2 } from "./getBestOffer2";

describe("getBestOffer", () => {
  it("debe calcular correctamente el coste y la mejor oferta para 1000 unidades aqui tener en cuenta MOQ y Embalaje", () => {
    const resultado = getBestOffer2(ofertas, 1000);
    expect(resultado.costes.length).toBe(ofertas.length);
    // Comprobamos que los costes sean correctos
    const costesEsperados = [22, 136, 121, 144];
    resultado.costes.forEach((c, idx) => {
      expect(c.coste).toBeCloseTo(costesEsperados[idx], 2);
    });
    // La mejor oferta debe ser la de coste más bajo
    expect(resultado.mejorOferta?.Id).toBe(ofertas[1].Id);
  });
});
