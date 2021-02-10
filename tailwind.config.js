module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                principal: '#01A8FF',
                secundario: '#575756',
                gris: '#21191508',
                cajaBiometrico: '#211915CC',
                spamColor: '#8A8A8A',
            },
            fontFamily: {
                arial: 'Arial',
                balto: 'balto',
                geog: 'geogtq',
                geogItalic: 'geog',
                lato: 'lato',
                produkt: 'produkt',
            },
            backgroundImage: {
                bgCian: 'url(https://i.ibb.co/cX7S9d4/bgCian.jpg)',
            },
            backgroundOpacity: {
                7: '0.07',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
