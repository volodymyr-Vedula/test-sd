package com.cd.test.demo;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("tasks")
public class TasksController {
    private static int id = 1;
    private static Map<Integer, String> tasks = new HashMap<>();


    @PostMapping
    public Task addTask(@RequestBody Task task) {
        task.setId(id++);
        tasks.put(task.getId(), task.getTitle());
        return task;
    }

    @DeleteMapping("{id}")
    public void deleteTask(@PathVariable Integer id) {
        tasks.remove(id);
    }
}
