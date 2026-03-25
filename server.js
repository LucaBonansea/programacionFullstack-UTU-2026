const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Configuración de GitHub OAuth
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/auth/github/callback';

// Middleware
app.use(express.static(path.join(__dirname, 'docs')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Iniciar OAuth con GitHub
app.get('/auth/github', (req, res) => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo,user:email&redirect_uri=${REDIRECT_URI}`;
    res.redirect(authUrl);
});

// Callback de GitHub
app.get('/auth/github/callback', async (req, res) => {
    const { code } = req.query;
    if (!code) {
        return res.status(400).send('Código de autorización faltante');
    }

    try {
        // Intercambiar código por token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code: code
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const accessToken = tokenResponse.data.access_token;

        if (!accessToken) {
            return res.status(400).send('Error obteniendo token de acceso');
        }

        // Obtener email del usuario
        const userResponse = await axios.get('https://api.github.com/user/emails', {
            headers: {
                'Authorization': `token ${accessToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const primaryEmail = userResponse.data.find(email => email.primary).email;

        // Verificar si el email está bloqueado
        if (primaryEmail === 'liberatorsouls85@gmail.com') {
            return res.send('<h1>Acceso denegado para esta cuenta.</h1>');
        }

        // Redirigir a la página principal con el token
        res.redirect(`/?token=${accessToken}&email=${encodeURIComponent(primaryEmail)}`);
    } catch (error) {
        console.error('Error en OAuth:', error);
        res.status(500).send('Error en la autenticación');
    }
});

// Cerrar sesión
app.get('/logout', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});