import axiosSecure from ".";

// Fetch all rooms form DB
export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms")
  return data;
};


// Fetch single room data form DB
export const getRoom = async id => {
  const { data } = await axiosSecure(`/room/${id}`)
  return data;
};
