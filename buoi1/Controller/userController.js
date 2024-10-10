import express from "express";
import userModels from "../model/userModels";
const getAllUser = async (req, res) =>{
    let userList = await  userModel.getAllUser() 
    res.render('home', {data:{title:'List User'}})
}