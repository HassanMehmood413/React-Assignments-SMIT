import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/slices/post.slice";
import { Link, useNavigate } from "react-router";




export default function CreatePost() {

    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [image, setimage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const goback = () => {
        navigate("/posts")
    }

    const onclickhandler = async () => {
        try {

            if (title  === "" || content === "") {
                alert("Please fill all the fields")
                return
            }

            let newpost = {
                title: title,
                content: content,
                image: image
            }
            await dispatch(createPost(newpost))
            goback();
        }
        catch (error) {
            console.log("Error", error)
        }
    }


    const handleimage = async (e) => {
        try {
            const file = e.target.files[0];
            const formdata = new FormData();
            formdata.append("image", file);
            formdata.append("upload_preset", "todo-app")
            const response = await fetch("https://api.cloudinary.com/v1_1/dlj5qr22y/image/upload", {
                method: "POST",
                body: formdata
            })
            const data = await response.json()
            setimage(data.secure_url)
            console.log("Image Uploaded Successfully")
        }
        catch (error) {
            console.log("Error", error)
        }
    }



    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            // height: "100vh",
        }}>
            {/* back link */}
            <Link to="/posts" style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                marginLeft: "20px",
                marginTop: "20px",
                display: "inline-block"
            }}>Back</Link>

            <h1 style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "2rem",
                fontWeight: "bold"
            }}>Create Posts</h1>

            <input type="text" placeholder="Title" style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
                onChange={(e) => settitle(e.target.value)} value={title}
            />
            <textarea placeholder="Content" style={{
                width: "80%",
                height: "200px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
                onChange={(e) => setcontent(e.target.value)} value={content}
            ></textarea>
            <input type="file" style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
                onChange={(e) => handleimage(e)}
            />

            <button style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
                paddingBottom: "10px",
                marginBottom: "20px",
            }}
                onClick={onclickhandler}
            >Create Post</button>





        </div>
    )


}