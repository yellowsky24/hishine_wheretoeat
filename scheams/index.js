const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect('mongodb+srv://yellowsky24:thswjdals92@cluster0.zaix6.mongodb.net/whattoeat?authSource=admin&replicaSet=atlas-blgyzr-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
      dbName: 'whattoeat',
    }, (error) => {
      if (error) {
        console.log('몽고디비 연결 에러', error);
      } else {
        console.log('몽고디비 연결 성공');
      }
    });
  };
  connect();
  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
  });
  require('./store')
};