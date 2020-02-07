import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = "http://localhost:3000";

// decorator que serve para permitir que serviço seja injetado em outros componentes
@Injectable({ providedIn: "root" })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API}/${userName}/photos`);
  }
}
