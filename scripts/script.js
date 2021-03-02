"use strict";

const totalOrangeEl = document.getElementById("orangeHotelTotal");
const totalLimeEl = document.getElementById("limeHotelTotal");
const totalKiwiEl = document.getElementById("kiwiHotelTotal");
const availabilityOrangeEl = document.getElementById("orangeHotelAvailable");
const availabilityLimeEl = document.getElementById("limeHotelAvailable");
const availabilitykiwiEl = document.getElementById("kiwiHotelAvailable");
const extrasOrangeHotel = document.getElementById("orangeHotelExtras");
const extrasLimeHotel = document.getElementById("limeHotelExtras");
const extrasKiwiHotel = document.getElementById("kiwiHotelExtras");

const orangeHotel = {
  totalRooms: 150,
  totalBooked: 50,
  totalAvailable: function () {
    return this.totalRooms - this.totalBooked;
  },

  features: ["gym", "restaurant"],
};
const limeHotel = {
  totalRooms: 200,
  totalBooked: 70,
  totalAvailable: function () {
    return this.totalRooms - this.totalBooked;
  },
  features: ["gym", "restaurant", "co-working space"],
};

const kiwiHotel = {
  totalRooms: 250,
  totalBooked: 150,
  totalAvailable: function () {
    return this.totalRooms - this.totalBooked;
  },
  features: ["gym", "restaurant", "night club", "co-working space"],
};

totalOrangeEl.textContent = `Total rooms: ${orangeHotel.totalRooms}`;
availabilityOrangeEl.textContent = `Total available: ${orangeHotel.totalAvailable()}`;
extrasOrangeHotel.textContent = `The features include: ${orangeHotel.features}`;

totalLimeEl.textContent = `Total rooms: ${limeHotel.totalRooms}`;
availabilityLimeEl.textContent = `Total available: ${limeHotel.totalAvailable()}`;
extrasLimeHotel.textContent = `The features include: ${limeHotel.features}`;


totalKiwiEl.textContent = `Total rooms: ${kiwiHotel.totalRooms}`;
availabilitykiwiEl.textContent = `Total available: ${kiwiHotel.totalAvailable()}`;
extrasKiwiHotel.textContent = `The features include: ${kiwiHotel.features}`;

