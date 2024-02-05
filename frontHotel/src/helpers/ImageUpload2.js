import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    import.meta.env.VITE_CLOUDINARY_UPLOADPRESETS;

    const uploadImage = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', image);
      formData.append(VITE_CLOUDINARY_UPLOADPRESETS, 'tu_upload_preset_de_cloudinary');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/tu_cloud_name_de_cloudinary/image/upload',
        formData
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