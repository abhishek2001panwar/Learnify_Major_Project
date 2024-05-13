import { Contact } from "../models/contact.model.js";

//controlller to contact us
export const getContacts = async (req, res) => {
  try {
    const { email, message } = req.body;
    const newContact = new Contact({
      email,
      message,
    });
    await newContact.save();
    res.status(201).json({
      message: "Contact created successfully",
      newContact: newContact,
    });
  } catch (error) {
    console.log(error.message, "error while contacting ");
    throw new Error(error.message);
  }
};
export const getAllContacts = async (req,res) => {
 try {
  

   const contacts = await Contact.find({});
   res.status(200).json({
     message: "contacts fetched successfully",
     contacts: contacts,
   });
 } catch (error) {
  console.log(error.message, "error while getting contact ")
  throw new Error(error.message);
  
 }
}
export const deleteContact = async(req,res)=>{
  try {
    const {id}= req.params;
    const contact = await Contact.findByIdAndDelete(id);
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}