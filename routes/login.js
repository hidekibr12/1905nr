module.exports = (app)=>{
    //abrir o arquivo 
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
}