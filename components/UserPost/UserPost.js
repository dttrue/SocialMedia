import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {  faEllipsisH,} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMessage, faBookmark } from "@fortawesome/free-regular-svg-icons";
import style from "./style";

const UserPost = (props) => {
    return (
      <View style={style.userPostContainer}>
        <View style={style.user}>
          <View style={style.userContainer}>
            <UserProfileImage
              profileImage={props.profileImage}
              imageDimension={48}
            />
            <View style={style.textContainer}>
              <Text style={style.userText}>
                {props.firstName} {props.lastName}
              </Text>
              {props.location && (
                <Text style={style.locationText}>{props.location}</Text>
              )}
            </View>
          </View>

          <FontAwesomeIcon icon={faEllipsisH} size={22} color="#79869f" />
        </View>
        <View style={style.imageContainer}>
          <Image source={props.image} />
        </View>
        <View style={style.userPostStats}>
          <View style={style.userPostStatButton}>
            <FontAwesomeIcon icon={faHeart} color={"#79869f"} />
            <Text style={style.userPostStatText}>
              {props.likes}
            </Text>
          </View>
          <View style={style.userPostStatButtonRight}>
            <FontAwesomeIcon icon={faMessage} color={"#79869f"} />
            <Text style={style.userPostStatText}>
              {props.comments}
            </Text>
          </View>
          <View style={style.userPostStatButtonRight}>
            <FontAwesomeIcon icon={faBookmark} color={"#79869f"} />
            <Text style={style.userPostStatText}>
              {props.bookmarks}
            </Text>
          </View>
        </View>
      </View>
    );
};

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,  
};

export default UserPost;