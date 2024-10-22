import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Profile.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    let user = JSON.parse(localStorage.getItem('user'));

    let [imageLink, setImageLink] = useState('');
    let [data, setData] = useState({
        username: '',
        image: '',
        email: '',
    });
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let id = user.id;
                const response = await axios.get(`http://localhost:8080/users/${id}`);
                let data = response.data;
                setData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [user.id]);

    let handleImage = async () => {
      try {
          const response = await axios.patch(`http://localhost:8080/users/${user.id}`, { image: imageLink });
          let data = response.data;
          setData(data);
          console.log(data);
      } catch (error) {
          console.error('Error', error);
      }
  };
  

    return (
        <>
            <Header />
            <section className="Profile">
                <div className="profile-image">
                    <img src={data.image} alt="Profile" />
                    or
                    <input
                        type="text"
                        placeholder="input image link (host in imgur)"
                        className="profile-image-input"
                        onChange={(e) => setImageLink(e.target.value)}
                    />
                    <button className="changeButton" onClick={handleImage}>Save Image</button>
                </div>
                <div className="email">Email: {data.email}</div>
                <div className="username">Username: {data.username}</div>
            </section>
            <Footer />
        </>
    );
}
