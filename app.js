import * as dotenv from 'dotenv'
import {OpenAI} from 'openai'

dotenv.config()

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

// create new assistant
// const assistant = await openai.beta.assistants.create({
// 	name: 'Math Tutor',
// 	instructions: 'You are a personal math tutor. Write and run code to answer math questions.',
// 	tools: [{type: 'code_interpreter'}],
// 	model: 'gpt-4-1106-preview',
// })

// retrieve assistant
const assistant = await openai.beta.assistants.retrieve('asst_iWiKx4cukeknrHWQTZpir66m')
// console.log(`app.js. assistant: `, assistant)

// threads
// create new thread
// const thread = await openai.beta.threads.create()
// console.log(`app.js. thread: `, thread)

// // create new message. cf) https://platform.openai.com/docs/api-reference/messages/createMessage
// const message = await openai.beta.threads.messages.create(thread.id, {
// 	role: 'user',
// 	content: '500 * 500 은?',
// })
// console.log(`app.js. message: `, message)

// // run assistant
// const run = await openai.beta.threads.runs.create(thread.id, {
// 	assistant_id: assistant.id,
// 	// optional. 실행시의 instruction. use to provide additional context to the assistant.
// 	instructions: "Address the user as '호갱님' and provide an answer.",
// })
// console.log(`app.js. run: `, run)

// // retrieve run
// const run = await openai.beta.threads.runs.retrieve('thread_bjohyEAhq2QBrwZ5xMjbvtMX', 'run_92ADVkdJd5RSFK7G5ErodKJo')
// console.log(`app.js. run: `, run)

// list messages. cf) https://platform.openai.com/docs/api-reference/messages/listMessages
// const messages = await openai.beta.threads.messages.list(thread.id)
const messages = await openai.beta.threads.messages.list('thread_bjohyEAhq2QBrwZ5xMjbvtMX')
// console.log(`app.js. messages: `, messages)
messages.data.forEach((message) => {
	console.log(`app.js. message.content: `, message.content)
})

// const logs = await openai.beta.threads.runs.steps.list('thread_bjohyEAhq2QBrwZ5xMjbvtMX', 'run_92ADVkdJd5RSFK7G5ErodKJo')
// logs.data.forEach((log) => {
// 	console.log(`app.js. log.step_details: `, log.step_details)
// })
