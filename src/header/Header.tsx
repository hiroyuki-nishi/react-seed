interface HeaderProps {
  visible: boolean 
}

export const Header = (props: HeaderProps) => {
  return props.visible ? (
    <>
    <h1>Header</h1>
    </>
  ) : (<></>);
}
