const CACHE_NAME = 'bass-app-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-512.png',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap'
];

// 설치: 파일들을 로컬 캐시에 저장
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// 실행: 오프라인 시 저장된 파일 불러오기
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});