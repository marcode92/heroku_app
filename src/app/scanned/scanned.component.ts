import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudUserService } from '../crud-user.service';
import { userInfo, UserProfile } from '../user-profile';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.component.html',
  styleUrls: ['./scanned.component.css']
})

export class ScannedComponent implements OnInit {
  
  idScanned = '';
  userProfile?: userInfo;
  constructor(private route: ActivatedRoute, private readonly crudUserService: CrudUserService) { }

  ngOnInit() {
    this.route.queryParams.subscribe( param => {
      this.idScanned = param['id'];
     /*  setTimeout(() => {
        window.location.href = `http://linktr.ee/${this.idScanned}` ;
      }, 5000); */
    });

    if(this.idScanned){
      this.crudUserService.getUser(this.idScanned).subscribe((res: UserProfile) => {
        this.userProfile = res.data.attributes.user_info;
        console.log(this.userProfile);
      })
    }
    
  }
}
