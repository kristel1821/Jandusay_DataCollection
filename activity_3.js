// 1. Capture the data (Simulating a user filling out a Web Form)
const formData = {
  username: "data_explorer",
  email: "explorer@example.com",
  role: "Analyst",
  // Add an 'age' property here:
  age: 21
  
};

console.log("📤 Preparing to transmit data via Web Technologies...");
console.log("Payload:", formData);

// 2. Send the data to the backend API using fetch()
async function submitData() {
  try {
    const response = await fetch('/api/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    // 3. Receive confirmation from the server
    const result = await response.json();
    console.log("\n✅ Server Response:", result.message);
    console.log("💾 Data stored in Database:", result.savedRecord);
    
  } catch (error) {
    console.error("Transmission failed:", error);
  }
}

submitData();