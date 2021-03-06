import React, { useState, useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, Keyboard } from 'react-native'
import { DataContext } from './DataContext'
import Icon from '@expo/vector-icons/FontAwesome5'

const SearchBar = (props) => {


    const { navigation, route } = { ...props }
    // console.log("route outside on search bar is ", route);


    const { items, setItems, data, searchValue, setSearchValue, isSearch, setIsSearch } = useContext(DataContext)
    // const [value, setValue] = useState("")
    const [isHome, setIsHome] = useState(true)  // check if at home screen

    // setIsHome(checkValue && checkValue.isHome)
    useEffect(() => {
        // console.log("route inside on search bar is ", route);
        if (route.name !== 'Home') {
            setIsHome(false)
        }
    }, [])

    const handleOnPress = () => {

        // console.log("data in search is ", items);

        const result = data.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        setItems(result)
        setIsSearch(true)
        // navigation.navigate('SearchResults')
        Keyboard.dismiss();

    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search name here..."
                    value={searchValue}
                    onChangeText={text => setSearchValue(text)}
                    onFocus={() => setIsSearch(false)}
                    autoFocus={true}
                />
            </View>

            {/* change search button with a search icon  */}
            {/* <Icon onPress={handleOnPress} name="search" size={20} color="#000" /> */}

            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={styles.button} title="Button" onPress={handleOnPress} >Search</Text>
            </TouchableOpacity>
            {/* <Icon style={isHome ? styles.settingIcon : styles.remove} name="cog" size={20} color="#000"
                onPress={() => navigation.navigate('Settings')}
            /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,

    },
    inputContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '75%',
        height: '100%',
        minHeight: 30,
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 10,
    },
    buttonContainer: {
        width: '20%',
        height: '100%',
        minHeight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1467d4'
    },
    button: {
        color: '#fff',
    },
    settingIcon: {
        width: '5%',
        margin: 5,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    remove: {
        display: 'none',
    }


})



export default SearchBar
