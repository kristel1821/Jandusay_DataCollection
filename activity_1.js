// A raw dataset containing mixed types of data
const rawData = [
  45, 
  "User found the UI confusing", 
  120.5, 
  "Loved the new dark mode",
  8,
  // Add your new data points here:
  99.9,
  "App crashed on load"
];

console.log("🔍 Analyzing Dataset...");

// Filter data by type
const quantitativeData = rawData.filter(item => typeof item === 'number');
const qualitativeData = rawData.filter(item => typeof item === 'string');

console.log("\n📊 Quantitative Data (Metrics/Numbers):");
console.log(quantitativeData);

console.log("\n📝 Qualitative Data (Feedback/Text):");
console.log(qualitativeData);