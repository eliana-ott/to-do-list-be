import app from './app.js';
import connectToDatabase from './config/db.js';

const port = app.get('port');

app.listen(port, async () => {
    await connectToDatabase();
    console.info('funcionando en el puerto', port);
});
