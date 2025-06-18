import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class PokemonListPage implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokeApi: PokeapiService) {}

  ngOnInit() {
    this.pokeApi.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results;
      console.log('Pokémons:', this.pokemonList); // debug
    });
  }
}
