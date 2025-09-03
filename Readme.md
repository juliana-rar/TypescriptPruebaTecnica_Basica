# Prueba Tecnica: Ofertas en TypeScript

Esta prueba consiste en completar las funciones `getBestOffer` y `getBestOffer2` ubicadas en el directorio `typescript-offer-test`.

## Objetivo

Las funciones reciben un array de ofertas (`Oferta[]`) y una cantidad. Deben calcular el coste de cada oferta para esa cantidad y devolver:

- Un array con el coste calculado para cada oferta,.
- La mejor oferta, es decir, la que tiene el coste más bajo para la cantidad indicada.

**Notas sobre la implementación:**

- En `getBestOffer` solo se deben considerar los intervalos de precio para calcular el coste.
- En `getBestOffer2` se deben tener en cuenta el MOQ (cantidad mínima de pedido) y el embalaje mínimo, además de los intervalos de precio.
- Ambas funciones deben retornar el array de costes y la mejor oferta según los criterios mencionados.

La implementación debe analizar las reglas de cada oferta, calcular el coste correspondiente y seleccionar la oferta más conveniente.

## Comprobación de la solución

Para verificar que tu implementación es correcta, ejecuta el siguiente comando en la terminal:

```bash
npm run test
```

Esto ejecutará los tests automáticos y mostrará si las funciones cumplen con los requisitos.