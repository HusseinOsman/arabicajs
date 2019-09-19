const app = {
    "env": process.env.NODE_ENV || 'production',
    "port": process.env.PORT || '3000',
    "mongoHost": process.env.DB_HOST || '',
    "mongoPort": process.env.DB_PORT || '',
    "mongoUser": process.env.DB_USER || '',
    "mongoPass": process.env.DB_PASSWORD || '',
    "mongoName": process.env.DB_DATABASE || '',
};

export default app;