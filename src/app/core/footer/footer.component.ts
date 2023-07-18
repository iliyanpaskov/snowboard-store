import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  $time = interval(1000).pipe(
    startWith(null),
    map(()=> new Date() )
  )

}
