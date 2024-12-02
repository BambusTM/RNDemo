import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TodoScreenProps = NativeStackScreenProps<RootStackParamList, 'Todo'>;

interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

const TodoScreen: React.FC<TodoScreenProps> = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Load todos from AsyncStorage when the screen loads
        const loadTodos = async () => {
            try {
                const storedTodos = await AsyncStorage.getItem('todos');
                if (storedTodos) {
                    setTodos(JSON.parse(storedTodos));
                }
            } catch (error) {
                console.error('Failed to load todos from AsyncStorage', error);
            }
        };
        loadTodos();
    }, []);

    useEffect(() => {
        // Save todos to AsyncStorage whenever the todos list changes
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(todos));
            } catch (error) {
                console.error('Failed to save todos to AsyncStorage', error);
            }
        };
        saveTodos();
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now().toString(),
                text: inputValue.trim(),
                completed: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setInputValue('');
        }
    };

    const toggleCompletion = (id: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new todo"
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Button title="Add" onPress={addTodo} />
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
                        <View style={styles.todoItem}>
                            <Text
                                style={[
                                    styles.todoText,
                                    item.completed && styles.completedText,
                                ]}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    todoItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    todoText: {
        fontSize: 18,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TodoScreen;
