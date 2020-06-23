import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';



function Item({ title }) {
    const [txtDecor, setTxtDecor] = useState('none');
    console.log("textdec", txtDecor)

    return (
        <TouchableOpacity
            onPress={() => txtDecor === 'none' ? setTxtDecor('line-through') : setTxtDecor('none')}
            style={styles.item}
        >
            <Text style={[styles.title, { textDecorationLine: txtDecor }]}>{title}</Text>
        </TouchableOpacity>
    );
}

function ItemsList(props) {
    console.log('list', props.list)
    const { list } = props;

    return (
        <FlatList
            style={styles.container}
            data={list}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        top: 60,
        flex: 1
    },
    item: {
        //  backgroundColor: '#ccc',
        marginVertical: 8,
        // marginHorizontal: 16,

    },
    title: {
        fontSize: 25,
    },
});

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(ItemsList);