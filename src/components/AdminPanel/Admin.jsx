// import React from 'react';
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { storeText } from "../../firebaseConfig";
import {
  AdminPanelWrapper,
  AdminTitle,
  UserList,
  ViewForm,
} from "./Admin.styled";
import UserCard from "../Card/UserCard";
import "bootstrap/dist/css/bootstrap.css";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userCollection = collection(storeText, "userInfo");

    const unsubscribe = onSnapshot(userCollection, (querySnapshot) => {
      const userList = querySnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <AdminPanelWrapper>
      <AdminTitle>Admin Panel</AdminTitle>
      <ViewForm to="/">
        Add User <i className="bi bi-person-add"></i>
      </ViewForm>
      <UserList>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </UserList>
    </AdminPanelWrapper>
  );
};
export default AdminPanel;
