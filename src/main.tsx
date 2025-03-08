import {createRoot} from 'react-dom/client'
import './styles/index.css'
import {App} from "./pages/App.tsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ToastContainer
            position={`bottom-right`}
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            limit={3}
        />
    </>
)
