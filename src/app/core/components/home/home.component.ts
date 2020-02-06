import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private cd: ChangeDetectorRef,
              private router: Router) {
  }

  ngAfterViewInit() {
    if (this.route.snapshot.queryParamMap.get('error') === 'unauthorized') {
      this.messageService.add({
        severity: 'error',
        summary: 'Espace non autorisé',
        detail: 'Vous n\'êtes pas habilité pour accéder à cette section.'
      });
      this.cd.detectChanges();
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 3000);
    }
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
