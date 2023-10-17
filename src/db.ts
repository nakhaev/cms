import mongoose from 'mongoose';
import config from 'config';

const connect = async() => {
    try {
        await mongoose.connect(config.get('connectionString'), {dbName: config.get('dbName')});
        console.log('>>> DB is connected');
    } catch (error) {
        throw new Error('DB connection error: ' + error);
    }
}

export default connect;