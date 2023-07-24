import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './contact.module';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 40.712776;
  lng = -74.005974;

  client = new Client("", "","");

  formData: { nombre: string; correo: string; contacto: string } = { nombre: '', correo: '', contacto: '' };

  constructor() { }

  ngOnInit(): void {

  }

  formularioEnviado() {

  }
}
