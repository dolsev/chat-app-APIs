import {FC} from "react";
import {ITIME} from "./interface";
import "./time.scss";

export const TIME: FC<ITIME> = (props: ITIME) => {
    const { My, time, format } = props;


    function formatDate(timestamp:any) {
            const date = new Date(timestamp * 1000);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            return `${day}.${month}.${year}`;
    }
    function formatHours (timestamp:any){
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    const formattedDate = formatDate(time)
    const formattedHours = formatHours(time)

    const className = `component-time`;

    return (
        <div className={className}>
            {format==='date'?formattedDate:formattedHours}
            {My?<img alt='my' src='Sent.png'/>:null}
        </div>
    )
}