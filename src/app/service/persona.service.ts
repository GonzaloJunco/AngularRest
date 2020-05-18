import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../component/persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = 'http://localhost:8090/FalconService/per/persona';
  
  constructor(private http: HttpClient) {}

  getPersona(){
    return this.http.get<Persona>(this.url);
  }

  getPersonaId(persona: Persona){
    return this.http.get<Persona>(`${this.url}/${persona.id}`);//alt+96 X2
  }

  getPersonaNombre(nombres: string){
    return this.http.get<Persona>(`${this.url}/buscar-nombres/${nombres}`);
  }

  postPersona(persona: Persona){
   return this.http.post<Persona>(`${this.url}`, persona); 
  }

  putPersona(persona: Persona){
    return this.http.put<Persona>(`${this.url}/${persona.id}`, persona);
  }

  deletePersona(persona: Persona){
    return this.http.delete<Persona>(`${this.url}/${persona.id}`)
  }
}
