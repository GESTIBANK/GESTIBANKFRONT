import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Operation } from './operation';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 users: User[];
  apiUrl ="http://localhost:8080/SpringWebService/";
  loginp:any;
  
  constructor(private httpClient: HttpClient) { 
  
    


    this.users = [
      {
        id: 1,
        username: 'fabio',
        adress: 'rue Paul Bert 347',
        email: 'fabio@lyone.com'
      },
      {
        id: 2,
        username: 'pascal',
        adress: 'rue la fayette 347',
        email: 'pascal@lyone.com'
      },
      {
        id: 3,
        username: 'amaria',
        adress: 'rue la fayette 347',
        email: 'amarial@lyone.com'
      },
      {
        id: 4,
        username: 'habiba',
        adress: 'rue la fayette 347',
        email: 'habiba@lyone.com'
      }
  ];
   
  }

 
getClientById(id){
  return this.httpClient.get(this.apiUrl+'afficherClient/'+id).subscribe(user=> console.log(user))
}
login(){
   this.httpClient.post(this.apiUrl+'login/', {"userName":"pseudo","password":"mdp"}).subscribe(user =>this.loginp=user);
 console.log(this.loginp.userType);
}

getUser(id): User{
  const index= this.users.findIndex(d=> d.id==id);

  return this.users[index];
}

  getUsers(): User[] {
    return this.users;
  }

  updateUser(user, id){
   const index = this.users.findIndex(us=> us.id == id);
console.log(index);

   
  this.users[index].id= user.id;
  this.users[index].username= user.username;
  this.users[index].adress = user.adress;
  this.users[index].email = user.email; 
   
 
  }
returnId(){
return this.users.length;
}
  delete(id): String {
    const index = this.users.findIndex(us=> us.id == id);
    this.users.splice(index,1);
    return 'User has been deleted';
  }
  addUser(user:User): String{
    let newUser = JSON.stringify(user);
    let us= JSON.parse(newUser);
     this.users.push(us);
     console.log(this.users);
     return 'User has been added';
  }

}
