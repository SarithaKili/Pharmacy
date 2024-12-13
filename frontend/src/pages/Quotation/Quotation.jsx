import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Quotation.css';

const Quotation = () => {
  const { id } = useParams(); // Get the request ID from the URL
  const [request, setRequest] = useState(null); // State to hold the request data
  const [drugs, setDrugs] = useState([]);
  const [total, setTotal] = useState(0);
  const [drugName, setDrugName] = useState('');
  const [quantity, setQuantity] = useState('');

  // Simulated drug price database
  const drugPrices = {
    'Amoxicillin 250mg': 10.00,
    'Paracetamol 500mg': 5.00,
  };

  useEffect(() => {
    // Fetch request data based on ID
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    const foundRequest = storedRequests.find(req => req.id === id);
    setRequest(foundRequest);
  }, [id]);

  const handleAddDrug = () => {
    const price = drugPrices[drugName] || 0;
    const amount = price * quantity;

    if (quantity > 0 && price > 0) {
      setDrugs((prevDrugs) => [
        ...prevDrugs,
        { name: drugName, quantity: parseInt(quantity), amount: amount },
      ]);
      setTotal((prevTotal) => prevTotal + amount);
      setDrugName('');
      setQuantity('');
    } else {
      alert('Please enter a valid drug and quantity.');
    }
  };

  const handleSendQuotation = () => {
    // Logic to send the quotation to the patient
    const quotationDetails = {
      requestId: id,
      drugs: drugs,
      total: total,
    };

    // Here you would implement the logic to send the quotation,
    // e.g., an API call or email.
    console.log('Sending quotation:', quotationDetails);
    alert('Quotation sent to the patient!');
  };

  if (!request) {
    return <p>Loading request data...</p>; // Handle loading state
  }

  return (
    <div className="quotation-container">
      <h2>Quotation</h2>
      <div className="prescription-section">
        <h3>Prescription (Image)</h3>
        <img src={request.imageUrl} alt="Prescription" className="prescription-image" />
        <div className="image-thumbnails">
          {request.images.map((img, index) => (
            <img key={index} src={img.url} alt={`Uploaded ${index}`} className="thumbnail" />
          ))}
        </div>
      </div>
      <div className="drug-entry">
        <input 
          type="text" 
          placeholder="Drug" 
          value={drugName} 
          onChange={(e) => setDrugName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
        <button onClick={handleAddDrug}>Add</button>
      </div>
      <div className="drugs-list">
        <h3>Added Drugs</h3>
        <ul>
          {drugs.map((drug, index) => (
            <li key={index}>
              {drug.name} - {drug.quantity} x {drugPrices[drug.name]} = {drug.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <h3>Total: {total.toFixed(2)}</h3>
      <button className="send-quotation" onClick={handleSendQuotation}>Send Quotation</button>
    </div>
  );
};

export default Quotation;