package com.rlaclgh.server.repository;

import com.rlaclgh.server.entity.BoardSnapshot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardSnapshotRepository extends JpaRepository<BoardSnapshot, Long> {

}
