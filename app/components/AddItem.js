import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import { addItem } from '../actions/'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function AddItem(props) {
    const [text, setText] = useState('');

    const handleBtnClick = () => {
        props.addItem(text);
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={t => setText(t)}
                onSubmitEditing={handleBtnClick}
                value={text}
            />
            <Button
                title='Add'
                onPress={handleBtnClick}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        top: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    input: {
        width: '85%',
        borderWidth: 1
    }
})


const matchDispatchToProps = dispatch => {
    return bindActionCreators({ addItem }, dispatch);
}


export default connect(null, matchDispatchToProps)(AddItem);