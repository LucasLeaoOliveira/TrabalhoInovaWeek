import express from 'express';
import AlunoRouter from './routes/AlunoRoutes';
import MainRouter from './routes/MainRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(AlunoRouter);
app.use(MainRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
