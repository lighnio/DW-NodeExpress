import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/archive', (req, res) => {
    res.send('<h1>Archivos</h1>');
})

router.get('/events', (req, res) => {
    res.send('<h1>Eventos</h1>');
})

router.get('/contact', (req, res) => {
    res.send('<h1>Contactos</h1>')
})

export default router;