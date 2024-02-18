package com.rlaclgh.server.dto;

import com.rlaclgh.server.entity.Board;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class GetBoardsResponse {


  private Long id;
  private String writer;

  private String title;
  private String description;
  private LocalDateTime createdAt;


  public GetBoardsResponse(Board board) {
    this.id =board.getId();
    this.writer = board.getWriter();
    this.createdAt = board.getCreatedAt();

    this.title = board.getBoardLastSnapshot().getBoardSnapshot().getTitle();
    this.description = board.getBoardLastSnapshot().getBoardSnapshot().getDescription();
  }
}
