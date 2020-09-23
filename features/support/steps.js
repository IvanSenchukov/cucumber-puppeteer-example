import { After, Before, Given, Then, When } from "cucumber";

Before(async function(testCase) {
  return await this.openTodoPage();
});

After(async function() {
  return await this.closeTodoPage();
});

Given("I have the todo list", async function(dataTable) {
  const rows = dataTable.rows();
  for (let index = 0; index < rows.length; index++) {
    await this.writeTodo(rows[index][0]);
  }
});

When(/^I add the todo item "(.*)" to the list$/, async function(todo) {
  return await this.writeTodo(todo);
});

When(/^I press the delete button of the todo item (\d+)$/, async function(
  todoIndex
) {
  return await this.deleteTodo(todoIndex);
});

Then(/^I expect the todo list to have (\d+) items?$/, async function(number) {
  return await this.checkNumberOfTodos(number);
});

Then(/^I expect the todo item (\d+) to be "(.*)"$/, async function(
  todoIndex,
  todo
) {
  return await this.checkTodoIsInList(todoIndex, todo);
});


Given("у меня есть todo-лист", async function(dataTable) {
  const rows = dataTable.rows();
  for (let index = 0; index < rows.length; index++) {
    await this.writeTodo(rows[index][0]);
  }
});

When(/^я добавляю элемент todo-листа "(.*)"$/, async function(todo) {
  return await this.writeTodo(todo);
});

When(/^я нажимаю на кнопку удалить todo-элемент с номером (\d+)$/, async function(
    todoIndex
) {
  return await this.deleteTodo(todoIndex);
});

Then(/^я ожидаю, что в todo-листе будет (\d+) элемента?$/, async function(number) {
  return await this.checkNumberOfTodos(number);
});

Then(/^я ожидаю, что todo-элемент под номером (\d+) будет "(.*)"$/, async function(
    todoIndex,
    todo
) {
  return await this.checkTodoIsInList(todoIndex, todo);
});

