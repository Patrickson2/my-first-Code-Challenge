/**
 * Function to calculate all deductions and final take-home pay
 */
function calculateNetSalary(basic, benefits) {
  // Gross = everything you earn before deductions
  const gross = basic + benefits;

  // --- NSSF (Kenya, Feb 2025 rules) ---
  const tier1Limit = 8000;
  const tier2Limit = 72000;
  let nssf = 0;
  if (gross <= tier1Limit) {
    nssf = gross * 0.06;
  } else {
    const tier1 = tier1Limit * 0.06;
    const tier2 = Math.min(gross, tier2Limit) > tier1Limit 
      ? (Math.min(gross, tier2Limit) - tier1Limit) * 0.06 
      : 0;
    nssf = tier1 + tier2;
  }

  // --- SHIF (replaced NHIF) ---
  let shif = gross * 0.0275;
  if (shif < 300) shif = 300;

  // --- PAYE (Income Tax, July 2023 bands) ---
  let taxableIncome = gross - nssf;  
  let paye = 0;

  const bands = [
    { limit: 24000, rate: 0.10 },
    { limit: 8333, rate: 0.25 },
    { limit: 467667, rate: 0.30 },
    { limit: 300000, rate: 0.325 },
    { limit: Infinity, rate: 0.35 }
  ];

  let remaining = taxableIncome;
  for (let { limit, rate } of bands) {
    const amount = Math.min(remaining, limit);
    paye += amount * rate;
    remaining -= amount;
    if (remaining <= 0) break;
  }

  const personalRelief = 2400;
  paye = Math.max(paye - personalRelief, 0);

  const net = gross - (nssf + shif + paye);

  return {
    basic,
    benefits,
    gross,
    nssf: Math.round(nssf),
    shif: Math.round(shif),
    paye: Math.round(paye),
    net: Math.round(net)
  };
}

// --- Prompt-based input ---
let basicSalary = parseFloat(prompt("Enter Basic Salary (KES):"));
let benefits = parseFloat(prompt("Enter Benefits (KES):"));

if (isNaN(basicSalary) || isNaN(benefits)) {
  console.log("Invalid input. Please enter numbers only.");
} else {
  const result = calculateNetSalary(basicSalary, benefits);

  console.log("\n--- Net Salary Breakdown ---");
  console.log(`Basic Salary: KES ${result.basic}`);
  console.log(`Benefits: KES ${result.benefits}`);
  console.log(`Gross Salary: KES ${result.gross}`);
  console.log(`NSSF Deduction: KES ${result.nssf}`);
  console.log(`SHIF Deduction: KES ${result.shif}`);
  console.log(`PAYE (Tax): KES ${result.paye}`);
  console.log(`Net Salary: KES ${result.net}`);
}
