import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { updateposts } from "../../store/slices/post.slice";
import Modal from 'react-modal'
import Posts from '../../pages/posts/Posts';

export default function ModalComponent({ modalIsOpen, setIsOpen, post }) {
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const dispatch = useDispatch();
    let subtitle;

    useEffect(() => {
        if (post) {
            settitle(post.title)
            setcontent(post.content)
        }
    }, [post]);

    function afterOpenModel() {
        subtitle.style.color = '#f00';
    }

    function CloseModal() {
        setIsOpen(false);
    }


    const OnUpdateHandle = () => {
        if (title === "" || content === "") {
            alert("Please fill all the fields")
            return
        }
        let newpost = {
            title: title,
            content: content,
        }
        dispatch(updateposts({ id: post.id, postdata: newpost }))
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModel}
                onRequestClose={CloseModal}
                contentLabel="Example Modal"
            >
                <h1> Update Post</h1>
                <input value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder="Title" />
                <input value={content} onChange={(e) => setcontent(e.target.value)} type="text" placeholder="Content" />
                {/* <input type="file" placeholder="Image" />  */}
                <button style={{
                    height: "50px",
                    // margin: "20px auto",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    backgroundColor: "green",
                    color: "white",
                    cursor: "pointer",
                }} onClick={OnUpdateHandle}>Update</button>
            </Modal>
        </div>
    )
}
