import React, { useState } from 'react';
import './CreateQuotation.css'; // Import your CSS file

const CreateQuotation = ({ prescriptionImages }) => {
    const [drugs, setDrugs] = useState([]);
    const [drugName, setDrugName] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddDrug = () => {
        if (drugName && quantity > 0) {
            const unitPrice = 15; // Example price per unit
            const amount = quantity * unitPrice; 
            setDrugs([...drugs, { name: drugName, unitPrice, quantity, amount }]);
            setDrugName('');
            setQuantity(1);
        }
    };

    const handleSendQuotation = () => {
        if (drugs.length === 0) {
            alert("Please add at least one drug to send the quotation.");
            return;
        }
        console.log('Quotation sent:', drugs);
        setDrugs([]); // Reset the drugs list after sending
    };

    const totalAmount = drugs.reduce((total, drug) => total + drug.amount, 0);

    return (
        <div className="quotation-container">
            <div className="prescription-section">
                <h3>Prescription (Image)</h3>
                <div className="image-preview">
                    {prescriptionImages && prescriptionImages.length > 0 ? (
                        prescriptionImages.map((image, index) => (
                            <img key={index} src={image} alt={`Prescription ${index + 1}`} />
                        ))
                    ) : (
                        <p>No prescription images uploaded.</p>
                    )}
                </div>
            </div>
            <div className="quotation-form">
                <h3>Create Quotation</h3>
                <div className="input-group">
                    <label>Drug:</label>
                    <input
                        type="text"
                        value={drugName}
                        onChange={(e) => setDrugName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <button type="button" onClick={handleAddDrug}>Add</button>
                <div className="added-drugs">
                    <h4>Added Drugs</h4>
                    {drugs.length > 0 ? (
                        <table className="bill-table">
                            <thead>
                                <tr>
                                    <th>Drug</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drugs.map((drug, index) => (
                                    <tr key={index}>
                                        <td>{drug.name}</td>
                                        <td>{drug.unitPrice.toFixed(2)} x {drug.quantity}</td>
                                        <td>{drug.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                                    <td>{totalAmount.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>No drugs added.</p>
                    )}
                </div>
                <button className="send-quotation" onClick={handleSendQuotation}>
                    Send Quotation
                </button>
            </div>
        </div>
    );
};

export default CreateQuotation;