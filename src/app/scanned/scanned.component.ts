import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScanService } from '../scan-service.service';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.component.html',
  styleUrls: ['./scanned.component.css']
})


export class ScannedComponent implements OnInit {
  
  idScanned = '';
  link = '';

  constructor(private route: ActivatedRoute, private router: Router, private scanService: ScanService) { }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this.idScanned = param['id'];
    });
  
    this.scanService.getInfo(this.idScanned).subscribe(data => {
      if(data.info){
        this.getLink(data.info);
      } else {
        this.createUser();
      }
        //this.link = info || this.createUser() ;
      });
  }

  createUser() {
    this.router.navigate(['create-user']);
  }

  getLink( info: string) {
      window.location.href = `http://${info}` ;
  }
}
