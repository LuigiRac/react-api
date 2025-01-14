import { useEffect, useState } from "react";
import axios from 'axios';

// import posts from "../data/posts"
const newPost = {
    id: 0,
    title: "",
    image: "",
    content: "",
    tags: [],
    published: true
};
import AddPost from "./AddPost";

function CardContent({ postsList }) {
    const [postList, setPostList] = useState([])
    const [formData, setFormData] = useState(newPost)
    useEffect(() => {
        setPostList(postsList);
    }, [postsList])

    function deletePost(id) {

        axios
            .delete(`http://localhost:3000/posts/${id}`)
            .then(() => {

                setPostList(postList.filter((el) => el.id !== id))

            })
            .catch((error) => {
                console.error("Errore durante l'eliminazione del post al server:", error);
            });
    }


    function handleInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);



        const newPost = { id: crypto.randomUUID(), ...formData };
        console.log(newPost);



        axios.post("http://localhost:3000/posts", newPost)
            .then((response) => {
                // console.log(response.data);

                setPostList([...postList, response.data]);
                setFormData(newPost);
            })
            .catch((error) => {
                console.error("Errore durante l'invio del post al server:", error);
            });


    }
    // function savePosts(params) {

    // }

    return (
        <>
            <div className="d-flex justify-content-center gap-3 m-4">
                {
                    postList.map((posts) => posts.published && (
                        <div className="card" style={{ width: '18rem' }} key={posts.id}>
                            <img className="card-img-top" src={posts.image} alt={posts.title}></img>
                            <div className="card-body">
                                <h5 className="card-title">{posts.title}</h5>
                                <p className="card-text">{posts.content}</p>
                                <a href="#" className="btn btn-primary" >Leggi di più</a>
                                <button onClick={() => deletePost(posts.id)} className="btn btn-primary">Delete</button>

                            </div>
                        </div>
                    ))
                }

            </div >
            <AddPost
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </>
    )
};

export default CardContent