'use strict';

const httpProxy = require('http-proxy');
const config = {
    'dev': 'http://localhost:7308',
    'product': 'http://192.168.140.155:8080'
};
const target = config['dev'];
httpProxy.createProxyServer({target}).listen(6009);
console.log(`HRONE proxy server: http://localhost:7308 => ${target}`);
