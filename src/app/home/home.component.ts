import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('HomeComponent cargado!!!');
    this.cdRef.detectChanges();  // Fuerza la actualización del componente
  }

}
