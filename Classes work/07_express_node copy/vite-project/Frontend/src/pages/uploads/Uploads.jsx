// UploadTest.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Uploads()  {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", file); // ⬅ 'image' must match multer.single("image")

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Upload success:", res.data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
