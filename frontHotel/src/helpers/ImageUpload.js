import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  import.meta.env.VITE_CLOUDINARY_NAME;
  import.meta.env.VITE_CLOUDINARY_APIKEY;
  import.meta.env.VITE_CLOUDINARY_APISECRET;
  import.VITE_CLOUDINARY_URL;

  const uploadImage = async () => {
    const files= e.target.files;
    const data = new FormData();
        data.append('file', files[0]);
        data.append(VITE_CLOUDINARY_NAME, VITE_CLOUDINARY_URL);

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/VITE_CLOUDINARY_NAME/image/upload',
        data
      );
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      console.error('Please select an image');
      return;
    }
    uploadImage();
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {imageUrl && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;