let inFrame;

try {
    inFrame = window !== top;
} catch (e) {
    inFrame = true;
};

if (!inFrame && !navigator.userAgent.includes('Firefox')) {
    const popup = open('about:blank', '_blank')
    if (!popup || popup.closed) alert('Please allow popups and redirects.');
    else {
        popup.document.write(`
            <iframe src="${location.href}" style="position:fixed;top:0;left:0;width:100%;height:100%;outline:none;border:none;"></iframe>
            <title>Home | Schoology</title>
            <link rel="icon" href="${localStorage.getItem('icon') || 'https://ssl.gstatic.com/assets/media/branding/product/1x/drive_2020q4_32dp.png'}">
        `);
    
        location.replace(localStorage.getItem('panicLink') || 'https://classroom.google.com');
    };
};