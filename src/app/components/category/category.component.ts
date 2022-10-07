import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  emptyCategory: Category;
  dataLoaded = false;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    console.log('Api Request Başladı');
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
      console.log('Api Request Bitti');
    });
    console.log('Method Bitti');
  }

  setCurrentCategory(category: Category) {
    console.log(category.categoryName);
    this.currentCategory = category;
  }
  
  setCurrentCategoryRemove() {
    console.log("categoryName silindi");
    this.currentCategory=this.emptyCategory
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
      
    this.currentCategory=this.emptyCategory
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
