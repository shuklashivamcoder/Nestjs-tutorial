import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    categoryservice(){
        return ["mobile", "tablet", "laptop"]
    }
}
