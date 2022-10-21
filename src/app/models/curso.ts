import { Alumno } from "./alumno";

export interface Curso {
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    inscripcionAbierta: boolean;
    imagen: string;
    alumnos: Alumno[] | any;
  }