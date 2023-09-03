import { userReducer, userActions } from './model/slice/userSlice';
import type { User } from './model/types/User';
import type { UserSchema } from './model/types/userSchema';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { UserRole } from './model/consts/consts';

export {
    isUserManager,
    isUserAdmin,
    getUserRoles,
} from './model/selectors/roleSelector';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited,
    UserRole,
};

export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
