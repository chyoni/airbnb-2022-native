import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const DismissKeyboard: React.FC<IProps> = ({ children }) => {
  const onPress = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
