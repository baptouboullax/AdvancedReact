import Profile from './profile';
import { observer } from 'mobx-react-lite';


const UserCard = ({ avatar, id, name }) => <div className="col-2">
    <img className="img-fluid rounded" src={avatar} />
</div>;

const UserList = observer(() => Profile.users.map((user, index) => {
    return <UserCard key={index} avatar={user.avatar} id={user.id} name={user.name} />
}));

export const Observables = () => <>
    <h1>Observables</h1>
    <div className='row gy-3'>
        <UserList />
    </div>
</>;
