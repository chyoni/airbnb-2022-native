import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const SavedPresenter = () => {
  return (
    <Container>
      <Text>Saved</Text>
    </Container>
  );
};

export default SavedPresenter;
