package com.klef.dev.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.dev.model.Instrument;
import com.klef.dev.repository.InstrumentRepository;


@Service
public class InstrumentServiceImpl implements InstrumentService {

    @Autowired
    private InstrumentRepository repository;

    @Override
    public List<Instrument> viewAllInstruments() {
        return repository.findAll();
    }

    @Override
    public Instrument getInstrumentById(int id) {
        Optional<Instrument> obj = repository.findById(id);
        return obj.orElse(null);
    }

    @Override
    public String addInstrument(Instrument instrument) {
        repository.save(instrument);
        return "Instrument Added Successfully";
    }

    @Override
    public String updateInstrument(int id, Instrument instrument) {
        Optional<Instrument> obj = repository.findById(id);
        if (obj.isPresent()) {
            Instrument existing = obj.get();
            existing.setName(instrument.getName());
            existing.setType(instrument.getType());
            existing.setBrand(instrument.getBrand());
            existing.setPrice(instrument.getPrice());
            repository.save(existing);
            return "Instrument Updated Successfully";
        } else {
            return "Instrument ID Not Found";
        }
    }

    @Override
    public String deleteInstrument(int id) {
        Optional<Instrument> obj = repository.findById(id);
        if (obj.isPresent()) {
            repository.delete(obj.get());
            return "Instrument Deleted Successfully";
        } else {
            return "Instrument ID Not Found";
        }
    }
}
