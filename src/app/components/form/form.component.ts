import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	form!: FormGroup;
	prueba:any
	data:any
	constructor(private fb: FormBuilder,
							private apiService: ApiserviceService)
	{
		this.crearFormulario();
	}
	ngOnInit(): void {
	}
	campoValido(campo:string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched
  }
	crearFormulario() {
		this.form = this.fb.group({
			email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
			edad: ['',Validators.required],
			sexo: ['',Validators.required],
			redFavorita:['',Validators.required],
			TiempoFacebook:['',Validators.required],
			TiempoInstagram:['',Validators.required],
			TiempoTikTok:['',Validators.required],
			TiempoWhatsapp:['',Validators.required],
			TiempoTwitter:['',Validators.required],
		})
	}

	guardar(){
		console.log(this.form.value)
		if ( this.form.invalid ) {
      return Object.values( this.form.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }

      });
		}
		this.form.value['id'] =  Math.round(Math.random()*(100-1)+1)
		this.data = JSON.stringify(this.form.value);
		console.log(this.data);
		this.apiService.postTypeRequest('form',this.data);
		this.form.reset()
	}
}
