import SectionTitle from "../../Component/SectionTitle";
import UserCard from "../../Component/UserCard";
import useUsers from "../../hooks/useUsers";
import { FaSpinner } from 'react-icons/fa';

const EditUser = () => {
    const [allUsers,loading]=useUsers();
    return (
    <>
     <SectionTitle header={'Manage user'}></SectionTitle>
 { loading?
 <div className="flex items-center justify-center h-32">
 <FaSpinner className="animate-spin text-gray-500 text-4xl" />
</div>  
    :<div className="grid md:grid-cols-3 lg:grid-cols-4">
            {
                allUsers.map(user=><UserCard  key={user._id} user={user}></UserCard>)
            }
        </div>}
    </>
    );
};

export default EditUser;