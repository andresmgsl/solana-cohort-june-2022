import { Bounty } from 'types/bounty';

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

/**
 * Formats number as currency string.
 *
 * @param number Number to format.
 */
const numberToCurrencyString = (number: number) =>
    number.toLocaleString('en-US');

export { cn, filterBounties, numberToCurrencyString };
