import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale } from "../../assets/styles/scaling";


const style = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: horizontalScale(10),
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },  
    userText: {
        color: '#000',
        fontSize: 16,
        fontFamily: getFontFamily('Inter', '600'),
        fontStyle: 'normal',
        letterSpacing: 0.14,
        lineHeight: 'normal',
    },
    locationText: {
        color: '#79869f',
        fontSize: 12,
        fontFamily: getFontFamily('Inter', '400'),
        fontStyle: 'normal',
        letterSpacing: 0.12,
        lineHeight: 'normal',
        marginTop: 5,
    },
    imageContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    userPostContainer: {
        marginTop: 35,
        borderBottomWidth: 1,
        paddingBottom : 20,
        borderBottomColor: '#eff2f6',
    },
    userPostStats: {
        flexDirection: 'row',
        marginLift: horizontalScale(10),
    },
    userPostStatButton: {
        flexDirection: 'row',
    },
    userPostStatButtonRight: {
        flexDirection: "row",
        marginLeft: horizontalScale(10),
    },
    userPostStatText: {
        marginLeft: 3,
        color: "#79869f",
    }   
});

export default style;