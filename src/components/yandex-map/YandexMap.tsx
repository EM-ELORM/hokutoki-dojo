import './index.css'
import './index.adaptive.css'
import {FC, useEffect, useState} from "react";

declare global {
    interface Window {
        ymaps: any;
    }
}

const ListAddress = {
    addressOne: [55.788333516521526, 49.223648555225374],
    addressTwo: [55.74700707935608, 49.22547378587896]
};

export const YandexMap: FC = () => {
    const [currentAddress, setCurrentAddress] = useState(ListAddress.addressOne);
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        const loadMap = () => {
            window.ymaps.ready(() => {
                const newMap = new window.ymaps.Map(`map`, {
                    center: currentAddress,
                    zoom: 19,
                    controls: []
                });

                newMap.options.set(`yandexMapDisablePoiInteractivity`, true);
                newMap.setType(`yandex#map`);

                newMap.geoObjects.add(new window.ymaps.Placemark(ListAddress.addressOne));
                newMap.geoObjects.add(new window.ymaps.Placemark(ListAddress.addressTwo));

                const routeButton = new window.ymaps.control.RouteButton({
                    options: {size: `large`, float: `left`}
                });
                newMap.controls.add(routeButton);

                setMap(newMap);
            });
        };

        if (!window.ymaps) {
            const script = document.createElement("script");
            script.src = `${import.meta.env.VITE_MAP_URL}?apikey=${import.meta.env.VITE_YANDEX_MAPS_API_KEY}&lang=ru_RU`;
            script.type = "text/javascript";
            script.onload = loadMap;
            document.body.appendChild(script);
        } else {
            loadMap();
        }
    }, []);

    useEffect(() => {
        if (map) {
            map.setCenter(currentAddress);
        }
    }, [currentAddress, map]);

    return (
        <>
            <div id={`map`} className={`map`}></div>
            <div className={`pos-btn-map`}>
                <button className={`btn-red`} onClick={() => setCurrentAddress(ListAddress.addressOne)}>
                    ул. Академика Глушко, 47Б
                </button>
                <button className={`btn-red`} onClick={() => setCurrentAddress(ListAddress.addressTwo)}>
                    ул. Юлиуса Фучика, 48А
                </button>
            </div>
        </>
    );
};