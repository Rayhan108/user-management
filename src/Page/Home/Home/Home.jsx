
import UsersTable from "../../../Component/UsersTable";
import SectionTitle from "../../../Component/SectionTitle";
import useUsers from "../../../hooks/useUsers";


const Home = () => {
const [allUsers]=useUsers();

    return (

        <div>
<SectionTitle header={'our users'}></SectionTitle>

<div className="overflow-x-auto">
 <table className="table container mx-auto w-1/2">
    {/* head */}
    <thead  className="font-bold text-xl bg-base-300">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody className="">
 
      {
            allUsers.map((user,idx)=><UsersTable key={user._id} user={user} idx={idx}></UsersTable>)
           }
  
    </tbody>
  </table>
</div>


          
        </div>
    );
};

export default Home;