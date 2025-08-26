import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryservice:CategoryService){}
    
    @Get()
    getcateogorydata(){
        return this.categoryservice.categoryservice()
    }
}
