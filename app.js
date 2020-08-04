const express=require("express");
const indexRouter=require('./routes/index')
const chooseRouter=require('./routes/choose');
const path=require('path');
const logger=require('morgan');//로그를 기록해주기 위한 것
const app=express();
app.use(logger('dev'));
app.set('views',path.join(__dirname, 'views'));//views라고 하면 '현재 디렉토리+views'이다. 
app.set('view engine','pug');//view engine은 pug이다.
app.use(express.static(path.join(__dirname,'public')));
app.set('port',process.env.PORT || 5000);//port는 8001이다.
app.use('/',indexRouter);
app.use('/choose',chooseRouter);

app.use((req,res,next)=>{
    const err=new Error('Not Found');
    err.status=404;
    next(err);
});
app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    res.locals.errors=req.app.get('env')==='development' ? err: {};
    res.status(err.status ||500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'빈 포트에서 대기 중');
});