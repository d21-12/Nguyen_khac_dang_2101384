
import express from 'express';

const getContactPage = (req, res) => {
    return res.render("contact", { 
        data: { 
            title: 'Contact Us', 
            page: "contact", 
            content: 'Contract' 
        } 
    });
};

export default getContactPage;

