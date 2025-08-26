import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { ReportsModule } from './reports/reports.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, ReportsModule, CustomerModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
