import { useRef, useState } from 'react';

import Text from 'components/common/text';
import { cn } from 'utils';

export type AccordionItemProps = {
    ariaControls: string;
    children: JSX.Element;
    dataAccordionTarget: string;
    expanded: boolean;
    id: string;
    onExpand: (id: string) => void;
    title: string;
};

const AccordionItem = ({
    ariaControls,
    children,
    dataAccordionTarget,
    expanded,
    id,
    onExpand,
    title,
}: AccordionItemProps) => {
    const [height, setHeight] = useState('0px');
    const contentSpace = useRef<HTMLDivElement>(null);

    /**
     * Updates the `maxHeight` value of the current Accordion item. If selected,
     * `maxHeight` is incremented to the height of its content, otherwise it is
     * set to 0px.
     */
    const expand = () => {
        setHeight(expanded ? '0px' : `${contentSpace.current.scrollHeight}px`);
        onExpand(id);
    };

    return (
        <div className="border border-x-0 border-b-0 border-white py-2 first:border-0 first:pt-0 last:pb-0">
            <h3 id={id}>
                <button
                    type="button"
                    className="my-2 flex w-full items-center justify-between px-0 text-left font-medium text-gray-400 transition duration-300 ease-in-out"
                    data-accordion-target={dataAccordionTarget}
                    aria-expanded={expanded}
                    aria-controls={ariaControls}
                    onClick={expand}
                >
                    <Text
                        className="font-medium text-white"
                        variant="paragraph"
                    >
                        {title}
                    </Text>
                    <svg
                        data-accordion-icon
                        className={cn(
                            'ease h-6 w-6 shrink-0 transform transition duration-300',
                            expanded && 'rotate-180',
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </h3>
            <div
                id={ariaControls}
                className="overflow-auto transition-[max-height] duration-300 ease-in-out"
                aria-labelledby={id}
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
            >
                <div className="mb-1 border border-x-0 border-y-0 border-white py-0 px-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
