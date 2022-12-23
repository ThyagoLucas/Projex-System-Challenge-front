
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent {

  form: FormGroup;
  
  imgsUrl:any[] =  []

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
   
    
    ) { 
    this.form = this.formBuilder.group({
      title: [null],
      description:[null],
      price:[null],
      propertyType:[null],
      contractType:[null],
      profitPercent:[null],
      bedroomQuantity:[null],
      bathroomQuantity:[null],
      images:[[]]

      
    })

  }


  onSubmit(){
    console.log(this.form.value)

  }

  onCancel(){
    this.router.navigate(['imoveis'])
  }

  processFile(imageFile:any){
     
   for(let value of imageFile.files){
    const file: File = value;
    const reader = new FileReader();

    reader.addEventListener('load', (event:any) =>{
    this.imgsUrl = [...this.imgsUrl, event.target.result]
    })
    reader.readAsDataURL(file)
  }
  

   }
    
  

}
