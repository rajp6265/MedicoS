import web3 from './web3';
const address = '0x0243ad70d1E3F04fE8827eCAA5348a0b4Cb4b2BC';
const abi = [{"constant":true,"inputs":[],"name":"getHash","outputs":[{"name":"x","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"sendHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
export default new web3.eth.Contract(abi,address);
