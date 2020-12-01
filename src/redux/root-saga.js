import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth/auth.sagas';
import { userSagas } from './user/user.sagas';
import { commonIconsSaga } from './common-icons/common-icons.sagas';

export default function* rootSaga() {
    yield all([
        call(authSagas),
        call(userSagas),
        call(commonIconsSaga),
    ]);
}
