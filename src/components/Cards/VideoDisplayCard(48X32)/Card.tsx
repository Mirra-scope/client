import { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { CardHeader, SxProps, Box, Stack, alpha, CardContent } from "@mui/material";
import Avatar from "@/components/Avatar";
import { MoreVertIcon } from "@/components/icons";

interface VideoDisplayCardProps {
  thumbnail: string;
  title: string;
  description: string;
  onClickMenuIcon?: () => void;
  avatarSrc?: string;
  episodeNo?: number;
  children?: ReactNode;
}

export default function VideoDisplayCard({ thumbnail, children, title, description, onClickMenuIcon, avatarSrc, episodeNo }: VideoDisplayCardProps) {
  const cardStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(32),
  }));

  const cardImageContainerStyle = useThemeStyles<SxProps>((theme) => ({
    position: "relative",
    height: theme.spacing(16),
  }));

  const cardImageStyle: SxProps = {
    width: "100%",
    height: "100%",
  };

  const cardContentStyle = useThemeStyles<SxProps>((theme) => ({
    padding: `${theme.spacing(1)} !important`,
  }));

  const cardAvatarStyle = useThemeStyles<SxProps>((theme) => ({
    height: theme.spacing(4),
    width: theme.spacing(4),
  }));

  const cardHeaderStyle = useThemeStyles<SxProps>((theme) => ({
    padding: `${theme.spacing(1)} !important`,
  }));

  const badgeStyle = useThemeStyles<SxProps>((theme) => ({
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
    background: alpha(theme.palette.primary.main, 0.4),
    minWidth: theme.spacing(4),
    minHeight: theme.spacing(4),
  }));

  return (
    <Card sx={cardStyle}>
      <Box sx={cardImageContainerStyle}>
        <CardMedia sx={cardImageStyle} component="img" image={thumbnail} />
        {episodeNo ? (
          <Stack sx={badgeStyle} justifyContent={"center"} alignItems={"center"}>
            {episodeNo}
          </Stack>
        ) : null}
      </Box>
      <CardHeader sx={cardHeaderStyle} avatar={<Avatar sx={cardAvatarStyle} src={avatarSrc} />} title={title.slice(0, 30) + "..."} subheader={description.slice(0, 35) + "..."} action={<MoreVertIcon onClick={onClickMenuIcon} />} />
      <CardContent sx={cardContentStyle}>{children}</CardContent>
    </Card>
  );
}
