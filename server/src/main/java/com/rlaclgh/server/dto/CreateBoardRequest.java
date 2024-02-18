package com.rlaclgh.server.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class CreateBoardRequest {


  @NonNull
  private String writer;

  @NonNull
  private String title;

  @NonNull
  private String description;

}
