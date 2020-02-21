const ipfsApi = require('ipfs-http-client');
const ipfs = new ipfsApi({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs;