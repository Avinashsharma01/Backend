/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  
    const [joke, setjoke] = useState([]);

    useEffect(() => {
        axios
            .get("/api/joke")
            .then((response) => {
                setjoke(response.data);
            })
            .catch((error) => {
                console.log(" this is the catch error", error);
            });
    });

  


    return (
        <>
            <h1>hello word</h1>
            <h1>{joke.length}</h1>
            {joke.map((joke, index) => (
                <div key={joke.id}>
                    <h1>{joke.title}</h1>
                    <h2>{joke.content}</h2>
                </div>
            ))}
        </>
    );
}

export default App;
