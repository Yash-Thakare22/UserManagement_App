import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    users: User[];									
									
    constructor(private router: Router, private userService: UserService) { }									
                    
    // Initialize with default list of users									
    ngOnInit() {									
      if(localStorage.getItem("username")!=null){									
       									
      this.userService.getUsers()									
        .subscribe(data=> {									
          this.users = data;									
        });									
      }									
      else									
      this.router.navigate(['/login']);									
      									
    }									
                    
    // logOff user									
    logOutUser():void{									
        if(localStorage.getItem("username")!=null){									
          localStorage.removeItem("username");									
          this.router.navigate(['/login']);									
        }									
    }	
  
  addUser(): void{
    this.router.navigate(['/add-user']);
  }
  
  deleteUser(user): void{
    console.log(user.id);
    
    this.userService.deleteUser(user.id)
    .subscribe( data => {								
              this.router.navigate(['/list-user']);								
            });
    alert("Successfully Deleted User: "+ user.firstName);
  }

  editUser(user): void{
    localStorage.setItem("editUserId", user.id);
    this.router.navigate(['/edit-user']);
  }
  }									
  								

