import { Typography } from "../Typography";

interface AgendaItemProps {
  name: string;
  location?: string;
  date: string;
}

export const AgendaItem: React.FC<AgendaItemProps> = ({
  name,
  location,
  date,
}) => {
  return (
    <div className="mb-4">
      <Typography tag="h6" className="mb-1">
        {date}
      </Typography>
      <Typography
        weight="100"
        tag="h2"
        font="quicksand"
        className="mb-1 mt-2d mb-2"
      >
        {name}
      </Typography>
      <Typography tag="h5" font="anaktoria" className="col-xs-12 mb-1">
        {location}
      </Typography>
    </div>
  );
};
