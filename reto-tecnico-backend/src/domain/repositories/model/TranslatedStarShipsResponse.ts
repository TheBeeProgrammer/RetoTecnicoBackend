export class TranslatedStarShipsResponse {
    nombre: string;

    modelo: string;

    fabricante: string;

    costoEnCreditos: string;

    longitud: string;

    maximaVelocidadAtmosferica: string;

    clan: string;

    pasajeros: string;

    aforo: string;

    consumibles: string;

    calificacionHiperimpulsor: string;

    MGLT: string;

    claseNave: string;

    pilotos: any[];

    peliculas: string[];

    creacion: Date;

    edicion: Date;

    url: string;

    constructor(nombre: string, modelo: string, fabricante: string, costoEnCreditos: string, longitud: string,
      maximaVelocidadAtmosferica: string, clan: string, pasajeros: string, aforo: string, consumibles: string,
      calificacionHiperimpulsor: string, MGLT: string, claseNave: string, pilotos: any[], peliculas: string[],
      creacion: Date, edicion: Date, url: string) {
      this.nombre = nombre;
      this.modelo = modelo;
      this.fabricante = fabricante;
      this.costoEnCreditos = costoEnCreditos;
      this.longitud = longitud;
      this.maximaVelocidadAtmosferica = maximaVelocidadAtmosferica;
      this.clan = clan;
      this.pasajeros = pasajeros;
      this.aforo = aforo;
      this.consumibles = consumibles;
      this.calificacionHiperimpulsor = calificacionHiperimpulsor;
      this.MGLT = MGLT;
      this.claseNave = claseNave;
      this.pilotos = pilotos;
      this.peliculas = peliculas;
      this.creacion = creacion;
      this.edicion = edicion;
      this.url = url;
    }
}
