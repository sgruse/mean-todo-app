export default function($scope) {
  $scope.todos = [
    {
      task: 'do dishes',
      isCompleted: false
    },
    {
      taks: 'walk the dog',
      isCopmleted: true
    }
  ];

  $scope.onCompletedClick = (todo) => {
    todo.isCompleted = !todo.isCopmleted;
  };
}
