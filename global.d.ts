namespace NodeJS {
    interface ProcessEnv {
        // I forced to add this one
        NODE_ENV: 'development' | 'production' | 'test';
    }
}
