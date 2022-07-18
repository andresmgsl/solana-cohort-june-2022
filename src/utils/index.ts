import { Bounty } from 'types/bounty';
import { format } from 'date-fns';

// Concatenates classes into a single className string
const cn = (...args: string[]) => args.join(' ');

/**
 * Returns `true` if the `name` attribute of the provided Bounty matches the search query.
 *
 * @param bounty Bounty to filter.
 * @param rawQuery Query before unformatting.
 */
const filterBounties = ({ name }: Bounty, rawQuery: string) => {
    const unformat = (str: string) => str.toLowerCase();
    const query = unformat(rawQuery);

    return unformat(name).includes(query);
};

const formatDate = (date: string) => format(new Date(date), 'dd MMM');

/**
 * Formats number as USD currency string.
 *
 * @param number Number to format.
 */
const numberToUsd = (number: number) =>
    Intl.NumberFormat('en-US', {
        currency: 'USD',
        minimumFractionDigits: 0,
        style: 'currency',
    }).format(number);

export { cn, filterBounties, numberToUsd };
