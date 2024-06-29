import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto'
import { Product } from '../entities/product.entity'

@Injectable()
export class ProductsService {
    private counterId = 1;
    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        description: 'Product description',
        price: 100,
        stock: 100,
        image: 'https://example.com/product1.jpg'
    }]

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            // return {
            //     message: 'Product not found'
            // }
            throw new NotFoundException(`Product #${id} not found`)
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.counterId++
        const newProduct = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const product = this.findOne(id);

        if (!product) {
            throw new NotFoundException(`Product #${id} not found`)
        }

        const edit: Product = {
            ...product,
            ...payload
        }
        const index = this.products.findIndex(item => item.id === id)
        this.products[index] = edit;
        return this.products[index]
    }

    delete(id: number) {
        const product = this.findOne(id);
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`)
        }
        const index = this.products.findIndex(item => item.id === id);
        this.products.splice(index, 1)
        return true
    }
}
