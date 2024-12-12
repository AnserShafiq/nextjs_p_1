import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <time className="text-red-300" dateTime={dateString}>
            {format(date, 'MMM dd, yyyy').toUpperCase()}
        </time>
    );
}
