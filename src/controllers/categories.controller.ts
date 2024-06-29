import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
    getCategory(@Param('id') id: string, @Param('productId') productId: string) {
        return `product ${productId} and category ${id}`
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Acción de almacenar',
            payload
        }
    }
}
