import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss']
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];
  isLoading = true;

  constructor(
    private favoriteService: FavoriteService,
    private pokeapi: PokeapiService
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const names = this.favoriteService.getFavorites();

    // Fetch dados completos para cada Pokémon favorito
    Promise.all(names.map(name => this.pokeapi.getPokemonDetails(name).toPromise()))
      .then(data => {
        this.favorites = data;
        this.isLoading = false;
      });
  }
}
