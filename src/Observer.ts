/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 */

import { Event, Observer } from './Interfaces.js'
/**
 * This class represents a s
 */
export class ObserverClass implements Observer<number> {
  constructor(private id_: string, private data_: number) {}
  /**
   * 
   * @param observable This is
   */
  update(event: Event<number>): void {
    this.id_ = event.id;
    this.data_ = event.data;
  }
  /**
   * This method return the value of the id
   */
  get id(): string {
    return this.id_;
  }

  /**
   * This method return the value of the data
   */
  get data(): number {
    return this.data_;
  }
}