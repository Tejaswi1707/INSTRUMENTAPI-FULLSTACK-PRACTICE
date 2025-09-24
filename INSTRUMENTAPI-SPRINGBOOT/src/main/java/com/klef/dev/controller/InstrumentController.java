package com.klef.dev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.dev.model.Instrument;
import com.klef.dev.service.InstrumentService;


@RestController
@RequestMapping("/instrument")
@CrossOrigin("*")
public class InstrumentController {

    @Autowired
    private InstrumentService service;

    @GetMapping("/")
    public String home() {
        return "Instrument Management API";
    }

    @GetMapping("/viewall")
    public List<Instrument> viewAll() {
        return service.viewAllInstruments();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getById(@PathVariable int id) {
        Instrument instrument = service.getInstrumentById(id);
        if (instrument != null) {
            return ResponseEntity.ok(instrument); // 200 OK with the instrument
        } else {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND) // 404 Not Found
                    .body("Instrument with ID " + id + " not found");
        }
    }


    @PostMapping("/add")
    public String addInstrument(@RequestBody Instrument instrument) {
        return service.addInstrument(instrument);
    }

    @PutMapping("/update/{id}")
    public String updateInstrument(@PathVariable int id, @RequestBody Instrument instrument) {
        return service.updateInstrument(id, instrument);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteInstrument(@PathVariable int id) {
        return service.deleteInstrument(id);
    }
}
