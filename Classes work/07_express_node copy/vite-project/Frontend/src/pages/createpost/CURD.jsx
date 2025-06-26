// import postslice, { createPost, updateposts, deletepost, getposts } from "../../store/Slices/post.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";

export default function CURD() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [image, setimage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleCreatePost = async () => {
    const newpost = {
      title,
      content,
      image,
    };
    console.log("Submitting post:", newpost); // ✅ Check that image is NOT null
    await dispatch(createPost(newpost));
    navigate("/");
  };

  const handleImage = async (e) => {
    try {
      const file = e.target.files[0];
      const formdata = new FormData();
      formdata.append("file", file); // ✅ Correct key
      formdata.append("upload_preset", "todo-app");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dlj5qr22y/image/upload",
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await response.json();
      setimage(data.secure_url);
      console.log(image)
      console.log("Image uploaded successfully:", data.secure_url); // ✅ correct logging
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="create-post-container">
      <style>{`
        .create-post-container {
          min-height: 100vh;
          background-color: #0f172a;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .post-box {
          background-color: #1e293b;
          padding: 30px;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
          animation: fadeIn 0.8s ease-out;
          position: relative;
        }

        .post-box h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 26px;
          margin-bottom: 25px;
        }

        .post-box input,
        .post-box textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          background-color: #0f172a;
          border: 1px solid #475569;
          border-radius: 10px;
          color: white;
          transition: 0.3s ease;
        }

        .post-box input:focus,
        .post-box textarea:focus {
          border-color: #7c3aed;
          outline: none;
        }

        .post-box button {
          width: 100%;
          background: linear-gradient(to right, #7c3aed, #6366f1);
          padding: 12px;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: 0.3s ease;
        }

        .post-box button:hover {
          background: linear-gradient(to right, #6d28d9, #4f46e5);
        }

        .post-box .icon-bounce {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 24px;
          height: 24px;
          animation: bounce 1.5s infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <div className="post-box">
        <h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
            alt="Post Icon"
            width="30"
            height="30"
          />
          Create New Post
        </h2>

        <input
          type="text"
          placeholder="Enter your post title..."
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          rows="4"
          placeholder="Write something awesome..."
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>

        <input type="file" accept="image/*" onChange={handleImage} />

        <button onClick={handleCreatePost} disabled={!image}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt="Submit Icon"
            width="18"
            height="18"
          />
          Submit Post
        </button>

        <img
          className="icon-bounce"
          src="https://cdn-icons-png.flaticon.com/512/2920/2920284.png"
          alt="Decorative Icon"
        />
      </div>
    </div>
  );
}
