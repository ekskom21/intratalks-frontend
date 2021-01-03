import { EventTime } from '../generated/graphql';
import { addHours, fromUnixTime, subHours } from 'date-fns';

export const BASE_TIME = process.env.NODE_ENV === 'development' ? subHours(new Date(), 4) : fromUnixTime(1613642400);

export const translateTime = (time: EventTime): Date => {
    return {
        [EventTime.Breakfast]: BASE_TIME,
        [EventTime.Lunch]: addHours(BASE_TIME, 4),
        [EventTime.Dinner]: addHours(BASE_TIME, 9),
    }[time];
};

export const timetable: Record<EventTime, { start: Date; end: Date }> = {
    BREAKFAST: {
        start: translateTime(EventTime.Breakfast),
        end: addHours(translateTime(EventTime.Breakfast), 2),
    },
    LUNCH: {
        start: translateTime(EventTime.Lunch),
        end: addHours(translateTime(EventTime.Lunch), 3),
    },
    DINNER: {
        start: translateTime(EventTime.Dinner),
        end: addHours(translateTime(EventTime.Dinner), 5),
    },
};
