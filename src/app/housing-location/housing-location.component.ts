import {Component, Input} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  imports: [RouterLink, RouterOutlet]
})
export class HousingLocationComponent {
  @Input()
  housingLocation! : HousingLocation;
}
