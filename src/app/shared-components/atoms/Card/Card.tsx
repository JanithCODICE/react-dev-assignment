import { Card, CardBody, CardProps, CardSubtitle, CardTitle } from "reactstrap";
interface CustomCardProps extends CardProps {
  cardTitle?: string;
  cardSubtitle?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  cardTitle,
  cardSubtitle,
  children,
  className,
  bodyClassName,
  ...props
}) => {
  return (
    <Card className={"custom-card" + (className ?? "")} {...props}>
      <CardBody className={bodyClassName}>
        <div className="d-flex flex-column mb-auto">
          {cardTitle && <CardTitle tag="h5">{cardTitle}</CardTitle>}
          {cardSubtitle && (
            <CardSubtitle className="mb-2 text-muted" tag="p">
              {cardSubtitle}
            </CardSubtitle>
          )}
        </div>
        {children}
      </CardBody>
    </Card>
  );
};

export default CustomCard;
