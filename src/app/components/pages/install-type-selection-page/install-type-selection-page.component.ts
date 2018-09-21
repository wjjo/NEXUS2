import { InstallPage } from '../../install-page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-type-selection-page',
  templateUrl: './install-type-selection-page.component.html',
  styleUrls: ['./install-type-selection-page.component.scss']
})
export class InstallTypeSelectionPageComponent implements OnInit, InstallPage {

  static PATH = 'typeSelection';

  constructor() { }

  ngOnInit() {
  }

  hasDetailPage() {
    return true;
  }

  hasNext() {
    return false;
  }

  getNext() {
    return null;
  }
}
