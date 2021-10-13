import Axios from 'axios';
import { makeAutoObservable } from 'mobx';

class Profile {
    _users = [];
    _usersEndpointUrl = "https://61669f4013aa1d00170a65df.mockapi.io/users";

    constructor() {
        makeAutoObservable(this);
        this.fetchUsers();
    };

    fetchUsers() {
        Axios.get(this._usersEndpointUrl)
            .then((result) => {
                this.users = result.data;
            });
    }

    get users() {
        return this._users;
    }

    set users(users) {
        this._users = users;
    }
};

export default new Profile();
