package com.rlaclgh.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id"})
public class BoardLastSnapshot {

  @Id
  @GeneratedValue
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "board_id", unique = true)
  private Board board;



  @JsonIgnore
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "board_snapshot_id")
  private BoardSnapshot boardSnapshot;

  public void setBoardSnapshot(BoardSnapshot boardSnapshot) {
    this.boardSnapshot = boardSnapshot;
  }

  public BoardLastSnapshot(Board board, BoardSnapshot boardSnapshot) {
    this.board = board;
    this.boardSnapshot = boardSnapshot;
  }
}
