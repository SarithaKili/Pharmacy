import React, { useState } from 'react';
import './UploadPrescription.css';

const UploadPrescription = () => {
    const [images, setImages] = useState([]);
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length + images.length > 5) {
            setError("You can upload a maximum of 5 images.");
            return;
        }
        setError('');
        setImages([...images, ...selectedFiles]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log("Images:", images);
        console.log("Address:", address);
        console.log("Note:", note);
    };

    return (
        <div className="upload-prescription">
            <h2>Upload Prescription</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="images">Upload Images (max 5):</label>
                    <input
                        type="file"
                        id="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />
                    {error && <span className="error">{error}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="note">Note:</label>
                    <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows="4"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="image-preview">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index + 1}`}
                        className="preview-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default UploadPrescription;