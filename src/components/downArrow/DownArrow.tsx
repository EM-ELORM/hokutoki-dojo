interface RedArrowProps {
    size?: number;
}

export const DownArrow = ({size = 130}: RedArrowProps) => {
    return (
        <div
            style={{height: size}}
            className={`w-[3px] bg-[#A52921] mx-auto relative after:content-[''] after:absolute after:bottom-[1px] after:left-1/2 after:w-[1rem] after:h-[1rem] after:border-b-[3px] after:border-r-[3px] after:border-[#A52921] after:rotate-45 after:-translate-x-[47%]`}
        />
    );
};