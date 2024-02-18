package com.rlaclgh.server.repository;

import com.rlaclgh.server.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
