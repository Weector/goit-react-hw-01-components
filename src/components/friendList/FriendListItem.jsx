import { Item, OlineMarker, AvatarImg, UserName } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <OlineMarker marker={isOnline}></OlineMarker>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
};
