import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import TradePage from './TradePage';
import SignIn from './SignIn';

const MasterComp = () => {
    const loginReducer = useSelector((state) => state.loginReducer.isLoggedIn);
    const loginUsers = useSelector((state) => state.loginReducer.users);
  
    return (
        <div>
      {/* {!loginReducer ? <SignIn /> : <TradePage />} */}
      <TradePage />
        </div>
    )
}

export default MasterComp
