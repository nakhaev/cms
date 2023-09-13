import mongoose from 'mongoose';

const connect = async() => {
    try {
        await mongoose.connect('mongodb://root:root@localhost:27017', {dbName: 'cm_v1'});
        // await mongoose.connect('mongodb://localhost:27017/cm_v1');
        console.log('>>> DB is connected');
    } catch (error) {
        throw new Error('DB connection error: ' + error);
    }
}

export default connect;