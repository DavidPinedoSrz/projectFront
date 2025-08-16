import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MSubject } from '../../models/nmanagement.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjects: MSubject[] = [];
  private nextId = 1;

  constructor() { }

  createSubject(subject: Omit<MSubject, 'id' | 'createdAt' | 'updatedAt'>): Observable<MSubject> {
    const newSubject: MSubject = {
      ...subject,
      id: this.nextId++,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.subjects.push(newSubject);
    return of(newSubject).pipe(delay(500));
  }

  getSubjects(): Observable<MSubject[]> {
    return of(this.subjects).pipe(delay(500));
  }

  getSubjectsByGradeId(gradeId: number): Observable<MSubject[]> {
    const filtered = this.subjects.filter(s => s.gradeId === gradeId);
    return of(filtered).pipe(delay(500));
  }

  getSubjectById(id: number): Observable<MSubject | undefined> {
    const subject = this.subjects.find(s => s.id === id);
    return of(subject).pipe(delay(500));
  }

  updateSubject(subject: MSubject): Observable<MSubject> {
    const index = this.subjects.findIndex(s => s.id === subject.id);
    if (index !== -1) {
      this.subjects[index] = { ...subject, updatedAt: new Date() };
    }
    return of(this.subjects[index]).pipe(delay(500));
  }
}