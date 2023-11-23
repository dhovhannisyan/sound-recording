import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { MOCK_SOUNDS } from 'src/assets/mock-data/mock-sounds';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor() { }

  getSounds() {
    return of(MOCK_SOUNDS);
  }

}
