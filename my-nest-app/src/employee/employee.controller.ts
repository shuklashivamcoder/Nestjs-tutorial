import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getemployee(){
        return "employee data fetched successfully"
    }
}
