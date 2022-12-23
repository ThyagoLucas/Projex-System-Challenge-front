import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';



@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  type:string = 'terreno'
  
  constructor(private router: Router, private route: ActivatedRoute){}


  onAdd(){
    this.router.navigate(['adicionar'], {relativeTo: this.route})
  }


}
