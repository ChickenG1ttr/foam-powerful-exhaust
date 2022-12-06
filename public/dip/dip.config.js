if (!self.__DIP) self.__DIP={};

self.__DIP.config = {
  prefix: '/service/dip/',
  encoding: 'xor',
  ws: true,
  cookies: true,
  worker: true,
  bare: {
    version: 2,
    path: '/bare/',
  },
  tab: {
    title: 'Dynamic-Interception-Proxy',
    icon: 'https://cdn.glitch.global/08b4ac66-1815-482b-a7b8-ed25560d4aa1/dip.jpeg?v=1665611076534',
    ua: 'Mozilla/5.0 (X11; CrOS x86_64 14388.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.107 Safari/537.36'
  }
};