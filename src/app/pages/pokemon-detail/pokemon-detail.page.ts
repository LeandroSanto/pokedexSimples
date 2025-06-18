import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonBackButton,
    IonButtons,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class PokemonDetailPage implements OnInit {

  pokemon: any = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeapiService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeApi.getPokemonDetails(name).subscribe(data => {
        this.pokemon = data;
        this.isLoading = false;
      });
    }
  }

  get pokemonTypes(): string {
    return this.pokemon?.types?.map((t: any) => t.type.name).join(', ') || '';
  }

  get pokemonHeightMeters(): string {
    return this.pokemon ? `${this.pokemon.height / 10} m` : '';
  }

  get pokemonWeightKg(): string {
    return this.pokemon ? `${this.pokemon.weight / 10} kg` : '';
  }

  get pokemonImage(): string {
    return this.pokemon?.sprites?.front_default || '';
  }

  get pokemonStats(): any[] {
    return this.pokemon?.stats || [];
  }
}
