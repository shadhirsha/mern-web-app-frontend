import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../context/auth';

export default function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <div>
        <Jumbotron
          title="Ecommerce Home Page"
          subTitle= "Welcome to React E-Commerce"
        />
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  )
}
