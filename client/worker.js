console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Raul Gonzalez',
        tag: "3",
        icon: 'https://www.blinn.edu/_files/images/ico/favicon.ico'
    });
});