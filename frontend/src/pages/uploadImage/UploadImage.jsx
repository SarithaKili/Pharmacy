import React, { useState } from 'react';
import './UploadImage.css'; 
import axios from "axios";

const UploadImage = ({ email }) => {
  const url = "http://localhost:4000"; // Change to your backend URL if needed
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to capture error messages
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert('You can only upload a maximum of 5 images.');
      return;
    }

    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append images with the correct key
    images.forEach((image) => {
      formData.append("image", image.file); // Use the correct key
    });
    
    formData.append('address', address);
    formData.append('note', note);
    
    try {
      const response = await axios.post(`${url}/api/prescription`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        }
      });

      const data = response.data; // Destructure response data
      if (data.success) {
        setSuccessMessage('Images successfully sent to the pharmacist!');
        setImages([]);
        setAddress('');
        setNote('');
        setErrorMessage(''); // Clear any previous error message
      } else {
        setSuccessMessage(''); // Clear success message
        setErrorMessage('Failed to send images. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Upload failed:', error.response ? error.response.data : error.message);
      setSuccessMessage(''); // Clear success message
      setErrorMessage('Failed to send images. Please try again.'); // Set error message
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Images</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange} 
        />
        <div className="image-preview">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url} alt={`Preview ${index}`} className="preview-image" />
              <span>{image.file.name}</span>
              <button type="button" onClick={() => handleRemoveImage(index)}>Remove</button>
            </div>
          ))}
        </div>
        <input 
          type="text" 
          placeholder="Enter Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Enter Note" 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          required 
        />
        <button type="submit">Send to Pharmacist</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error messages */}
    </div>
  );
};

export default UploadImage;