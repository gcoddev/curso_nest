// import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode, Res, Req, ParseIntPipe } from '@nestjs/common'
import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode } from '@nestjs/common'
// import { response, Response, Request } from 'express'
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe'
import { ProductsService } from '../services/products.service'
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto'

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
        // const { limit, offset } = params
        // return {
        //     message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`
        // }
        return this.productsService.findAll()
    }

    @Get('filter')
    getProductFilter() {
        return 'yo soy filter'
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(
        // @Res() response: Response,
        // @Req() req: Request,
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.productsService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.delete(id)
    }
}
