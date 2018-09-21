import { InstallPage } from '../../install-page';
import { InstallTypeSelectionPageComponent } from '../install-type-selection-page/install-type-selection-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit, InstallPage {

  static PATH = '';

  constructor() {
  }

  ngOnInit() {
  }

  hasDetailPage() {
    return false;
  }

  hasNext() {
    return true;
  }

  getNext() {
    return InstallTypeSelectionPageComponent.PATH;
  }
}
