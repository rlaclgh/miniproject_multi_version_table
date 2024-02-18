package com.rlaclgh.server.dto;

import com.rlaclgh.server.entity.BoardSnapshot;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class BoardSnapshotDto {


  private Long id;
  private String title;
  private String description;
  private LocalDateTime createdAt;


  public BoardSnapshotDto(BoardSnapshot boardSnapshot) {
    this.id = boardSnapshot.getId();
    this.title = boardSnapshot.getTitle();
    this.description = boardSnapshot.getDescription();
    this.createdAt = boardSnapshot.getCreatedAt();
  }
}
