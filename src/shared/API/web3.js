/**
 *
 * web3.eth.getBalance(address [, defaultBlock] [, callback])} x
 */
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
const formatic_api_key = 'pk_test_FD0EB9F0796F08AF';
import 'isomorphic-fetch';

const BANCOR_API = 'https://api.bancor.network/0.1/';

const getTickerApiData = async ({
  toToken = 'ETH',
  fromToken = 'BTN',
  displayCurrency = 'USD'
}) => {
  console.log('inside getticcker');
  const response = await fetch(
    `${BANCOR_API}currencies/ETH/ticker?fromCurrencyCode=BTN&displayCurrencyCode=USD`
  );
  const data = await response;
  console.log(data);
  return data;
};

const getEtherBalance = async x => {
  const fm = new Fortmatic(formatic_api_key);
  const web3 = new Web3(fm.getProvider());
  window.web3 = web3;
  const data = await web3.eth.getBalance(x);
  const res = await web3.utils.toWei(data, 'ether');
  return res;
};

const unbox = (arr = []) => {
  const [value] = arr;
  return value;
};

const getWalletBalance = async user => {
  const fm = new Fortmatic(formatic_api_key);
  const web3 = new Web3(fm.getProvider());
  console.log('web3', web3);
  window.web3 = web3;
  // Get current user account address.
  // Will authenticate the user if needed.
  const data = await web3.eth.getBalance(user);
  console.log({ data });
  const res = await web3.utils.toWei(data, 'ether');
  return res;
};

const initializeWeb3 = async () => {
  const fm = new Fortmatic(formatic_api_key);
  const web3 = new Web3(fm.getProvider());
  console.log('web3', web3);
  window.web3 = web3;
  // Get current user account address.
  // Will authenticate the user if needed.
  const data = await web3.eth.getAccounts();

  return unbox(data);
};

export { getWalletBalance, initializeWeb3, getTickerApiData };
