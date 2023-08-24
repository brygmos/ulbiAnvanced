import { userReducer, userActions } from './model/slice/userSlice';
import type { User } from './model/types/User';
import type { UserSchema } from './model/types/userSchema';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { isUserManager, isUserAdmin, getUserRoles } from './model/selectors/roleSelector';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited,
};
