import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function() {
      if( window.localStorage ) {
         if( !localStorage.getItem('firstLoad') ) {
            localStorage['firstLoad'] = true;
             window.location.reload(); 
            } else {
              localStorage.removeItem('firstLoad');
            } 
        } 
    })();
  }
}

