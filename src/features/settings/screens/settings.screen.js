import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "@react-navigation/native";

import { SafeArea } from "../../../utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    console.log(photoUri);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  },[user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <Avatar.Icon size={180} icon="human" background="#2182bd" />}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user && user.email ? user.email : ""}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
