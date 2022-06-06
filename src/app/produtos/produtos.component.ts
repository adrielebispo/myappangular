import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  produtos = ['CAIBRO','RIPAS','LINHA','BARROTE','MOURÃO','TÁBUA', 'PRANCHAS']

  ngOnInit(): void {
  }

}
