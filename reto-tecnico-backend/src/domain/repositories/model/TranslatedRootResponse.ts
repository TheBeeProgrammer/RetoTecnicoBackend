export class TranslateRootResponse {
    peliculas: string;

    planetas: string;

    gente: string;

    especies: string;

    vehiculos: string;

    naves: string;

    constructor(peliculas: string, planetas: string, gente: string, especies: string, vehiculos: string, naves: string) {
      this.peliculas = peliculas;
      this.planetas = planetas;
      this.gente = gente;
      this.especies = especies;
      this.vehiculos = vehiculos;
      this.naves = naves;
    }
}
