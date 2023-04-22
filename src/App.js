import "./App.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

function App() {
  let [data, setdata] = useState([]);
  let [ffname, setffname] = useState("");
  let [flname, setflname] = useState();
  let [femail, setfemail] = useState();
  let [fcom, setfcom] = useState();

  let fname = useRef();
  let lname = useRef();
  let email = useRef();
  let com = useRef();
  console.log(ffname.length)

  useEffect(() => {
    get();
  }, [ffname]);

  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=16`);
    let res = await req.json();
    setdata(res.products);
  };
  let review = (e) => {
    e.preventDefault();
    setffname(fname.current.value);
    setflname(lname.current.value);
    setfemail(email.current.value);
    setfcom(com.current.value);
    alert('Your Review will Successfully Submited ')
  };

  return (
    <div className="App">
      <div className="div">
        {data.map((v, i) => {
          return (
            <div key={i} className="row main">
              <div className="w-40">
                <h3>{v.title}</h3>
                <img src={v.thumbnail} alt="img" />
                <br></br>

              </div>
              <div className="box w-60">
              

                <div className="review">
                  <p>Best Product</p> 
                  <p>{v.description}</p>
                  <div className="price-sec">
                    <h2>Price : {v.price}$</h2>


                    {ffname.length == 0 ? '' : <div className="review">
                      <h3>Review</h3>
                      <h5>
                        Name : {ffname} {flname}
                      </h5>
                      <p>{fcom}</p>
                      <h6>Buyer , {Date()}</h6>
                    </div>}
                  </div>
                  <p>Rating : {v.rating}</p>
                  <br/>
                  <div className="price-btn">
                    <button className="price-btn-1">🛒 Stock : {v.stock}</button>
                    <button className="price-btn-2">💲 Buy Now</button>
                  </div>
                </div>

              </div>
              
            </div>
          );
        })}
        
        <div className="comment-main">
          <h5>Review</h5>
          <form onSubmit={review}>
            <div className="inp-box">
              <input type="text" placeholder="First Name" ref={fname} />
              <input type="text" placeholder="Last Name" ref={lname} />

              <input type="email" placeholder="Email" ref={email} required />
              <input type="text" placeholder="Password" />
              <div className="inp-box-2">
                <input
                  type="text"
                  placeholder="Review  "
                  ref={com}
                />
              </div>
            </div>

            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
       
      </div>
    </div>
  );
}

export default App;