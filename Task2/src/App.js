import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(null);

  const getuserData = async() => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    isClicked && getuserData();
  }, [isClicked]);

  const getData = () => {
    setIsClicked(true);
  };

  return (
    <div className="App">
    
      <header>
        <nav className="navbar" class="navbar navbar-expand-sm bg-dark text-light">
          <div className="container ">
            <h2 className="navbar">LetsGrowmore</h2>
            <button onClick={getData} className="btn btn-primary">
              Get Users
            </button>
          </div>
        </nav>
      </header>

   
      <div className="row p-5 m-2 mt-5">
        {data &&
          data.map((item) => {
            return (
              <div className="card" class="img-rounded" width="250px" height="250px">
                  <img src={item.avatar
                  } alt="Avatar" />
                  <div className="container">
                    <h4>
                      <b>{item.first_name} {item.last_name}</b>
                    </h4>
                    <p>{item.email}</p>
                  </div>
                </div>
            );
          })}
      </div>

      
    </div>
  );
}

export default App;