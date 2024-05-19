import {Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';
import {TasksService} from './tasks.service';

@Controller({})

export class TasksController {

    constructor(private tasksService: TasksService) {}
    

@Get('/tasks')
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTask(){
        return 'create task';	
    }

    @Put('/tasks')
    updateTask(){
        return 'actualizando task';	
    }

    @Delete('/tasks')
    deleteTask(){
        return 'eliminando task';	
    }

    @Patch('/tasks')
    updateTaskStatus(){
        return 'actualizando status';	
    }
    
}