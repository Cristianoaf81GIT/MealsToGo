import React, { useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { Button, View } from "react-native";

import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraPermissionContainer = styled.View`
  flex: 1;
  justifycontent: center;
`;

const StyledText = styled(Text)`
  textalign: center;
`;

const StyledButton = styled(Button)`
  margin: 5%;
  height: 180p;
`;

export const CameraScreen = () => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <CameraPermissionContainer>
        <StyledText>We need your permission to show the camera.</StyledText>
        <StyledButton onPress={requestPermission} title="Grant permission" />
      </CameraPermissionContainer>
    );
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}
    />
  );
};
