import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable() 
export class ItemService{

    constructor(private httpClient: HttpClient) {}

    items = [
        {
          brand: 'Apple',
          model: 'X',
          memory: '128GB',
          color: 'Spase Gray',
          price: 900,
          imageSrc: './assets/img_phones/iPhone_x.png'
        },
        {
          brand: 'Xiaomi',
          model: 'Mi 8',
          memory: '64GB',
          color: 'Blue',
          price: 900,
          imageSrc: './assets/img_phones/mi.png'
        },
        {
          brand: 'Samsung',
          model: 'S9',
          memory: '128GB',
          color: 'Spase Gray',
          price: 900,
          imageSrc: './assets/img_phones/samsung-galaxy-s9.png'
        },
        {
          brand: 'NOKIA',
          model: '8',
          memory: '128GB',
          color: 'Spase Gray',
          price: 900,
          imageSrc: './assets/img_phones/nokia_8.png'
        },
        {
          brand: 'Xiaomi',
          model: 'Mi 8',
          memory: '64GB',
          color: 'Blue',
          price: 900,
          imageSrc: './assets/img_phones/mi.png'
        },
      ]

    // getItems(){
    //     this.httpClient.get() ////Dodaty pislya routiv
    // }
}