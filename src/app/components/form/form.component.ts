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
	crearFormulario() {
		this.form = this.fb.group({
			email: ['',Validators.required],
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
		this.data = JSON.stringify(this.form.value);
		if(this.form.value['edad'] === '1') console.log('aqui')
		console.log(this.data);
		this.apiService.postTypeRequest('form',this.form.value);
	}
}
