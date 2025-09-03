export type Oferta = {
  Id: string;
  producto_oferta_intervalos: {
    CantidadMinima: number;
    CantidadMaxima: number;
    PrecioUnitario: number;
  }[];
  Producto: string;
  Fabricante: string;
  PartNumber: string;
  created_date: string;
  created_user: string;
  modified_date: string;
  modified_user: string;
  Proveedor: string;
  MOQ: number;
  Embalaje: number;
  FechaEstoc: string | null;
  Estoc: number;
  Leadtime: number;
  InicioVigencia: string;
  FinVigencia: string;
  Comentarios: string | null;
  Origen: string;
  APICode: string;
  ProductoPartNumber: string;
};

export const ofertas: Oferta[] = [
    {
        "Id": "1a4fc7cd-2682-41c1-b4d1-6f1be9e21423",
        "producto_oferta_intervalos": [
            { "CantidadMinima": 10000, "CantidadMaxima": 999999999, "PrecioUnitario": 0.015 },
            { "CantidadMinima": 0, "CantidadMaxima": 9, "PrecioUnitario": 0.103 },
            { "CantidadMinima": 5000, "CantidadMaxima": 9999, "PrecioUnitario": 0.018 },
            { "CantidadMinima": 2500, "CantidadMaxima": 4999, "PrecioUnitario": 0.02 },
            { "CantidadMinima": 10, "CantidadMaxima": 99, "PrecioUnitario": 0.039 },
            { "CantidadMinima": 500, "CantidadMaxima": 2499, "PrecioUnitario": 0.022 },
            { "CantidadMinima": 100, "CantidadMaxima": 499, "PrecioUnitario": 0.032 }
        ],
        "Producto": "TMP_21D532C7DB679BD9",
        "Fabricante": "Murata",
        "PartNumber": "XX1",
        "created_date": "2025-09-03T11:50:00.157730",
        "created_user": "usu",
        "modified_date": "2025-09-03T11:50:00.157730",
        "modified_user": "usu",
        "Proveedor": "P11188",
        "MOQ": 1,
        "Embalaje": 1,
        "FechaEstoc": "2025-09-03T00:00:00",
        "Estoc": 45635,
        "Leadtime": 10,
        "InicioVigencia": "2025-09-03T09:49:51",
        "FinVigencia": "2025-09-10T09:49:51",
        "Comentarios": null,
        "Origen": "Api",
        "APICode": "5c626ee1-7356-41ae-b18a-7a1f0c5ffc29",
        "ProductoPartNumber": "965e6183-175b-4783-90ef-a28e1ad5b3e5"
    },
    {
        "Id": "462ef405-6202-43fa-b710-229f5a02ca41",
        "producto_oferta_intervalos": [
            { "CantidadMinima": 40000, "CantidadMaxima": 999999999, "PrecioUnitario": 0.0129 },
            { "CantidadMinima": 30000, "CantidadMaxima": 39999, "PrecioUnitario": 0.0132 },
            { "CantidadMinima": 0, "CantidadMaxima": 29999, "PrecioUnitario": 0.0136 }
        ],
        "Producto": "TMP_21D532C7DB679BD9",
        "Fabricante": "Murata",
        "PartNumber": "XX1",
        "created_date": "2025-09-03T11:50:00.194946",
        "created_user": "usu",
        "modified_date": "2025-09-03T11:50:00.194946",
        "modified_user": "usu",
        "Proveedor": "P12582",
        "MOQ": 10000,
        "Embalaje": 10000,
        "FechaEstoc": null,
        "Estoc": 0,
        "Leadtime": 0,
        "InicioVigencia": "2025-09-03T09:49:52",
        "FinVigencia": "2025-09-10T09:49:52",
        "Comentarios": null,
        "Origen": "Api",
        "APICode": "40b7af1d-f4c3-4f4c-8f51-9f2ea8517854",
        "ProductoPartNumber": "965e6183-175b-4783-90ef-a28e1ad5b3e5"
    },
    {
        "Id": "6dd24c3a-4423-49ae-9fea-607ca0a8fa23",
        "producto_oferta_intervalos": [
            { "CantidadMinima": 0, "CantidadMaxima": 19999, "PrecioUnitario": 0.0121 },
            { "CantidadMinima": 20000, "CantidadMaxima": 999999999, "PrecioUnitario": 0.0118 }
        ],
        "Producto": "TMP_21D532C7DB679BD9",
        "Fabricante": "Murata",
        "PartNumber": "XX1",
        "created_date": "2025-09-03T11:50:00.111994",
        "created_user": "usu",
        "modified_date": "2025-09-03T11:50:00.111994",
        "modified_user": "usu",
        "Proveedor": "P10503",
        "MOQ": 10000,
        "Embalaje": 10000,
        "FechaEstoc": null,
        "Estoc": 0,
        "Leadtime": 24,
        "InicioVigencia": "2025-09-03T09:49:52",
        "FinVigencia": "2025-09-10T09:49:52",
        "Comentarios": null,
        "Origen": "Api",
        "APICode": "0bbc24cc-e1fd-48e3-a14d-422fd70de3b2",
        "ProductoPartNumber": "965e6183-175b-4783-90ef-a28e1ad5b3e5"
    },
    {
        "Id": "b2653118-d61f-4660-8c3c-96a2650e13e0",
        "producto_oferta_intervalos": [
            { "CantidadMinima": 50000, "CantidadMaxima": 999999999, "PrecioUnitario": 0.0123 },
            { "CantidadMinima": 0, "CantidadMaxima": 19999, "PrecioUnitario": 0.0144 },
            { "CantidadMinima": 30000, "CantidadMaxima": 49999, "PrecioUnitario": 0.0144 },
            { "CantidadMinima": 20000, "CantidadMaxima": 29999, "PrecioUnitario": 0.0144 }
        ],
        "Producto": "TMP_21D532C7DB679BD9",
        "Fabricante": "Murata",
        "PartNumber": "XX1",
        "created_date": "2025-09-03T11:50:00.231581",
        "created_user": "usu",
        "modified_date": "2025-09-03T11:50:00.231581",
        "modified_user": "usu",
        "Proveedor": "P10864",
        "MOQ": 10000,
        "Embalaje": 10000,
        "FechaEstoc": null,
        "Estoc": 0,
        "Leadtime": 14,
        "InicioVigencia": "2025-09-03T09:49:51",
        "FinVigencia": "2025-09-10T09:49:51",
        "Comentarios": null,
        "Origen": "Api",
        "APICode": "4614f5bc-7ebe-4a2d-b3dd-dd8dc484780a",
        "ProductoPartNumber": "965e6183-175b-4783-90ef-a28e1ad5b3e5"
    }
];
