import React, { useState } from 'react';
import { TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

function Item(props) {
    const { item, deleteItem } = props;
    const [txtDecor, setTxtDecor] = useState('none');
    const handleBtnClick = () => {
        deleteItem(item);
    }

    return (
        <TouchableOpacity
            onPress={() => txtDecor === 'none' ? setTxtDecor('line-through') : setTxtDecor('none')}
            style={styles.row}
        >
            <Text style={[styles.text, { textDecorationLine: txtDecor }]}>{item}</Text>
            <Button
                title='x'
                color='red'
                onPress={handleBtnClick}
            />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    row: {
        flex: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    text: {
        fontSize: 25,
    },

});


const matchDispatchToProps = dispatch => {
    return bindActionCreators({ deleteItem }, dispatch)
};

export default connect(null, matchDispatchToProps)(Item);