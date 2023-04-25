import { Typography } from "../Typography";

interface QuestionItemProps {
  title: string;
  text: string;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ title, text }) => {
  return (
    <div className="pb-3">
      <Typography className="mb-2" tag="h5" font="quicksand" bold>
        {title}
      </Typography>
      <Typography tag="h6" className="mb-4">
        {text}
      </Typography>
    </div>
  );
};
