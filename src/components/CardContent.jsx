import { useEffect, useState } from "react";
import posts from "../data/posts"
const newPost = {
    id: 0,
    title: "",
    image: "",
    content: "",
    tags: [],
    published: true
};
import AddPost from "./AddPost";

function CardContent() {
    const [postsList, setPostList] = useState(posts)
    const [formData, setFormData] = useState(newPost)


    function deletePost(id) {
        setPostList(posts.filter((el) => el.id !== id))
    }

    function handleInput(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        setPostList([...posts, { id: self.crypto.randomUUID(), ...formData }]);
        setFormData(newPost)
        // console.log(id);
        // console.log(e);


    }
    // function savePosts(params) {

    // }

    return (
        <>
            <div className="d-flex justify-content-center gap-3 m-4">
                {
                    postsList.map((posts) => posts.published && (
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