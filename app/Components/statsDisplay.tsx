import {Image, Text, View, StyleSheet, ImageSourcePropType} from 'react-native'

type Props = {
    title: string;
    subTitle: string;
    image: ImageSourcePropType;
}

export default function StatsDisplay({title, subTitle, image}: Props){
    return(
        <View style = {styles.outsideContainer}>
            <View style = {{flex: 1, justifyContent: 'center'}}>
                <Image source={image} style={styles.image}/> 
           </View>
            <View style = {styles.insideContainer}>
                <Text style={styles.bigText}>{title}</Text>
                <Text style = {styles.smalltext}>{subTitle}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    outsideContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        backgroundColor: "#9943c5ff",
        width: 350,
        margin: 30,
        borderRadius: 50,
    },
    insideContainer: {
        paddingLeft: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },

    bigText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    smalltext: {
        fontSize: 15,
    }

})