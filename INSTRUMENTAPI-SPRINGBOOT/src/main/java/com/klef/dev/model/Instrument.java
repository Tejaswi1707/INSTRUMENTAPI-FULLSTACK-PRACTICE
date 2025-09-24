package com.klef.dev.model;

import jakarta.persistence.*;

@Entity
@Table(name="instrument_table")
public class Instrument {

    @Id
    @Column(name="iid")
    private int id;

    @Column(name="iname", length=50, nullable=false)
    private String name;

    @Column(name="itype", length=50, nullable=false)
    private String type;

    @Column(name="ibrand", length=50, nullable=false)
    private String brand;

    @Column(name="iprice", nullable=false)
    private double price;

    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    @Override
    public String toString() {
        return "Instrument [id=" + id + ", name=" + name + ", type=" + type + ", brand=" + brand + ", price=" + price + "]";
    }
}
