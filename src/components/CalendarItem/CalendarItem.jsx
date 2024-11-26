export const CalendarItem = ({initialDay,waterNorma,waterAmount}) => {
    const rate = Math.round(waterAmount*100/waterNorma);
    return (
        
       
        <button type="button">
        <span>{initialDay}</span>
        <span>{rate}%</span>
        </button>
        
    );
}