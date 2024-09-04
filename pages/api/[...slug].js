import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
});

export default function handler(req, res) {
    proxy(req, res, (result) => {
        if (result instanceof Error) {
            throw result;
        }
    });
}
