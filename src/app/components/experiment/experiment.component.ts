import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon/services/pokemon.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  person: string = 'tahir';
  sentence!: string;

  constructor(private pkmnService: PokemonService) { }

  ngOnInit(): void {
    // const taco = 'chicken taco';
    this.sentence = this.person + ' is Awesome!!';
    const anotherQuestion = 'where is ryan?';
    console.log(anotherQuestion)

    this.pkmnService;
  }

}
