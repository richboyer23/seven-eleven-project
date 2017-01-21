package com.up.skill.models;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.NumberFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Pattern;

/**
 * Created by JPMPC-B214 on 1/18/2017.
 */

@Entity
public class SevenElevenForm {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Name Field should not be empty!")
    //@NotEmpty(message = "Field should not be empty!")
    private String fullname;

    @NotBlank(message = "Email Field should not be empty!")
    //@NotEmpty(message = "Field should not be empty!")
    @Email(message = "Must valid email!")
    private String email;

    @NotBlank(message = "Mobile Field should not be empty!")
    @Pattern(regexp = "(^&|[0-9]{11})", message = "Must mobile format!")
    private String mobile;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
