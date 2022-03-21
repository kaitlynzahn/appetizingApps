import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Business } from '../../types/business';
import { Item } from '../../types/item'
import { DataService } from '../../services/data/data.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  business: Observable<Business>;
  menu: Observable<Item[]>

  constructor(
    private dataService: DataService, 
    private authService: AuthService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //call data service function to get businesses and menus
    this.route.paramMap.subscribe(params => {
      this.business = this.dataService.getBusiness(params.get('businessId'));
      this.menu = this.dataService.getMenu(params.get('businessId'));
    });
  }

}
