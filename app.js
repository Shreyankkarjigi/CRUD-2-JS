//get express

const e = require('express')
const express=require('express')
const mysql=require('mysql2')
const app=express()


//mysql db

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'orm_mysql'
})

//connect
db.connect((err)=>{
  if(err){
      console.log('error')
  }

  else{
      console.log('connected')
}
})

//create database

app.get('/createdb',(req,res)=>{
    //write sql

    let sql='CREATE DATABASE orm_mysql'
    db.query(sql,(err,result)=>{
        if(err){
            console.log('error') 
        }
        else{
            res.send(result)
        }
    })
})

//create table

app.get('/createtable',(req,res)=>{
    let sql='CREATE TABLE user (id int AUTO_INCREMENT,Name varchar(20),email varchar(20),PRIMARY KEY(id))'
    db.query(sql,(err,result)=>{
        if(err){
            console.log('error',err)
        }
        else{
            res.send('result')
        }
    })
})

//Insert data

app.get("/insertdata",(req,res)=>{
    let post={name:"shreyank",email:"a@gmail.com"}
    let sql='INSERT INTO user SET ?'
    db.query(sql,post,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(post)
        }
    })
})

//get data

app.get('/getdata',(req,res)=>{

    let sql='SELECT * FROM user'
    db.query(sql,(err,result)=>{
        if(err){
            console.log("Error")
        }
        else{
            res.send(result)
        }
    })
})

//update name

app.get('/updateitem',(req,res)=>{

    let sql='UPDATE user SET name="SHREYANK" where id=1'

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)

        }
        else{
            res.send(result)
        }
    })
})


//delete 

app.get('/deleteitem',(req,res)=>{

    let sql='DELETE from user WHERE name="SHREYANK"'
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)

        }
        else{
            res.send(result)
        }
    })

    
})








//listen
app.listen(3000,()=>{
    console.log('listening')
})