import { useQuery } from 'react-query';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function UserList() {
    const auth = {
        username: 'admin',
        password: 'password123'
      }
    const { data: users, status } = useQuery('users', async () => {
        const { data } = await axios.get('/users', { auth });
        return data;
    });

    return (
        <div>
            <p>The following users are fetched from the database through backend api</p>
            <h2>Users</h2>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'error' && <div>Error</div>}
            {status === 'success' && (
                <ul>
                    {users.results.map((user) => (
                        <li key={user.username}><strong>Username:</strong> {user.username}, <strong>url:</strong> {user.url}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;