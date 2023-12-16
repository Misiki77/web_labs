package com.labweb.Web_lab5.controller;

import com.labweb.Web_lab5.entity.PhoneEntity;
import com.labweb.Web_lab5.repository.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/phone")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PhoneController {

    @Autowired
    private PhoneRepository phoneRepository;

    @PostMapping
    public ResponseEntity<PhoneEntity> createPhone(@RequestBody PhoneEntity phone) {
        PhoneEntity savedPhone = phoneRepository.save(phone);
        return new ResponseEntity<>(savedPhone, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PhoneEntity>> getAllPhones() {
        List<PhoneEntity> phones = phoneRepository.findAll();
        return new ResponseEntity<>(phones, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PhoneEntity> getPhoneById(@PathVariable Long id) {
        Optional<PhoneEntity> phone = phoneRepository.findById(id);
        return phone.map(phoneEntity -> new ResponseEntity<>(phoneEntity, HttpStatus.OK)).
                orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePhone(@PathVariable Long id) {
        if (phoneRepository.existsById(id)) {
            phoneRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<PhoneEntity> updatePhone(@PathVariable Long id, @RequestBody PhoneEntity phone) {
        if (phoneRepository.existsById(id)) {
            phone.setId(id);
            PhoneEntity savedPhone = phoneRepository.save(phone);
            return new ResponseEntity<>(savedPhone, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
