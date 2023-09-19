import UserData from "./UserData";
function Admin() {
  const users = [
    { id: 1, username1: "Elnur", isActive: true, lastVisit: "2023-01-01" },
    { id: 2, username1: "Marco", isActive: false, lastVisit: "2023-05-10" },
    { id: 3, username1: "Pahel", isActive: true, lastVisit: "2023-05-03" },
    { id: 4, username1: "Eva", isActive: true, lastVisit: "2023-05-02" },
    { id: 5, username1: "Loslos", isActive: false, lastVisit: "2022-05-01" },
    { id: 6, username1: "Mosmos", isActive: false, lastVisit: "2021-05-04" },
    { id: 7, username1: "Piquel", isActive: true, lastVisit: "2023-09-01" },
    { id: 8, username1: "Amania", isActive: true, lastVisit: "2023-05-09" },
  ];
  const inactiveUsers = users.filter((user) => !user.isActive);

  return (
    <div>
      {/* {users.map((user) => (
        <UserData key={user.id} user={user}></UserData>
      ))} */}
      {inactiveUsers.map((user) => (
        <UserData key={user.id} user={user}></UserData>
      ))}
    </div>
  );
}

export default Admin;
