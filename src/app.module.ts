import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloController } from './hello/hello.controller';
@Module({
  imports: [TasksModule, ProjectsModule],
  controllers: [HelloController],
})
export class AppModule {}
