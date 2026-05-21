// api/supabase-config.js
// Endpoint API de Vercel que devuelve la configuración de Supabase

export default function handler(req, res) {
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // Devolver las credenciales desde las variables de entorno
    res.status(200).json({
        url: process.env.SUPABASE_URL || '',
        key: process.env.SUPABASE_ANON_KEY || ''
    });
}
