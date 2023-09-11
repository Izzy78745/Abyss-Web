/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/class/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/school/uv.handler.js',
    client: '/school/uv.client.js',
    bundle: '/school/uv.bundle.js',
    config: '/school/uv.config.js',
    sw: '/school/uv.sw.js',
};
