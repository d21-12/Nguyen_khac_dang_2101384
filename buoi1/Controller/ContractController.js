
import express from "express"
const getContact = (req, res) => {
    return res.render("home", { data: { title: 'Page Contact',
        page:'contact', 
        name: 'Nguyễn Khắc Đăng', 
        email: 'nkdang2101384@gmail.com',
        phonenumber: '1234567890' } })
}
export default getContactd
