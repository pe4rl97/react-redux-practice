import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUsers, selectUser } from "../store/users/actionCreators";

const UserList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users);
    const selectedUser = useSelector((state: RootState) => state.users.users.find((user) => user.id === state.users.selectedUserId));

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const handleUserClick = (userId: number) => {
        dispatch(selectUser(userId));
    }

    console.log('UserList is rendered.\n users = ', users);

    return (
        <div>
            <h2>User List</h2>
            {users.loading && <p>Loading...</p>}
            {users.error && <p>Error: {users.error}</p>}
            <ul>
                {users.users.map((user) => (
                    <li key={user.id} onClick={() => handleUserClick(user.id)} style={{cursor: 'pointer'}}>
                        <strong>{user.name}</strong> - Birthdate: {user.birthDate},
                        Profession: {user.occupation}
                    </li>
                ))}
            </ul>

            {selectedUser && (
                <div>
                    <h3>{selectedUser.name}'s Content</h3>
                    <iframe
                        title="User Content"
                        src={selectedUser.url}
                        width='100%'
                        height='400px'
                    />
                </div>
            )}
        </div>
    )
}

export default UserList