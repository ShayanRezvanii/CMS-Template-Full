const Models = require('../models/blogModels');


const getContact = async (req ,res ,next) => {
    const contactInfo = await Models.ContactModels.find();
    res.json({contactInfo})
}



const postContact = async (req ,res ,next) => {
    const {
        title ,
        address , 
        phone ,
        telegram ,
        instagram ,
        whatsapp ,
        facebook
    } = req.body
    const contactInfo = await new Models.ContactModels({
        title ,
        address , 
        phone ,
        telegram ,
        instagram ,
        whatsapp ,
        facebook
    })
   contactInfo.save()
   res.json({contactInfo})

}


const deleteContact = async (req ,res ,next) => {
    const contactId = req.params.pid;
    const contact = await Models.ContactModels.findById(contactId);
    await contact.remove()
    res.json("Deleted Info's ...")
}

const updateContact = async (req ,res ,next) => {
    const {
        title ,
        address , 
        phone ,
        telegram ,
        instagram ,
        whatsapp ,
        facebook
    } = req.body;

    const newContact = await Models.ContactModels.findByIdAndUpdate(
        req.params.pid , {$set : {
        title ,
        address , 
        phone ,
        telegram ,
        instagram ,
        whatsapp ,
        facebook
        }}
    )
    res.status(200).json({newContact})
}





exports.getContact = getContact
exports.postContact = postContact
exports.deleteContact = deleteContact
exports.updateContact = updateContact