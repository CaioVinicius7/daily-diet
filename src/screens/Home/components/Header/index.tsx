import { Container, Logo, ProfileAvatar } from "./styles";

import logo from "assets/logo.png";
import avatar from "assets/avatar.png";

export function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <ProfileAvatar source={avatar} />
    </Container>
  );
}
