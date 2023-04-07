import express from "express";
import cors from "cors";
import { Client, Repository } from "redis-om";
import { scoreSchema } from './model/score.js'
import dotnev from "dotenv"

dotnev.config();

const app = express();
app.use(express.json())
app.use(cors())


const client = new Client();

await client.open(process.env.REDIS_DB);

const scoreRepository = client.fetchRepository(scoreSchema)


// await scoreRepository.dropIndex();
await scoreRepository.createIndex()

app.get('/', async (req, res) => {

    res.send("hhh")
})


app.get('/records', async (req, res) => {


    try {

        // console.log('ggg');


        res.send(await scoreRepository.search().return.all());

    } catch (error) {

        console.log('error records');
        res.send(error)

    }



})



app.post('/username', async (req, res) => {

    // console.log('ggg');

    const score = scoreRepository.createEntity();



    score.username = req.body.username;
    score.score = 0;
    score.id = await scoreRepository.save(score);

    // console.log(score);

    res.send(score);
})

app.put('/score/:id', async (req, res) => {

    // console.log("ttt");

    const score = await scoreRepository.fetch(req.params.id);

    console.log(score.score);
    score.username = req.body.username
    score.score = score.score + 1;
    await scoreRepository.save(score);

    res.send(score);

})


app.listen(8000)