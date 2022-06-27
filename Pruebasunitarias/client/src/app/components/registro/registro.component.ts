import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from "../../services/conexion.service"

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private con : ConexionService, private router : Router) { }

  ngOnInit(): void {
  }

  send(id:any, name:any, lastname:any, email:any, birthday:any, password:any, confirmPassword:any){
    var data = {
      id:id.value, name:name.value, lastname:lastname.value, email:email.value, birthday:birthday.value, password:password.value, confirmPassword:confirmPassword.value
    }
    this.con.setRegister(data).subscribe( 
      res=>{
        console.log(res)
        this.router.navigate(['/inicio']);
      }
    )
  }

}
