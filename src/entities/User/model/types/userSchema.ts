import { User } from '../../model/types/User';

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
