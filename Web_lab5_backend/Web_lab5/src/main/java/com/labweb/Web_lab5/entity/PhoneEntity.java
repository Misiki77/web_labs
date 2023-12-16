package com.labweb.Web_lab5.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class PhoneEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer memory_сapacity;
    private Integer price;
    private String image;

    public PhoneEntity(String brand, String model, Integer memory_сapacity, Integer price, String image) {
        this.brand = brand;
        this.model = model;
        this.memory_сapacity = memory_сapacity;
        this.price = price;
        this.image = image;
    }
}
