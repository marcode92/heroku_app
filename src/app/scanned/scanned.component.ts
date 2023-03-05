import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudUserService } from '../crud-user.service';
import { userInfo, UserProfile } from '../user-profile';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.component.html',
  styleUrls: ['./scanned.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})

export class ScannedComponent implements OnInit {
  a = '../../assets/img/logo-simona.png'
  id_scan = '';
  userProfile?: userInfo;
  constructor(private route: ActivatedRoute, private readonly crudUserService: CrudUserService ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( param => {
      this.id_scan = param['id'];
    });

   /*  if(this.id_scan){
      this.crudUserService.getUser(this.id_scan).subscribe((res: UserProfile) => {
        this.userProfile = res.data.attributes.user_info;
        console.log(this.userProfile);
 */
        this.crudUserService.getCode(/* this.userProfile.client_id */'910676340350897').subscribe((res: any) => {
          console.log(res);
        })
    //   })
    //}     
  }

  getPath(){   
    return "url('../../assets/img/logo-simona.png')";
  }

  
}
