package com.rlaclgh.server.dto;


import com.rlaclgh.server.entity.Board;
import com.rlaclgh.server.entity.BoardSnapshot;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Data;

@Data
public class GetBoardResponse {

  private Long id;
  private String writer;
  private LocalDateTime createdAt;

  private String title;
  private String description;

  private List<BoardSnapshotDto> snapshots;

  public GetBoardResponse(Board board) {
    this.id =board.getId();
    this.writer = board.getWriter();
    this.createdAt = board.getCreatedAt();

    this.title = board.getBoardLastSnapshot().getBoardSnapshot().getTitle();
    this.description = board.getBoardLastSnapshot().getBoardSnapshot().getDescription();
    this.snapshots = board.getBoardSnapshots().stream().map(BoardSnapshotDto::new).collect(
        Collectors.toList());
  }




}
