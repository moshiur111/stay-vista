// import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  // const [role, setRole] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getRole(user?.email).then((data) => {
  //     setRole(data);
  //     setLoading(false);
  //   });
  // }, [user]);
  // return [role, loading];

  //By using Tanstack query
  const {data: role, isLoading} = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ['role'], 
  })
  return [role, isLoading]
};

export default useRole;
