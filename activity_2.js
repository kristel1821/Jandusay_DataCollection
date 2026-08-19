// Simulating a Digital Sensor Data Collection script
function collectSensorData() {
  return {
    timestamp: new Date().toISOString(),
    deviceId: "sensor-alpha-01",
    humidity: Math.floor(Math.random() * 100) + "%",
    // Add a temperature reading here!
    temperature: "72F"
  };
}

console.log("📡 Connecting to digital sensors...");

// Simulate collecting 3 rapid data logs
for (let i = 1; i <= 3; i++) {
  const logData = collectSensorData();
  console.log(`[LOG ${i}] Data received:`, logData);
}