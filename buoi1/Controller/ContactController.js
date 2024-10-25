import express from "express"
const getContact = (req, res) => {
    return res.render("home", { data: { title: 'Page Contact',
        page:'contact', 
        name: 'Nguyễn Khắc Đăng', 
        email: 'nkdang2101384@Student.ctuet.edu.vn',
        phonenumber: '0123456789' } })
}
export default getContact