import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from "../../services/conexion.service"

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor(private con : ConexionService, private router : Router) { }


  ngOnInit(): void {
  }

  send(idAsignacion : any, student: any, course: any, section: any, day: any, hour: any){
    var data = {
      idAsignacion : idAsignacion.value, student : student.value, course : course.value, section : section.value, day:day.value, hour : hour.value 
    }
    this.con.setAssign(data).subscribe( 
      res=>{
        console.log(res)
      }
    )
  }

}
