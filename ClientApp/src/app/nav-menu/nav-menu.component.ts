import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isAuthenticated: Observable<boolean>;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
  }

  collapse(): void {
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}