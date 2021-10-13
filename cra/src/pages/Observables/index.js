import Profile from './profile';
import { observer, Observer } from 'mobx-react-lite';
import { observable, runInAction } from 'mobx';


const timePassed = observable.box(0);
setInterval(() => {
    runInAction(() => {
        timePassed.set(timePassed.get() + 1);
    })
}, 1000);

const UserCard = ({ avatar, id, name }) => <div className="col-4 col-md-3 col-lg-2 col-xl-1 text-center">
    <img className="img-fluid rounded w-100" src={avatar} alt={name} />
    <p className="m-0">{name}</p>
</div>;

const UserList = observer(() => Profile.users.map((user, index) => {
    return <UserCard key={index} avatar={user.avatar} id={user.id} name={user.name} />
}));

export const Observables = () => <>
    <h1>Observables</h1>
    <div className='row gy-3'>
        <UserList />
        <Observer>
            {() => <>{timePassed.get()}</>}
        </Observer>
    </div>
</>;
