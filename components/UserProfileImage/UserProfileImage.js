import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from './style';

const UserProfileImage = (props) => {
    return (
      <View style={[style.userImageContainer, {borderRadius: props.imageDimension}]}>
        <Image source={props.profileImage} style={{ width: props.imageDimension, height: props.imageDimension }} />
      </View>
    );
};

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimension: PropTypes.number.isRequired,
};

export default UserProfileImage;
