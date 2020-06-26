import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';


function ItemsList(props) {
    console.log('list', props.list)
    const { list } = props;

    return (
        <FlatList
            style={styles.container}
            data={list}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        top: 60,
    },
});

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(ItemsList);