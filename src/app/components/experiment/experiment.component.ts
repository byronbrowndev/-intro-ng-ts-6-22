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
  inventors: any[] = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

  inventorDetails!: string[];



  constructor(private pkmnService: PokemonService) { }

  ngOnInit(): void {
    // const taco = 'chicken taco';
    this.sentence = this.person + ' is Awesome!!';
    const anotherQuestion = 'where is ryan?';
    console.log(anotherQuestion)

    this.pkmnService;

    // creat a new array of string with the inventor first last and birth date
    this.inventorDetails = this.inventors.map((inventor) => inventor.first + ' ' + inventor.last + ' was born in ' + inventor.year)
  }

}
