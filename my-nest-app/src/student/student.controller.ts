import { Body, Controller, Delete, Get , Param, Patch, Post, Put} from '@nestjs/common';
import { StudentService} from './student.service';

@Controller('student')
export class StudentController {
    constructor( readonly studentservice: StudentService){}

    @Get()
    getstudentdata(){
        return this.studentservice.getstudentdata()
    }

    @Get(":id")
    getstudentbyid(@Param('id') id: string){
    return this.studentservice.getstudentdatabasedonid(Number(id))
    }

    @Post()
    createnewstudent(@Body() body: { name: string, course: string}){
        return this.studentservice.createstudent(body)
    }

    @Put(':id')
    updateexistingstudent(@Param('id') id: string, @Body() body: {name: string, course: string}){
        return this.studentservice.updatestudent(Number(id), body)
    }

    @Patch(':id')
    partiallyupdate(@Param('id') id: string, @Body() body: { name: string; course: string}){
        return this.studentservice.patchstudent(Number(id), body) 
    }

    @Delete(':id')
    deletestudent(@Param('id') id: string, @Body() body:{name: string; course: string} ){
        return this.studentservice.deletestudent(Number(id), body)

    }
    



    
}
