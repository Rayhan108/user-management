import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { data: allUsers = []} = useQuery(["allUsers"], async () => {
        const res = await fetch(
          "http://localhost:5000/users"
        );
        return res.json();
      });
    return [allUsers]
};

export default useUsers;