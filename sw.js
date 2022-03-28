
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');


workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst({
    cacheName: 'google-fonts'
  })
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );
workbox.precaching.precacheAndRoute([{"revision":"74995e46edfda181efbcef3122f83bab","url":"404-style.css"},{"revision":"2f42231641ae30d5a781e7fea85507ec","url":"404.html"},{"revision":"4dc8c80d9819d050ad9d0deba12eaae3","url":"about-mobile.html"},{"revision":"2718d5f3173619bd00886f0489865dfa","url":"about-style.css"},{"revision":"88d6038690f18c9234c34eef909eab85","url":"about.html"},{"revision":"37cb38fc354e342b4cd7bee1b12b710c","url":"advanced-mobile.html"},{"revision":"f75b66a5d90ac6a3109659c486aaca19","url":"advanced.html"},{"revision":"3f62d5b5a591985d86d1c82e7b40bc5f","url":"background1.svg"},{"revision":"25d2867ef65660a52515c82371de8247","url":"background2.jpg"},{"revision":"c30f1492a3a988a1fafd0c8ccc719ab0","url":"contact-mobile.html"},{"revision":"9c77ba03929ce92566aab1538b33ae48","url":"contact.html"},{"revision":"d5a4e96b54a13db7c549fb0af7c4fa39","url":"discord-ico.png"},{"revision":"97f08122fcaa9a4d752865e4a73a3632","url":"donation-mobile.html"},{"revision":"1536d9b2c9fc1fb4ae362c7a29646c6a","url":"donation-style.css"},{"revision":"8cba7b65ab5796a80aad81ad3fdb423a","url":"donation.html"},{"revision":"2fee659fbc3ce4d45f01ce1bfc3079b9","url":"downl.png"},{"revision":"ad70cb63a1a118a1f6d0037fb644f30b","url":"example.html"},{"revision":"7c786b515fc276f95afcc5da7ad86ddf","url":"icons/120x120.png"},{"revision":"f0f8124bcd07899375d2c224e7bec6a2","url":"icons/128x128.png"},{"revision":"d578fcbfbd5fdd1f6ba9e75780795d75","url":"icons/144x144.png"},{"revision":"638e73bad5eedcaf8837ce72e50387ba","url":"icons/152x152.png"},{"revision":"1e2bd640cd4c60e4b3b161c423711147","url":"icons/180x180.png"},{"revision":"e9482728aad8c1bbd984458239143e31","url":"icons/192x192.png"},{"revision":"0ed49e0911b5dfc6c3b638072950823b","url":"icons/384x384.png"},{"revision":"a9b49caf00ce989ba0e130ec6cea0289","url":"icons/512x512.png"},{"revision":"d7373d3da794fb1259c0b65619a6b880","url":"icons/72x72.png"},{"revision":"2d2cae1206542b4c115092364815f4e8","url":"icons/96x96.png"},{"revision":"8d359e3ceb0e9f2844cb83dabb7e6223","url":"index-mobile.html"},{"revision":"43aac80f6a1ccddaa4cfd35bf59f57c4","url":"index.html"},{"revision":"6ad21fa47c3c54936926b6554f3f5b88","url":"lite.html"},{"revision":"f19421383ca71d689759ed9e1d84a08e","url":"logo.jpg"},{"revision":"efe0f547f61d850b04ea5c1a72a5faa6","url":"logo.png"},{"revision":"c4a7ed48193e843a7b3fdb5a525222b9","url":"manifest.json"},{"revision":"50409b734c9b064c6833d52fb17c3183","url":"Mobile/about-style.css"},{"revision":"b0de3242996520bd5da42ae112e5888a","url":"Mobile/background1.jpg"},{"revision":"21ed2cfab26357d91137a188ecf78510","url":"Mobile/background1.svg"},{"revision":"eb77572a03cfb8c0bf052b7c56e93be7","url":"Mobile/background2.jpg"},{"revision":"968865daf4c24c4263dfb8e11ce51dc0","url":"Mobile/css/all.min.css"},{"revision":"e404c373ba870c92fc1618386545b0cd","url":"Mobile/css/gfonts.css"},{"revision":"f1b5bd1cf4b20092c807ded7c4e02df7","url":"Mobile/donation-style.css"},{"revision":"2fee659fbc3ce4d45f01ce1bfc3079b9","url":"Mobile/downl.png"},{"revision":"0da9cc4433cac3dd05923e154b747b62","url":"Mobile/fontawesome.css"},{"revision":"efe0f547f61d850b04ea5c1a72a5faa6","url":"Mobile/logo.png"},{"revision":"c62b83cd98909be8cea04794e4df2db7","url":"Mobile/script.js"},{"revision":"77618ea81869bcfcdc010458e4ceec60","url":"Mobile/script2.js"},{"revision":"c74f69070af47af7e82f2626dc977823","url":"Mobile/style.css"},{"revision":"e611acf6d5bb68ecb661445bdfd9f596","url":"Mobile/style2.css"},{"revision":"2421b210869f965b3662290d4da4e68c","url":"Mobile/support-style.css"},{"revision":"285a9d2a28886ad64c4e45cbd733cf7c","url":"Mobile/webfonts/fa-regular-400.ttf"},{"revision":"896e20e26ad07dc63c9526ed814117e9","url":"Mobile/webfonts/fa-solid-900.ttf"},{"revision":"de8322609b4a95289ff2effb9affb7a5","url":"package-lock.json"},{"revision":"1f3c8f0a009593fed7f0a8c4724f4c38","url":"package.json"},{"revision":"764ba67b340d41a948a553e9f2e76ccb","url":"readme.js"},{"revision":"7a87f018dddaee903ffa8eabbe62684c","url":"README.md"},{"revision":"7f7861d51c6d974f02a24a29abc46014","url":"screenshots/screenshot_1.jpeg"},{"revision":"0f1325691fd6b68c55ba70d6fb158973","url":"screenshots/screenshot_1.jpg"},{"revision":"875c099ef02ecbc8c977884e1128b345","url":"screenshots/screenshot_1.webp"},{"revision":"c5d53216c9982529d3d9fe1fc845925a","url":"screenshots/screenshot_2.jpeg"},{"revision":"2f1bc1b8a6bf91aaac442930479836fe","url":"screenshots/screenshot_2.jpg"},{"revision":"b6d314ea227d24e9209d7198efb9035a","url":"screenshots/screenshot_2.webp"},{"revision":"ad0f87ec118d03ed0cfc4ff70d863a50","url":"script.js"},{"revision":"3c4b6b3c67584b6f0c946a9e7dfae02e","url":"script2.js"},{"revision":"2ff432c9beed749f6c3e51db4229c2d5","url":"SECURITY.md"},{"revision":"3f1f5b8da6073d3e7776fe1dffa60f53","url":"splashscreens/ipad_splash.png"},{"revision":"633dd1baee8c9d67d6cd60aee4a35dfa","url":"splashscreens/ipadpro1_splash.png"},{"revision":"8b59cedb132c05a49c85a6f8f34305cb","url":"splashscreens/ipadpro2_splash.png"},{"revision":"e90a3ca15a8433bc0790cedd9e8aaac8","url":"splashscreens/ipadpro3_splash.png"},{"revision":"f51f9377b27c426a3cd658c0f3d2d375","url":"splashscreens/iphone5_splash.png"},{"revision":"236ebb825c9490f39334828728b1bd18","url":"splashscreens/iphone6_splash.png"},{"revision":"b4dbbd6f75d8987b84fe721c6a225002","url":"splashscreens/iphoneplus_splash.png"},{"revision":"acf828f5a2dad7e05455db31f3fb974c","url":"splashscreens/iphonex_splash.png"},{"revision":"325c1ba61656f7df91ea3c8e41f8b3fe","url":"splashscreens/iphonexr_splash.png"},{"revision":"978fef0ca06a3752b040b9adc4288ed0","url":"splashscreens/iphonexsmax_splash.png"},{"revision":"95216e3181e28b8ac92bffbec0879ac5","url":"style.css"},{"revision":"ec5d3bf63a2b8fb5e7bb85bd9090958b","url":"style2.css"},{"revision":"46515bbed6917b7d5b361ada4363365b","url":"success.html"},{"revision":"fb43c858aab2dcd96636eeb5df45c565","url":"support-style.css"},{"revision":"b5d763d418efda6a852ce4804ff8353e","url":"term-ico.svg"},{"revision":"1e63b5c5eec80a175ce771e109e01fea","url":"workbox-8a4fdd19.js"},{"revision":"4ce58ce7b64169d562a5f6c810312862","url":"workbox-config.js"}]);
