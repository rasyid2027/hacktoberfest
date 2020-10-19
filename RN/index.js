import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StatelessComponent = () => {
    return (
        <View style={styles.container}>
            <Text>StatelessComponent</Text>
        </View>
    )
}

export default StatelessComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
