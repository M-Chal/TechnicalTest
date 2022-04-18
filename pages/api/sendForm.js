import {db} from '../../firebase/firebase'
import { collection, addDoc } from "firebase/firestore/lite";

export default async function handler(req, res){
    if(req.method !== "POST"){
        return res.status(405).send({message:"Only POST requests are Allowed"})
    }
    const body = JSON.parse(req.body)
    try{
        const docRef = await addDoc(collection(db, "formData"), {
            fName: body.name,
            email: body.email,
            toc: body.toc,
            location: body.location,
            comments: body.comments,
            read: false
        });
        return res.status(200).json({
            data: docRef
        })
    }catch(e){
        return res.status(500).send({message: e.message ?? "Something went wrong"})
    }
}