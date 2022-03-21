import { Component, OnInit } from '@angular/core';
import { Business } from '../../types/business';
import { DataService } from '../../services/data/data.service';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: Observable<Business[]>;
  userId: string;

  constructor(private dataService: DataService, private authService: AuthService) {
    //check that user is logged in
    this.authService.checkUser().then(user => {
      if (user) {
        this.userId = user.uid;
        this.favorites = this.dataService.getFavorites(user.uid);
      }
    });
  }

  ngOnInit() {
  }

  //allow user to favorite and unfavorite businesses
  toggleFavorite(business: Business) {
    if (business.favoritedBy.includes(this.userId)){
      this.dataService.deleteFavorite(business.uid, this.userId);
    } else {
      this.dataService.addFavorite(business.uid, this.userId);
    }
  }
}
