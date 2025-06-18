import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class PokemonListPage implements OnInit {
  pokemonList: any[] = [];
  offset: number = 0;
  limit: number = 12;

  constructor(
    private pokeapi: PokeapiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeapi.getPokemonList(this.offset, this.limit).subscribe((res: any) => {
      this.pokemonList = res.results;
    });
  }

  getPokemonId(url: string): number {
    return +url.split('/').filter(Boolean).pop()!;
  }

  getImageUrl(url: string): string {
    const id = this.getPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  goToDetail(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }

  loadNext() {
    this.offset += this.limit;
    this.getPokemons();
  }

  loadPrevious() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.getPokemons();
    }
  }
}