import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.component.html',
  styleUrls: ['./scanned.component.css']
})


export class ScannedComponent implements OnInit {
  
  idScanned = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe( param => {
      this.idScanned = param['id'];
     /*  setTimeout(() => {
        window.location.href = `http://linktr.ee/${this.idScanned}` ;
      }, 5000); */
    });
    
  }
}
