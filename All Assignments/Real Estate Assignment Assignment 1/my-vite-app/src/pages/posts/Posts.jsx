import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getposts, deletepost, updateposts, createPost } from "../../store/slices/post.slice";
import { Link, useNavigate } from "react-router";
import Modal from "../../components/modal/Modal"
import postslice from '../../store/slices/post.slice';




export default function Posts() {
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [image, setimage] = useState(null);
    const [post, setpost] = useState(null);
    const dispatch = useDispatch();

    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setpost(post)
        setIsOpen(true)
    }

    const posts = useSelector((state) => state.postslice.post)

    const onClickHandler = () => {
        if (title === "" || content === "") {
            alert("Please fill all fields");
            return;
        }

        console.log("Title: ", title);
        console.log("Content: ", content);
        console.log("Image: ", image);
        let newPost = {
            title: title,
            content: content,
            createdAt: new Date().toISOString(),
        }

        dispatch(createPost(newPost))
    }


    useEffect(() => {
        dispatch(getposts())
    },[])


    const OnClickDeleteHandler = (id) => {
        confirm("Are you sure you want to delete this post?") && dispatch(deletepost(id))
    }







    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            // height: "100vh",
        }}>
            {/* create Post link */}
            <Link to="/createpost" style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                marginLeft: "20px",
                marginTop: "20px",
                display: "inline-block"
            }}>Create Post</Link>

            {/* list of posts */}
            <div style={{
                width: "80%",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}>
                <h2 style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "2rem",
                    fontWeight: "bold"
                }}>Posts List</h2>
                <div>
                    {posts.map((post) => (
                        <div key={post.id} style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                        }}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>{post.createdAt}</p>
                            <img src={post.imageUrl} alt="post" style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "5px",
                            }} />

                            <button
                                onClick={() => OnClickDeleteHandler(post.id)}
                                style={{

                                    height: "50px",
                                    // margin: "20px auto",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "#dc3545",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >Delete</button>

                            <button
                                onClick={() => openModal(post)}
                                style={{

                                    height: "50px",
                                    // margin: "20px auto",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "green",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >update</button>

                        </div>
                    ))}
                </div>
            </div>

            <Modal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                post={post}
            />


        </div>
    )
}
