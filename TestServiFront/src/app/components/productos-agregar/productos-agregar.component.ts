import { Component, OnInit } from '@angular/core';
import { ServiceProductoService } from '../../services/service-productos.service';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.css']
})
export class ProductosAgregarComponent implements OnInit {

  constructor(private serviceProductoService: ServiceProductoService) { }

  ngOnInit(): void {
  }

}
