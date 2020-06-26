import React from "react";
import { View, StyleSheet } from 'react-native';
import AddItem from "./app/components/AddItem";
import ItemsList from "./app/components/ItemsList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./app/reducers";

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddItem style={styles.add} />
        <ItemsList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
});
