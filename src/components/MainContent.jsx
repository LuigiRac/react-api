import CardContent from "./CardContent";
import axios from 'axios'
// import Form from "./Form";
// import AddPost from "./AddPost";
const apiUrl = 'http://localhost:3000/posts';

function MainContent() {
    function getData() {
        axios.get(apiUrl).then((res) => {
            console.log(res.data);

        });
    }
    getData();

    return (
        <>
            <main className="container ">
                <CardContent />

                {/* <Form /> */}

            </main>
        </>
    );
};



export default MainContent