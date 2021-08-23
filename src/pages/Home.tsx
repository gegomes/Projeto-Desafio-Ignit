import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTask => [...oldTask, newTask])
  }

  function handleToggleTaskDone(id: number) {
    const LineTask = tasks.map(item => ({ ...item }))
    const marqTask = LineTask.find(item => item.id === id)
    if (!marqTask)
      return
    marqTask.done = !marqTask.done
    setTasks(LineTask)
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter(item => item.id !== id)
    setTasks(removeTask)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})