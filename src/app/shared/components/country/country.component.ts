import { Component, OnInit } from '@angular/core';
import { Icountry } from '../../module/module';
import { listCountries } from '../../countries/countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
   countryArray !: Array<Icountry>
  constructor() { }

  ngOnInit(): void {
    this.countryArray = listCountries
  }

}
