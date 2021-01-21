export class TranslatedStarShipsResponse {
    nombre: string;

    modelo: string;

    fabricante: string;

    costo_en_creditos: string;

    longitud: string;

    maxima_velocidad_atmosferica: string;

    clan: string;

    pasajeros: string;

    aforo: string;

    consumibles: string;

    calificacion_hiperimpulsor: string;

    MGLT: string;

    clase_nave: string;

    pilotos: any[];

    peliculas: string[];

    creacion: Date;

    edicion: Date;

    url: string;

    // eslint-disable-next-line @typescript-eslint/camelcase
    constructor(nombre: string, modelo: string, fabricante: string, costo_en_creditos: string, longitud: string,
      // eslint-disable-next-line @typescript-eslint/camelcase
      maxima_velocidad_atmosferica: string, clan: string, pasajeros: string, aforo: string, consumibles: string,
      // eslint-disable-next-line @typescript-eslint/camelcase
      calificacion_hiperimpulsor: string, MGLT: string, clase_nave: string, pilotos: any[], peliculas: string[],
      creacion: Date, edicion: Date, url: string) {
      this.nombre = nombre;
      this.modelo = modelo;
      this.fabricante = fabricante;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.costo_en_creditos = costo_en_creditos;
      this.longitud = longitud;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.maxima_velocidad_atmosferica = maxima_velocidad_atmosferica;
      this.clan = clan;
      this.pasajeros = pasajeros;
      this.aforo = aforo;
      this.consumibles = consumibles;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.calificacion_hiperimpulsor = calificacion_hiperimpulsor;
      this.MGLT = MGLT;
      // eslint-disable-next-line @typescript-eslint/camelcase
      this.clase_nave = clase_nave;
      this.pilotos = pilotos;
      this.peliculas = peliculas;
      this.creacion = creacion;
      this.edicion = edicion;
      this.url = url;
    }
}
