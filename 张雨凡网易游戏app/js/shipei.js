(function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 15 + 'px';
    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth <= 1000) {
            document.documentElement.style.fontSize = 1000 / 15 + 'px';
        } else {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 15 +
                'px';
        }
    });
})();