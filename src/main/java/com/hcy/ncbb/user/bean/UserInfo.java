package com.hcy.ncbb.user.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
   private int userId;
   private String phone;
   private String city;
   private String cardtype;
   private String registtime;
   private int qRCodeId;
   private int count;
}
