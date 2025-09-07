// Connect to the UrbanGrow database
db = db.getSiblingDB('urbangrow');

// Clear existing collections
db.crop_data.drop();
db.staff_data.drop();
db.operational_data.drop();

// Insert Crop & Environmental Data
db.crop_data.insertMany([
    {
        batch_id: "lettuce-b1-2025",
        species: "Lactuca sativa",
        planting_date: new Date("2025-08-15T09:00:00Z"),
        status: "growing",
        sensor_readings: {
            timestamp: new Date(),
            temperature_c: 21.5,
            humidity_percent: 65,
            ph: 6.2,
            co2_ppm: 450
        },
        nutrient_formula: "Formula-A"
    },
    {
        batch_id: "tomato-r4-2025",
        species: "Solanum lycopersicum",
        planting_date: new Date("2025-08-10T11:30:00Z"),
        status: "fruiting",
        sensor_readings: {
            timestamp: new Date(),
            temperature_c: 24.0,
            humidity_percent: 70,
            ph: 5.8,
            co2_ppm: 500
        },
        nutrient_formula: "Formula-C"
    }
]);

// Insert Staff Data
db.staff_data.insertMany([
    {
        staff_id: "AG-001",
        name: "Dr. Alisha Reed",
        job_role: "Senior Agronomist",
        contact: "alisha.reed@urbangrow.local",
        qualifications: ["PhD in Plant Science"]
    },
    {
        staff_id: "TECH-012",
        name: "Ben Carter",
        job_role: "System Technician",
        contact: "ben.carter@urbangrow.local",
        qualifications: ["Certified HVAC Technician", "AWS Cloud Practitioner"]
    }
]);

// Insert Operational Data
db.operational_data.insertMany([
    {
        log_id: "log-irr-9871",
        timestamp: new Date("2025-09-07T11:00:00Z"),
        system: "Irrigation Control",
        event_type: "cycle_start",
        details: {
            zone: "A1",
            duration_minutes: 15,
            flow_rate_lpm: 2.5
        }
    },
    {
        log_id: "log-light-9872",
        timestamp: new Date("2025-09-07T12:00:00Z"),
        system: "Lighting Control",
        event_type: "spectrum_change",
        details: {
            zone: "B2",
            new_spectrum: "blue-heavy"
        }
    }
]);

print("✅ UrbanGrow database populated successfully.");
