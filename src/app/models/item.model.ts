export class Item{
    _id: any;
    brand: string;
    model: string;
    imageSrc: string;
    price: number;
    ramMem: number;
    romMem: number;
    os: string;

    constructor(brand, model, imageSrc, price, ramMem, romMem, os){
        this.brand = brand;
        this.model = model;
        this.imageSrc = imageSrc;
        this.price = price;
        this.ramMem = ramMem;
        this.romMem = romMem;
    }
}