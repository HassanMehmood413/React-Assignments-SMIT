import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { createPost, updateposts, deletepost, getposts } from "../../store/Slices/post.slice";
import "./modal.css";
import { useNavigate } from 'react-router';

export default function Modal({ isOpen, toggleModal, postData }) {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [image, setimage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    console.log("STarting", postData)
    useEffect(() => {
        // If there's no post data or modal closes, reset the form
        if (postData) {
            settitle(postData.title);
            setcontent(postData.content);
            setimage(postData.image);
            setImagePreview(postData.image);
        }
    }, [isOpen, postData]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("HOLA", postData);

        if (postData && postData.id) {
            // Update existing post
            dispatch(updateposts({ id: postData.id, postdata: { title, content } }))
                .unwrap()
                .then(() => {
                    window.location.reload(); // ✅ Reload after successful update
                })
                .catch((error) => {
                    console.error("Update failed:", error);
                });

        } else {
            // Create new post
            dispatch(createPost(postData))
                .then(() => {
                    dispatch(getposts());
                    toggleModal();
                });
        }
    };


    const handleDelete = () => {
        if (postData && postData.id) {
            if (window.confirm('Are you sure you want to delete this post?')) {
                dispatch(deletepost(postData.id))
                navigate('/')
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{postData ? 'Edit Post' : 'Create New Post'}</h2>
                    <button className="modal-close-btn" onClick={toggleModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="post-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setcontent(e.target.value)}
                            placeholder="Write your post content here..."
                            rows="8"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Featured Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="file-input"
                        />

                        {imagePreview && (
                            <div className="image-preview">
                                <img src={imagePreview || "/placeholder.svg"} alt="Preview" />
                            </div>
                        )}
                    </div>

                    <div className="modal-actions">
                        {postData && (
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        )}
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {postData ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}