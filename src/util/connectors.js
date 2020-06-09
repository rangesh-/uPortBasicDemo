import { Connect, SimpleSigner } from 'uport-connect'
export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '0x9cec368ea8de6089ce560b4ca79427717b0ba6cb',
  network: 'rinkeby'
})
export const web3 = uport.getWeb3()