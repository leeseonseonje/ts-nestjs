import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board-dto';
import { UpdateBoardDto } from './dto/update-board-dto';

@Injectable()
export class BoardsService {

    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(CreateBoardDto: CreateBoardDto): Board {
        const { title, description } = CreateBoardDto;
        
        const board: Board = { 
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board)
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(updateBoardDto: UpdateBoardDto): Board {
        const board = this.getBoardById(updateBoardDto.id);
        board.status = updateBoardDto.status;
        return board;
    }
}
