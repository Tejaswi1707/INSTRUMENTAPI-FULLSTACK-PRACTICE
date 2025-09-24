package com.klef.dev.service;
import java.util.List;

import com.klef.dev.model.Instrument;

public interface InstrumentService {
    List<Instrument> viewAllInstruments();
    Instrument getInstrumentById(int id);
    String addInstrument(Instrument instrument);
    String updateInstrument(int id, Instrument instrument);
    String deleteInstrument(int id);
}
