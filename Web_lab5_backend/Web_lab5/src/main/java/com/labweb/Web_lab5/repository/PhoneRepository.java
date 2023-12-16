package com.labweb.Web_lab5.repository;

import com.labweb.Web_lab5.entity.PhoneEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneRepository extends JpaRepository<PhoneEntity, Long> {
}