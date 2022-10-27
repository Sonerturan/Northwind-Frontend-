import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //(varsayılan değer,koşullar,koşullar)
      productName: ['', Validators.required],
      categoryId: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      unitPrice: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          console.log(responseError);
          console.log('1');

          if (responseError.error.Errors) {
            console.log('2');
            console.log(responseError.error.Errors);
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              console.log('3');
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          } else if (responseError.status==400) {
            console.log('1.2');
            console.log(responseError);
            console.log(responseError.status);
            this.toastrService.error(
              responseError.error.message,
              'Doğrulama hatası'
            );
          } else {
            console.log(responseError.status);
            console.log(responseError);
            this.toastrService.error(
              responseError.error.message,
              'Yetkiniz yoktur'
            );
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
