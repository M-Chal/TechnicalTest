import {db} from '../../firebase/firebase'
import { doc, updateDoc } from "firebase/firestore/lite";

export default async function handler(req, res){
    const docID = req.body;
    try{
        // This exists purely to change the read flag on the message
        // A similar system could be used for emails if they were handled inhouse
        const docRef = doc(db, "formData", docID)
        const res = await updateDoc(docRef, {read: true})
        return res.status(200).json({
            data: true
        })
    }catch(e){
        return res.status(500).send({message: e.message ?? "Something went wrong"})
    }
}