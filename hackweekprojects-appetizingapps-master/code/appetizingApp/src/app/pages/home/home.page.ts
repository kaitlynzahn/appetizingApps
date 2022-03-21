import { Component } from '@angular/core';
import { Business } from '../../types/business';
import { DataService } from '../../services/data/data.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  businesses: Observable<Business[]>;
  favorites: Observable<Business[]>;
  userId: string;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
  ) {
    //ensure user is logged in
    this.authService.checkUser().then(user => {
      this.userId = user.uid;
      this.businesses = this.dataService.getBusinesses();
      this.favorites = this.dataService.getFavorites(user.uid);
    });
  }

  //allow user to favorite and unfavorite restaurants
  toggleFavorite(business: Business) {
    if (business.favoritedBy.includes(this.userId)){
      this.dataService.deleteFavorite(business.uid, this.userId);
    } else {
      this.dataService.addFavorite(business.uid, this.userId);
    }
  }

  
}