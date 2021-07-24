import Button from '@material-ui/core/Button';

interface MaterialButtonProps {
  text: string;
  onClick: () => void
}

export const MaterialButton = (props: MaterialButtonProps) => {
  const onClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {props.text}
    </Button>
  )
}