import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyles from "./assets/styles/globalStyles";
import UserStory from "./components/UserStory/UserStory";
import userStories from "./UserStories";
import userPosts from "./UserPosts";
import UserPost from "./components/UserPost/UserPost";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  const userStoriesPageSize = 4;
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoryRenderedData, setUserStoryRenderedData] = useState([]);
  const [isLoadedUserStories, setIsLoadedUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadedUserPosts, setIsLoadedUserPosts] = useState(false);

 

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return startIndex >= database.length
      ? []
      : database.slice(startIndex, endIndex);
  };

 

  useEffect(() => {
    setIsLoadedUserStories(true);
    const initialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoryRenderedData(initialData);
    setIsLoadedUserStories(false);

     setIsLoadedUserPosts(true);
     const initialDataPosts = pagination(userPosts, 1, userPostsPageSize);
     setUserPostsRenderedData(initialDataPosts);
     setIsLoadedUserPosts(false);

    
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView>
        <View style={globalStyles.userPostContainer}>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyles.header}>
                  <Title title="Let's Explore" />
                  <TouchableOpacity style={globalStyles.messageIcon}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={20}
                      color="#898dae"
                    />
                    <View style={globalStyles.messageNumberContainer}>
                      <Text style={globalStyles.messageNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={globalStyles.userStoryContainer}>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadedUserStories) {
                        return;
                      }
                      setIsLoadedUserStories(true);
                      const nextPage = userStoryCurrentPage + 1;
                      const moreData = pagination(
                        userStories,
                        nextPage,
                        userStoriesPageSize
                      );
                      if (moreData.length > 0) {
                        setUserStoryRenderedData((prev) => [
                          ...prev,
                          ...moreData,
                        ]);
                        setUserStoryCurrentPage(nextPage);
                      }
                      setIsLoadedUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoryRenderedData}
                    keyExtractor={(item) => "userStory" + item.id}
                    renderItem={({ item }) => (
                      <UserStory
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadedUserPosts) {
                return;
              }
              setIsLoadedUserPosts(true);
              const nextPage = userPostsCurrentPage + 1;
              const moreData = pagination(
                userPosts,
                nextPage,
                userPostsPageSize
              );
              if (moreData.length > 0) {
                setUserPostsRenderedData((prev) => [...prev, ...moreData]);
                setUserPostsCurrentPage(nextPage);
              }
              setIsLoadedUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            renderItem={({ item }) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                image={item.profileImage}
                profileImage={item.image}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
