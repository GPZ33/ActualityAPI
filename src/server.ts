import express from 'express';
import routes from './routes/index';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api', routes);

mongoose.connect("mongodb+srv://gpz:lDvjwt5KCxYEgwUx@covid.nsdpqss.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("mongodb connecté coquinou")
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(()=> {
    console.log("mongodb pas connecté")
})