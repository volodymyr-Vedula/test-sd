$(document).ready(function () {
    (function (ko) {
        let CheckListViewModel = function () {
            const self = this;
            this.newTaskTitle = ko.observable('Some task');
            this.tasks = ko.observableArray();
            this.complitedTask = ko.observableArray();

            this.doneTask = function (task){
                self.tasks.splice(self.tasks.indexOf(task), 1);
                self.complitedTask.push(task);
            }

            this.undoTask = function (task){
                self.complitedTask.splice(self.complitedTask.indexOf(task), 1);
                self.tasks.push(task);
            }

            this.addTask = function () {
                $.ajax('/tasks', {
                    type: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({title: self.newTaskTitle()}),
                    success:function (task) {
                        self.tasks.push(task);
                    },
                    error: function (jqXHR) {
                        alert(jqXHR);
                    },
                })

            };

            this.removeTask = function (task) {
                $.ajax('/tasks/'+task.id, {
                    type: 'DELETE',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(task)
                })
                let start = self.tasks.indexOf(task);
                self.tasks.splice(start, 1);
            }









        }
        ko.applyBindings(new CheckListViewModel())
    })(ko)


});