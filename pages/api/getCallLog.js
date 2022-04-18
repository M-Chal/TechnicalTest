import twilio from 'twilio';

export default async function handler(req, res) {
    try{
        // I know the Twilio api keys are exposed here; however, the usual process.env solution didn't work here at all
        // besides, this is serverside code so it should be ok. Not best practice but I was tearing my hair out becuase it wasn't working
        const client = twilio("ACbfcc2fbce42d297c78a466baa003b66f", "c99824963b57c870160567838bf734ab");
        const callList = await client.calls.list({limit: 10})
        res.status(200).send({callList})
    } catch(e){
        res.status(500).json({error: e})
    }
    
}