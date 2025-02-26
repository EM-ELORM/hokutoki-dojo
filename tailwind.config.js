/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'], lemon: ['Lemon', 'sans-serif'],
            }
        },
    }, plugins: ["prettier-plugin-tailwindcss"],
}

