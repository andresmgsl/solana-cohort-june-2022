import Text from "components/common/text";

/**
 * Properties for an interactable button component.
 */
 type HeadlineProps = {
    heading: string;
    body: string;
 }

const Headline = ({ heading, body } : HeadlineProps) => (
    <div className="flex flex-col gap-6 mb-16 text-white md:m-0">
        <Text variant="sub-heading">
            {heading}
        </Text>
        <Text variant="paragraph">
            {body}
        </Text>
    </div>
)

export default Headline;
