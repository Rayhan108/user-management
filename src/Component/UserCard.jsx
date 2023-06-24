import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const UserCard = ({user}) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
        
        className="bg-gray-100 rounded-md p-4 mb-4"
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
    >
  <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.name}</h2>
    <p> {user?.phoneNumber} </p>
    <p> {user?.email} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-warning">Delete</button>
    </div>
  </div>
</div>
    </div>
    );
};

export default UserCard;