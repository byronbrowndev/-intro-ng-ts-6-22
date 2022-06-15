import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, take, tap } from 'rxjs';
import { PokemonService } from '../pokemon/services/pokemon.service';
import { ExperimentStateService } from './services/experiment-state.service';
import { inventorData, Inventor, isEven } from "./utils";

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  person: string = 'tahir';
  sentence!: string;
  secondCounter$!: Observable<number>;
  isOdd$!: Observable<boolean>;
  isEven$!: Observable<boolean>;
  divisibleByFive$!: Observable<number>;

  inventors: Inventor[] = inventorData;

  inventorDetails!: string[];



  constructor(private exStateService: ExperimentStateService) { }

  ngOnInit(): void {

    this.secondCounter$ = this.exStateService.sourceCounter$;

    this.isOdd$ = this.secondCounter$.pipe(
      map((num: number) => !isEven(num))
    )
    this.isEven$ = this.secondCounter$.pipe(
      map((num: number) => isEven(num))
    )

    this.divisibleByFive$ = this.secondCounter$.pipe(
      tap((num: number) => console.log(num)),
      filter((num: number) => !!num && num % 5 === 0),
      take(1)
    )


    // const taco = 'chicken taco';
    this.sentence = this.person + ' is Awesome!!';
    const anotherQuestion = 'where is ryan?';
    console.log(anotherQuestion)


    // creat a new array of string with the inventor first last and birth date
    this.inventorDetails = this.inventors.map((inventor) => inventor.first + ' ' + inventor.last + ' was born in ' + inventor.year)
  }

  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  addTwoNums = (a: number, b: number) => a + b;



}
