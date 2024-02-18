package com.rlaclgh.server.board;


import com.rlaclgh.server.dto.CreateBoardRequest;
import com.rlaclgh.server.dto.GetBoardResponse;
import com.rlaclgh.server.dto.GetBoardsResponse;
import com.rlaclgh.server.dto.UpdateBoardRequest;
import com.rlaclgh.server.entity.Board;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
public class BoardController {

  @Autowired
  private BoardService boardService;


  @PostMapping()
  public void createBoard(
      @RequestBody CreateBoardRequest createBoardRequest
  ) {
    boardService.createBoard(createBoardRequest);
  }


  @PatchMapping("{boardId}")
  public void updateBoard(
      @RequestBody UpdateBoardRequest updateBoardRequest,
      @PathVariable("boardId") Long boardId
  ) {
    boardService.updateBoard(boardId, updateBoardRequest);
  }


  @GetMapping()
  public List<GetBoardsResponse> getBoards() {
    return boardService.getBoards();
  }

  @GetMapping("{boardId}")
  public GetBoardResponse getBoard(@PathVariable("boardId") Long boardId) {
    return boardService.getBoard(boardId);
  }

}
