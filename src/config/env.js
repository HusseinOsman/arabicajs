const Env = {
    "env": process.env.NODE_ENV || 'production',
    "port": process.env.PORT || '3000',
    "mongoHost": process.env.DB_HOST || '',
    "mongoPort": process.env.DB_PORT || '',
    "mongoUser": process.env.DB_USER || '',
    "mongoPass": process.env.DB_PASSWORD || '',
    "mongoName": process.env.DB_DATABASE || '',
    "jwtSecret": process.env.JWT_SECRET || '',
    "jwtExpiresIn": process.env.JWT_EXPIRES_IN || '',
    "jwtIssuer": process.env.JWT_ISSUER || '',
    "sslCert": process.env.CERT_PATH || '',
    "sslKey": process.env.KEY_PATH || '',
    "EMAIL_USER":process.env.EMAIL_USER || null,
    "EMAIL_PASS":process.env.EMAIL_PASS || null,
    "EMAIL_HOST":process.env.EMAIL_HOST || null,
    "EMAIL_PORT":process.env.EMAIL_PORT || null,
    "EMAIL_SECURE":process.env.EMAIL_SECURE || null,
};

export default Env;