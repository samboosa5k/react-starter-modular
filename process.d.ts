declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PATH: string,
            NODE_ENV: 'development' | 'production',
        }
    }
}

export {};
