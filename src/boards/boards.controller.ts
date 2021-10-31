import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board-dto';
import { UpdateBoardDto } from './dto/update-board-dto';

@Controller()
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
    
    @Get('/boards')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post('/board')
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto
        ): Board {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/board')
    getBoardById(@Query('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/board/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/board')
    updateBoardStatus(
        @Body() updateBoardDto: UpdateBoardDto
    ): Board {
        return this.boardsService.updateBoardStatus(updateBoardDto);
    }
}
