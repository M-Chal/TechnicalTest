# Getting Started
To run the code please clone the repo. Then run npm install
Followed by npm run dev to run the dev server

## My idea for this technical test

So I wanted to take the spec and take it to another level by not only designing and creating the backend 
But going ahead and designing the full app along with front end and back end.

I wanted to showcase my skills by building a barebones MVP in under 4 days
I focused on the core features and expanded on a few where I saw fit

I hope this is a good show of my skills and ability, I hope you enjoy reading through and having a look at what I've created.

## Starting off - Design

I wanted to start with designing what I was going to build.
This helps me establish the core features and gives me a direction I need to be working towards.

I used Figma for my designs, I'm by no means a designer but I did my best to create a basic layout to give me an idea of how I'll develop the app.

The file can be accessed from: https://www.figma.com/file/GgnYxfNMUtaZ3gkEn89ic3/Untitled?node-id=0%3A1

## Tech I used for the final app

So I'll just do a run down of all the tech I used and why I used it :)

### NextJS
For obvious reasons I used Next, great for building backend features using API routes, SSR + more
### Firebase
I used this as my database of choice, I used it because I'm most familiar with it. I used it for storing the form submissions and then reading them on the other screen.
This is interchangable with stuff like AWS Amplify, Supabase etc. It's just a case of preference
### Nylas
Nylas is an email API. Docs can be found here: https://developer.nylas.com/docs/connectivity/email/using-email-api/#read-content-from-user-email-inboxes

I decided to go with Nylas because it was an easy of the shelf solution for reading emails with an easy api endpoint. 
If I had more time I would've created this service from scratch using node and express but it would've added considerable development time.
This solution was exactly what I needed to read email data :)
### ReactHtmlParser
So this one goes hand in hand with Nylas. Nylas gives me the email body in pure unformatted HTML and ReactHTMLParser parses the HTML into good looking email format. It's really performant and super easy to implement: just one line!
### Twilio API 
So I used Twilio for recieving the call data to the Twilio phone number. Mainly call logs with incoming and outgoing calls and timestamps but there are so many features that can be implemented from using the api. Lots of potential.
Docs can be found here: https://www.twilio.com/docs/voice/tutorials/how-to-retrieve-call-logs-node-js
### React Hot Toast
This is a really simple library I added to add a confirmation message once the user submitted the form.

## Things I would've done differently for next time

Number one thing I would do next time would be to use Typescript, I regret not doing it this time round but I was halfway through once I realised my mistake. 
It would've taken me a long time to refactor into Typescript so I just got on using regular JS.

Secondly, if this was the real app I would've liked to distance myself from using Nylas to read Email data. Instead opting for using an in house solution. But it was just so simple to use It probably saved days of development time and that's really what matters when delivering an MVP

Used a css library like Tailwind, MUI etc and possibly added SASS. On this project I used vanilla CSS and it added unnecessary time to my development time. Using a css library would've sped up development and also made the app look nicer. 

## Features I'd add given more time/ after the MVP stage

Pagination - I would've added Pagination for the email, messages and phone logs. This would greatly expand the usability of the app by being able to see all emails, phone logs and messages

Email Features - I mainly mean: reply to emails directly from the app, forward the emails, pin them, delete them etc. Most of these features could be implemented using the Nylas API but again I would've liked to have created this in house and have those features.

Twilio Features - Twilio has a lot of extra services that could be implemented such as texting from the app, messaging, calling directly from the app etc.
There is a lot of potential to use Twilio in all sorts of communication. Really powerful for outbound calls, inbound calls and text messaging.


