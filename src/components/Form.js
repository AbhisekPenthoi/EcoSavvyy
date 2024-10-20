import React, { useState } from 'react';
import './CarbonFootprintCalculator.css';
import MyLineChart from './MyLineChart';
import MyBarChart from './MyBarChart';
import MyPieChart from './MyPieChart';
import MyTable from './MyTable';
// import CarbonFootprintForm from './CarbonFootprintForm';

const CarbonFootprintForm = ({ energyConsumption, setEnergyConsumption, fuelUsage, setFuelUsage, methaneEmissions, setMethaneEmissions, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className="calculator-form">
      <label htmlFor="energy-consumption">
        Energy Consumption (kWh):
        <input
          type="number"
          id="energy-consumption"
          value={energyConsumption}
          onChange={(e) => setEnergyConsumption(e.target.value)}
          placeholder="Enter energy consumption"
        />
      </label>
      <label htmlFor="fuel-usage">
        Fuel Usage (liters):
        <input
          type="number"
          id="fuel-usage"
          value={fuelUsage}
          onChange={(e) => setFuelUsage(e.target.value)}
          placeholder="Enter fuel usage"
        />
      </label>
      <label htmlFor="methane-emissions">
        Methane Emissions (kg):
        <input
          type="number"
          id="methane-emissions"
          value={methaneEmissions}
          onChange={(e) => setMethaneEmissions(e.target.value)}
          placeholder="Enter methane emissions"
        />
      </label>
      <button type="submit" className="submit-button">Calculate</button>
      {error && <div className="result error">{error}</div>}
    </form>
  );
};

const CarbonFootprintCalculator = () => {
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [fuelUsage, setFuelUsage] = useState('');
  const [methaneEmissions, setMethaneEmissions] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculateCarbonFootprint = (energyConsumption, fuelUsage, methaneEmissions) => {
    const energyConversionFactor = 0.62; // kg CO2e/kWh
    const fuelConversionFactor = 2.76; // kg CO2e/liter
    const methaneConversionFactor = 28; // kg CO2e/kg methane

    const energyEmissions = energyConsumption * energyConversionFactor;
    const fuelEmissions = fuelUsage * fuelConversionFactor;
    const methaneEmissionsCO2e = methaneEmissions * methaneConversionFactor;

    return energyEmissions + fuelEmissions + methaneEmissionsCO2e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const energy = parseFloat(energyConsumption);
    const fuel = parseFloat(fuelUsage);
    const methane = parseFloat(methaneEmissions);

    if (isNaN(energy) || isNaN(fuel) || isNaN(methane)) {
      setError('Please enter valid numbers for all fields.');
      setResult('');
      return;
    }

    const carbonFootprint = calculateCarbonFootprint(energy, fuel, methane);
    setResult(`Your carbon footprint is: ${carbonFootprint.toFixed(2)} kg CO2e`);
    setError('');
  };

  // Data for visualization
  const data = [
    { name: 'Energy Consumption', value: parseFloat(energyConsumption) || 0 },
    { name: 'Fuel Usage', value: parseFloat(fuelUsage) || 0 },
    { name: 'Methane Emissions', value: parseFloat(methaneEmissions) || 0 },
  ];

  return (
    <div className="calculator-container">
      <h1>Carbon Footprint Calculator</h1>
      <CarbonFootprintForm 
        energyConsumption={energyConsumption} 
        setEnergyConsumption={setEnergyConsumption}
        fuelUsage={fuelUsage} 
        setFuelUsage={setFuelUsage}
        methaneEmissions={methaneEmissions}
        setMethaneEmissions={setMethaneEmissions}
        handleSubmit={handleSubmit}
        error={error}
      />
      {result && <div className="result">{result}</div>}

      {/* Visualization components in a grid layout */}
      <div className="visualizations">
        <section>
          <h2>Line Chart</h2>
          <MyLineChart data={data} />
        </section>
        <div className="table-container">
          <h2>Detailed Data</h2>
          <MyTable data={data} />
        </div>
        <a href="http://localhost:5000/plants/1/report" target='_blank'>Download Report</a>
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
