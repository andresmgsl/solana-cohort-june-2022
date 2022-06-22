import AccordionItem, { AccordionItemProps } from './accordion-item';

import { useState } from 'react';

const initialAccordionItems: Omit<AccordionItemProps, 'onExpand'>[] = [
    {
        ariaControls: 'accordion-collapse-body-1',
        children: (
            <p className="mb-2 text-[#999999]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
                adipiscing volutpat tincidunt amet vulputate porta est.
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
            <>
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
                <p className="mb-2 text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad
                    sed adipiscing volutpat tincidunt amet vulputate porta est.
                </p>
            </>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad sed
                adipiscing volutpat tincidunt amet vulputate porta est.
            </p>
        ),
        dataAccordionTarget: '#accordion-collapse-body-4',
        expanded: false,
        id: 'accordion-collapse-heading-4',
        title: 'Lorem ipsum dolor sit amet?',
    },
];

const Accordion = () => {
    const [accordionItems, setAccordionItems] = useState(initialAccordionItems);

    const onItemExpand = (id: string) => {
        setAccordionItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, expanded: !item.expanded } : item,
            ),
        );
    };

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {accordionItems.map(accordionItemProps => (
                <AccordionItem
                    key={accordionItemProps.id}
                    onExpand={onItemExpand}
                    {...accordionItemProps}
                />
            ))}
        </div>
    );
};

export default Accordion;
