import { useState } from 'react'
import {v4 as uuid} from 'uuid';

//TODO:
// Create a custom React hook called useAuthentication that
// utilizes browser session storage for storing some tokenized
// identity value (either JWT or UUID)
//
// The hook should provide the value of the entity from session storage
// ,if it exists, as well as a function called logout that will remove
// the value from the session storage, effectively logging the user out
// of the session
//
//Replace this function with the TODO described above

// custom hook by storing the token in session storage while logging and removing the token while logout
function userAuthentication(value:string) {
    if(value === 'login'){
        sessionStorage.setItem('token',uuid());
        return sessionStorage.getItem('token');
    }else{
        sessionStorage.setItem('token','');
        return sessionStorage.getItem('token')
    }
   
}

export default userAuthentication