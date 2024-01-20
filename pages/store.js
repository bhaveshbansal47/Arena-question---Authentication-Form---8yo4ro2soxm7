import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Store() {
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('loggedIn');
    router.push('login')
  }
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (loggedIn !== 'true') {
      router.push('login')
    }
  })
  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button onClick={logout} className='logout-btn'>Logout</button>
    </div>
  );
}

export default Store;
