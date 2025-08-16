import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MGrade } from '../../models/nmanagement.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private grades: MGrade[] = [];
  private nextId = 1;

  constructor() { }

  createGrade(grade: Omit<MGrade, 'id' | 'registration_dt' | 'deactivation_dt'>): Observable<MGrade> {
    const newGrade: MGrade = {
      ...grade,
      id: this.nextId++,
      registration_dt: new Date(),
      deactivation_dt: null
    };
    this.grades.push(newGrade);
    return of(newGrade).pipe(delay(500));
  }

  getGrades(): Observable<MGrade[]> {
    return of(this.grades).pipe(delay(500));
  }

  getGradeById(id: number): Observable<MGrade | undefined> {
    const grade = this.grades.find(g => g.id === id);
    return of(grade).pipe(delay(500));
  }

   updateGrade(updatedGrade: MGrade): Observable<MGrade> {
    return new Observable(observer => {
      // Simulamos un pequeño retraso de red
      setTimeout(() => {
        const index = this.grades.findIndex(g => g.id === updatedGrade.id);
        if (index !== -1) {
          // Mantenemos la fecha de registro original
          updatedGrade.registration_dt = this.grades[index].registration_dt;
          this.grades[index] = updatedGrade;
          observer.next(updatedGrade);
        } else {
          // Si no encontramos el grado, podrías considerar crear uno nuevo
          // o lanzar un error según tu lógica de negocio
          observer.error('Grado no encontrado');
        }
        observer.complete();
      }, 500);
    });
  }
  deleteGrade(id: number): Observable<boolean> {
    return new Observable(observer => {
      // Simulamos un pequeño retraso de red
      setTimeout(() => {
        const index = this.grades.findIndex(g => g.id === id);
        if (index !== -1) {
          this.grades.splice(index, 1);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 500);
    });
  }
}

