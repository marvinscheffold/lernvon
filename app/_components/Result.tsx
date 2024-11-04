import { Button, Typography } from "@mui/material";
import Link from "next/link";

type ResultProps = {
  tagline?: string;
  title: string;
  subTitle: string;
  linkButton?: {
    href: string;
    text: string;
  };
  button?: {
    onClick: () => void;
    text: string;
  };
};

export function Result({
  tagline,
  title,
  subTitle,
  linkButton,
  button,
}: ResultProps) {
  return (
    <div className="px-6 py-16 text-center flex flex-col gap-4 items-center justify-center">
      {tagline && (
        <Typography variant="body1" color="textSecondary">
          {tagline}
        </Typography>
      )}
      <Typography variant="h3" component={"h1"}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {subTitle}
      </Typography>
      <div className="pt-4">
        {linkButton && (
          <Link href={linkButton.href}>
            <Button size="large" variant="contained">
              {linkButton.text}
            </Button>
          </Link>
        )}
        {button && (
          <Button size="large" onClick={button.onClick} variant="contained">
            {button.text}
          </Button>
        )}
      </div>
    </div>
  );
}
