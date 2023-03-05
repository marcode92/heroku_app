import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VAR_SYS } from 'src/config';
import { CrudUserService } from '../crud-user.service';
import { userInfo, UserProfile } from '../user-profile';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.component.html',
  styleUrls: ['./scanned.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})

export class ScannedComponent implements OnInit {
  code?: string;
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
        /* this.crudUserService.getCode(this.userProfile.client_id '910676340350897').subscribe((res: any) => {
          console.log("data",res.data);
          window.location.href=JSON.parse(res.data)
        }) */
    //   })
    //}
    this.getToken();
  }

  getPath(){   
    return "url('../../assets/img/logo-simona.png')";
  }

  getToken(){
    // if(this.userProfile){

    if(!window.location.href.includes('code=')){
      window.location.href=
      `https://api.instagram.com/oauth/authorize?client_id=910676340350897&redirect_uri=${VAR_SYS.redirect_uri}&scope=${VAR_SYS.scope}&response_type=${VAR_SYS.response_type}`
      } else {    

        let code = window.location.href;

        console.log(window.location.href);
        code = code.substring(code.indexOf("=")+1,code.lastIndexOf("#_"))
        let res = this.crudUserService.getTokenAccess('910676340350897', code);
        console.log(res);
       /*  this.crudUserService.getTokenAccess(/* this.userProfile.client_id '910676340350897', code).subscribe(result => {
        VAR_SYS.token_auth_graph = result.access_token;*/
       // this.getImages();
   // }); 
    }
//  }
    console.log(window.location.href); 
  }

  getImages(){
    this.crudUserService.getMediaID().subscribe( media => {
      console.log("media",media);
    })
  }

  
}
