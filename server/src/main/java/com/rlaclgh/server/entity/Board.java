package com.rlaclgh.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "writer"})
public class Board extends BaseEntity{

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String writer;

  @JsonIgnore
  @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
  List<BoardSnapshot> boardSnapshots = new ArrayList<>();

  @OneToOne(mappedBy = "board", fetch = FetchType.EAGER)
  private BoardLastSnapshot boardLastSnapshot;

  public Board(String writer) {
    this.writer = writer;
  }
}
