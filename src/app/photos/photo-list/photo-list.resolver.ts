import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Injectable({ providedIn: "root" })
export class PhotolistResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;

    return this.service.listFromUserPaginated(userName, 1);
  }
}
