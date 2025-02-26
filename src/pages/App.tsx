import {FC} from "react";
import {Main} from "../components/main/Main.tsx";
import {LayoutProvider} from "../context/LayoutProvider.tsx";

export const App: FC = () => {
    return (
        <>
            <LayoutProvider>
                <Main/>
                <div className={`w-full h-96 bg-white`}></div>
            </LayoutProvider>
        </>
    )
}