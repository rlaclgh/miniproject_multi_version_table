package com.rlaclgh.server.repository;

import com.rlaclgh.server.entity.Board;
import com.rlaclgh.server.entity.BoardLastSnapshot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardLastSnapshotRepository extends JpaRepository<BoardLastSnapshot, Long> {


  BoardLastSnapshot findBoardLastSnapshotByBoardId(Long boardId);



}
