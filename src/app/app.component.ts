import { CHANNER_REDUCE_WINDOW, CHANNEL_EXPAND_WINDOW } from './../../main';

import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ipcRenderer } from 'electron';
import { ElectronService } from './providers/electron.service';
import { RouterHistoryService } from './services/router-history/router-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isExpand: boolean;

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private router: Router,
    private routerHistoryService: RouterHistoryService,
    private changeDetector: ChangeDetectorRef
  ) {
    translate.setDefaultLang('en');

    const electronLocalshortcut = require('electron-localshortcut');
    const { remote } = require('electron');
    const window = remote.getCurrentWindow();

    // F8 => 사이즈 토글
    electronLocalshortcut.register(window, 'F8', () => {
      this.ontoggleWindowExpand();
    });

    // F12 => 개발자 도구
    electronLocalshortcut.register(window, 'F12', () => {
      // Open DevTools
      window.webContents.openDevTools({ mode: 'detach' });
    });

    // F10 => 설치 화면
    electronLocalshortcut.register(window, 'F9', () => {
      router.navigate(['']);
      this.changeDetector.detectChanges();
    });
  }

  onActivate(event) {
    console.log('AppComponent.onActive');
    console.log(event);
    this.routerHistoryService.push(event);
  }

  onDeactivate(event) { }

  toggleDetach() {

  }

  // expand(event: boolean) {
  //   if (event) {
  //     ipcRenderer.send('expandWindow');
  //   } else {
  //     ipcRenderer.send('reduceWindow');
  //   }
  // }

  expandWindow() {
    this.isExpand = true;

    // 윈도우 사이즈 확장
    ipcRenderer.send(CHANNEL_EXPAND_WINDOW);

    const body: HTMLElement = document.getElementById('app-body');
    const leftSide: HTMLElement = document.getElementById('body-left-side');

    body.classList.add('expand');
    leftSide.classList.add('half-width');
  }

  reduceWindow() {
    this.isExpand = false;

    // 윈도우 사이즈 축소
    ipcRenderer.send(CHANNER_REDUCE_WINDOW);

    const body: HTMLElement = document.getElementById('app-body');
    const leftSide: HTMLElement = document.getElementById('body-left-side');

    body.classList.remove('expand');
    leftSide.classList.remove('half-width');
  }

  private ontoggleWindowExpand() {
    if (this.isExpand) {
      this.reduceWindow();
    } else {
      this.expandWindow();
    }
  }
}
