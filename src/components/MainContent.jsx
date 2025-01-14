import React from "react";
import CardContent from "./CardContent";
import axios from 'axios'
// import Form from "./Form";
// import AddPost from "./AddPost";
const apiUrl = 'http://localhost:3000/posts';
// console.log(apiUrl);


function MainContent() {
    const [postsList, setPosts] = React.useState([])
    function getData() {
        axios.get(apiUrl).then((res) => {
            console.log(res.data);
            setPosts(res.data)
        });
    }
    React.useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <main className="container ">
                <CardContent postsList={postsList} />

                {/* <Form /> */}

            </main>
        </>
    );
};



export default MainContent