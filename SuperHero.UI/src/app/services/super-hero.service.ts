import { environment } from './../../environments/environment.prod';
import { SuperHero } from './../models/super-hero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url="SuperHero";
  constructor(private http:HttpClient) { }

  // public getSuperHeros(): SuperHero[]{
  //   let hero=new SuperHero();
  //   hero.id=1;
  //   hero.firstName="Peter";
  //   hero.lastName="Parker";
  //   hero.name="Spider Man";
  //   hero.place="New York City";
  //   return [hero];
  // }

  public getSuperHeros(): Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
