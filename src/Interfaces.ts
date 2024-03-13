/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 */
/**
 * Interfaz que representa una estrategia de ordenación
 */
export interface Event<T> {
  id: string;
  data: T;
}

/**
 * Interfaz que representa un elemento Observador
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}

/**
 * Interfaz que represetna un elemento observable
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event: Event<T>): void;
}