package com.rlaclgh.server.dto;


import lombok.Data;
import lombok.NonNull;

@Data
public class UpdateBoardRequest {
  @NonNull
  private String title;

  @NonNull
  private String description;

}
