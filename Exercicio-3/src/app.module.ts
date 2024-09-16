import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProjectsModule } from "./modules/projects/projects.module";
import { TaskModule } from "./modules/tasks/tasks.module";
import { CacheModule } from "@nestjs/cache-manager";
import { TypeOrmConfigModule } from "./modules/config/type-orm-config/typeorm.module";
@Module({
  imports: [
    ProjectsModule,
    TaskModule,
    TypeOrmConfigModule,
    CacheModule.register({
      isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
