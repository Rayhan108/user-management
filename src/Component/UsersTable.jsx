

const UsersTable = ({user,idx}) => {
    const {name,email,phoneNumber} = user;
    return (
        <tr>
        <td>{idx+1}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
      </tr>
    );
};

export default UsersTable;