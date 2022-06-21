import Button from 'components/common/button';
import cn from 'utils';

type CardProps = {
  cardSize?: string;
  shadowSize?: string;
  cardColor?: string;
  headerText: string;
  bodyText?: string;
  buttonText?: string;
};

const shadowSizes = {
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
};

const Card = ({ cardSize = '20rem', shadowSize, cardColor = '#63f194', headerText, bodyText, buttonText }: CardProps) => (
  <div className={cn(
    `h-[${cardSize}]`,
    "card relative flex flex-col items-center w-fit max-w-full"
  )}>
    
    <div className={cn(
      `bg-[${cardColor}]`,
      "flex flex-col justify-between gap-10 h-full rounded-2xl px-10 py-11"
    )} >
      <div className="flex max-w-xl flex-col gap-5">
        <h2 className="text-4xl font-medium md:text-6xl"> {headerText} </h2>
        {bodyText && <p className="text-lg"> {bodyText} </p>}
      </div>
      {buttonText && <Button text={buttonText} />}
    </div>
    
    {shadowSize && <div className={cn(
      `h-[2rem] from-[#63f194]`,
      "card-shadow z-[-1] absolute top-[calc(100%-0.5rem)] w-[calc(100%-(1rem/2)-2px)] bg-gradient-to-b" 
    )} />}
  </div>
);

export default Card;
