import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DataContext } from './DataContext'

const SimpleSearchBar = ({ navigation }) => {

    const { isSearch, setIsSearch } = useContext(DataContext)

    const handleOnFocus = () => {
        setIsSearch(false)

        // console.log("isSearch ", isSearch);
        navigation.navigate('SearchResults')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer} >
                {/* <Text onPress={() => console.log("parent is clicked")}>test
                <Text onPress={(e) => e.stopPropagation()}>test inside </Text></Text> */}
                <Icon name="search" size={20} color="#ccc" />
                <TextInput
                    style={styles.input}
                    placeholder="Search name here..."
                    showSoftInputOnFocus={false}
                    onFocus={handleOnFocus}
                />
            </View>

            <Icon style={styles.settingIcon} name="cog" size={20} color="#000"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}

export default SimpleSearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
    },
    input: {
        marginLeft: 5,
        width: '90%',
    },

    settingIcon: {
        width: '10%',
        marginLeft: 5,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
