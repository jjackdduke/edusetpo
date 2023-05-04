package com.seosam.edusetpo.student.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * A DTO for the {@link com.seosam.edusetpo.student.entity.Student} entity
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentDto {
    private Long tutorId;
    private String studentName;
    private String studentContact;
    private String parentContact;
    private Boolean isActive;
}