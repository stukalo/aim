import protectedResource from '../../hocs/protected-resource';
import { ADMIN } from '../../constants/roles';

const Users = ({ users }) => {
    return (
        <ul>
            {users.map(({ id, email, role }) => (
                <li key={id}>{`email: ${email}, role: ${role}`}</li>
            ))}
        </ul>
    );
};

Users.getInitialProps = async (ctx, client) => {
    try {
        const { data } = await client.get("/api/users");
        console.log('> ssr users', data);
        return { users: data };
    } catch (err) {
        console.log('> ssr error');
        return { users: [] };
    }
}

export default protectedResource(Users, [ADMIN]);