import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from "../../services/conexion.service"

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private con : ConexionService, private router : Router) { }

  ngOnInit(): void {
  }

  send(email:any, password:any) {

    var data = {
      email : email.value, 
      password : password.value
    }
    this.con.setLogin(data).subscribe( 
      res=>{
        console.log(res)
        this.router.navigate(['/asignacion']);
      }
    )
  }

}
