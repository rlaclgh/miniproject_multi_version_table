package com.rlaclgh.server.board;

import com.rlaclgh.server.dto.CreateBoardRequest;
import com.rlaclgh.server.dto.GetBoardResponse;
import com.rlaclgh.server.dto.GetBoardsResponse;
import com.rlaclgh.server.dto.UpdateBoardRequest;
import com.rlaclgh.server.entity.Board;
import com.rlaclgh.server.entity.BoardLastSnapshot;
import com.rlaclgh.server.entity.BoardSnapshot;
import com.rlaclgh.server.repository.BoardLastSnapshotRepository;
import com.rlaclgh.server.repository.BoardRepository;
import com.rlaclgh.server.repository.BoardSnapshotRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardService {


  @Autowired
  private BoardRepository boardRepository;

  @Autowired
  private BoardSnapshotRepository boardSnapshotRepository;

  @Autowired
  private BoardLastSnapshotRepository boardLastSnapshotRepository;



  public void createBoard(CreateBoardRequest createBoardRequest) {

    String writer = createBoardRequest.getWriter();
    String title = createBoardRequest.getTitle();
    String description = createBoardRequest.getDescription();

    Board newBoard = new Board(writer);
    BoardSnapshot newBoardSnapshot = new BoardSnapshot(title, description, newBoard);
    BoardLastSnapshot boardLastSnapshot = new BoardLastSnapshot(newBoard, newBoardSnapshot);

    boardRepository.save(newBoard);
    boardSnapshotRepository.save(newBoardSnapshot);
    boardLastSnapshotRepository.save(boardLastSnapshot);

  }
  @Transactional
  public void updateBoard(Long boardId, UpdateBoardRequest updateBoardRequest) {

    String title = updateBoardRequest.getTitle();;
    String description = updateBoardRequest.getDescription();

    Board board = boardRepository.getReferenceById(boardId);
    BoardSnapshot newBoardSnapshot = new BoardSnapshot(title, description, board);

    boardSnapshotRepository.save(newBoardSnapshot);

    BoardLastSnapshot boardLastSnapshot = boardLastSnapshotRepository.findBoardLastSnapshotByBoardId(boardId);

    boardLastSnapshot.setBoardSnapshot(newBoardSnapshot);
  }

  public List<GetBoardsResponse> getBoards() {
    List<GetBoardsResponse> boards = boardRepository.findAll().stream()
        .map(GetBoardsResponse::new)
        .collect(Collectors.toList());
    return boards;
  }
  public GetBoardResponse getBoard(Long boardId) {
    Board board = boardRepository.getReferenceById(boardId);
    return new GetBoardResponse(board);
  }

}
