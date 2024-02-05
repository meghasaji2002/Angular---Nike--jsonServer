const library=require('json-server');
const server=library.create();
const router=library.router('db.json');
const middleware=library.defaults();
const cors = require('cors');

server.use(cors());
server.use(router);
server.use(middleware);

const port = 3002 || process.env.PORT 
server.listen(port,()=>{
    console.log(`server running successfully at port ${port}`);
})

