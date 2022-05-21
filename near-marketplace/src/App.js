import './App.css';
import { useCallback, useEffect, useState } from 'react';

import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./utils/near";
import Wallet from "./components/Wallet";
import Cover from "./components/Cover";
import { Notification } from "./components/Notifications";
import Products from "./components/Products";
import coverImg from "./assets/img/sandwich.jpg";

function App() {
  const account = window.walletConnection.account();
  const [products, setProducts] = useState([]);
  const [balance, setBalance] = useState(0);
  const fetchProducts = useCallback(async () => {
    if (account.accoundId) {
      setProducts(await account.getProducts());
    }
  });

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <>
      <Notification />
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main><Products /></main>
        </Container>
      ) : (
        <Cover name="Street Food" login={login} coverImg={coverImg} />
      )}
    </>
  );
}

export default App;
