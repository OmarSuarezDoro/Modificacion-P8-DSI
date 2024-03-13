/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 */

import { Event, Observable, Observer } from './Interfaces.js'
/**
 * This class represents a s
 */
export class ObservableClass<T> implements Observable<T> {
  private observers_: Observer<T>[] = []
  constructor() {}
  /**
   * This method suscribe an observer to the observable object
   * @param observer The observer which is gonna be suscribed
   */
  subscribe(observer: Observer<T>): void {
    if (this.observers_.indexOf(observer) !== -1) {
      throw new Error('The element is already an Observer');
    } else {
      this.observers_.push(observer);
    }
  }
  /**
   * This method unsuscribe an observer to the observable object
   * @param observer The observer which is gonna be suscribed
   */
  unsubscribe(observer: Observer<T>): void {
    let index : number = this.observers_.indexOf(observer);
    if ( index === -1) {
      throw new Error('The element is not in the list of suscribed observers');
    } else {
      this.observers_.splice(index, 1);
    }
  }
  
  /**
   * This method call update method of each observer
   * @param event The event which is gonna be notified
   */
  notify(event: Event<T>): void {
    this.observers_.forEach((observer : Observer<T>) => {
      observer.update(event);
    });
  }

  /**
   * Getter of observers
   */
  get observers() : Observer<T>[] {
    return this.observers_;
  }
}