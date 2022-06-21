import { Fragment, useState } from 'react';

import cn from 'utils';

type AccordionItem = {
    ariaControls: string;
    // eslint-disable-next-line no-undef
    children: JSX.Element;
    dataAccordionTarget: string;
    expanded: boolean;
    id: string;
    title: string;
};

const Accordion = () => {
    const initialAccordionItems: AccordionItem[] = [
        {
            ariaControls: 'accordion-collapse-body-1',
            children: (
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. d
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
            ),
            dataAccordionTarget: '#accordion-collapse-body-1',
            expanded: false,
            id: 'accordion-collapse-heading-1',
            title: 'Lorem ipsum dolor sit amet?',
        },
        {
            ariaControls: 'accordion-collapse-body-2',
            children: (
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. d
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
            ),
            dataAccordionTarget: '#accordion-collapse-body-2',
            expanded: false,
            id: 'accordion-collapse-heading-2',
            title: 'Lorem ipsum dolor sit amet?',
        },
        {
            ariaControls: 'accordion-collapse-body-3',
            children: (
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. d
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
            ),
            dataAccordionTarget: '#accordion-collapse-body-3',
            expanded: false,
            id: 'accordion-collapse-heading-3',
            title: 'Lorem ipsum dolor sit amet?',
        },
        {
            ariaControls: 'accordion-collapse-body-4',
            children: (
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. d
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
            ),
            dataAccordionTarget: '#accordion-collapse-body-4',
            expanded: false,
            id: 'accordion-collapse-heading-4',
            title: 'Lorem ipsum dolor sit amet?',
        },
    ];

    const [accordionItems, setAccordionItems] = useState(initialAccordionItems);

    const expandItem = (id: string) => {
        setAccordionItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, expanded: !item.expanded } : item,
            ),
        );
    };

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {accordionItems.map(
                ({
                    id,
                    dataAccordionTarget,
                    children,
                    ariaControls,
                    title,
                    expanded,
                }) => (
                    <Fragment key={id}>
                        <h3 id={id}>
                            <button
                                type="button"
                                className="border-wi flex w-full items-center justify-between border-[1.5px] border-x-0 border-b-0 border-[#666666] p-3 text-left font-medium text-gray-400 hover:bg-zinc-900"
                                data-accordion-target={dataAccordionTarget}
                                aria-expanded={expanded}
                                aria-controls={ariaControls}
                                onClick={() => expandItem(id)}
                            >
                                <span className="font-medium text-white">
                                    {title}
                                </span>
                                <svg
                                    data-accordion-icon
                                    className={cn(
                                        'h-6 w-6 shrink-0',
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
                            className={cn(!expanded && 'hidden')}
                            aria-labelledby={id}
                        >
                            <div className="border border-x-0 border-y-0 border-[#666666] p-2">
                                {children}
                            </div>
                        </div>
                    </Fragment>
                ),
            )}
        </div>
    );
};

export default Accordion;
