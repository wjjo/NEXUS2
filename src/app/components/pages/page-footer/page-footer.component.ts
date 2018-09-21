import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouterHistoryService } from '../../../services/router-history/router-history.service';
import { InstallPage } from '../../install-page';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  @Output() changeWindowSize = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private routerHistoryService: RouterHistoryService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  next() {
    const nextPageUrl = this.getCurrentPage().getNext();
    this.router.navigate([nextPageUrl]);

    const nextPage = this.getCurrentPage();
    this.changeWindowSize.emit(nextPage.hasDetailPage());

    console.log('PageFooterComponent.next()');
    console.log(nextPage);
  }

  hasNext() {
    return this.getCurrentPage() && this.getCurrentPage().hasNext() ? true : false;
  }

  private getCurrentPage(): InstallPage {
    return this.routerHistoryService.getLast();
  }
}
